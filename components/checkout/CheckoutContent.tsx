"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckoutForm, CheckoutFormValues } from "@/components/checkout/CheckoutForm";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { useCartStore } from "@/store/cart";

type CheckoutFormErrors = Partial<Record<keyof CheckoutFormValues, string>>;

const initialValues: CheckoutFormValues = {
  customerName: "",
  phone: "",
  city: "",
  deliveryType: "delivery",
  address: "",
  comment: "",
  confirmed: false,
};

export function CheckoutContent() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const clear = useCartStore((state) => state.clear);

  const [values, setValues] = useState<CheckoutFormValues>(initialValues);
  const [errors, setErrors] = useState<CheckoutFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const trimmedValues = useMemo(
    () => ({
      customerName: values.customerName.trim(),
      phone: values.phone.trim(),
      city: values.city.trim(),
      address: values.address.trim(),
      comment: values.comment.trim(),
      deliveryType: values.deliveryType,
      confirmed: values.confirmed,
    }),
    [values]
  );

  const setField = <K extends keyof CheckoutFormValues>(
    field: K,
    value: CheckoutFormValues[K]
  ) => {
    setValues((prev) => {
      if (field === "deliveryType" && value === "pickup") {
        return { ...prev, deliveryType: "pickup", address: "" };
      }
      return { ...prev, [field]: value };
    });

    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validate = (): CheckoutFormErrors => {
    const nextErrors: CheckoutFormErrors = {};

    if (!trimmedValues.customerName) {
      nextErrors.customerName = "Укажите имя для подтверждения заказа.";
    }
    if (!trimmedValues.phone) {
      nextErrors.phone = "Телефон обязателен для связи.";
    }
    if (trimmedValues.deliveryType === "delivery" && !trimmedValues.address) {
      nextErrors.address = "Для доставки нужен полный адрес.";
    }
    if (!trimmedValues.confirmed) {
      nextErrors.confirmed = "Подтвердите согласие с условиями оформления.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (items.length === 0) {
      setErrors((prev) => ({
        ...prev,
        confirmed: "Корзина пуста. Добавьте линзы перед оформлением.",
      }));
      return;
    }

    setIsSubmitting(true);

    try {
      const order = {
        customerName: trimmedValues.customerName,
        phone: trimmedValues.phone,
        city: trimmedValues.city,
        deliveryType: trimmedValues.deliveryType,
        address:
          trimmedValues.deliveryType === "delivery" ? trimmedValues.address : "",
        comment: trimmedValues.comment,
        items,
        totalPrice,
      };

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error("Не удалось оформить заказ");
      }

      clear();
      router.push("/order-success");
    } catch {
      setSubmitError(
        "Не удалось сохранить заказ. Проверьте данные и попробуйте еще раз."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-[65vh] bg-gradient-to-b from-violet-50/35 via-white to-stone-50/50 py-8 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
            Adora Market
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Оформление заказа
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-stone-600 sm:text-base">
            Заполните данные для заказа цветных линз, и мы свяжемся для
            подтверждения наличия и финальной оплаты.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            {submitError ? (
              <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {submitError}
              </div>
            ) : null}
            <CheckoutForm
              values={values}
              errors={errors}
              isSubmitting={isSubmitting}
              onSubmit={handleSubmit}
              onChange={setField}
            />
          </div>
          <div className="lg:col-span-5">
            <OrderSummary />
          </div>
        </div>
      </div>
    </main>
  );
}
