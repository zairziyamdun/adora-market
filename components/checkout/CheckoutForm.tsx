"use client";

import { FormEvent } from "react";

export type DeliveryType = "delivery" | "pickup";

export type CheckoutFormValues = {
  customerName: string;
  phone: string;
  city: string;
  deliveryType: DeliveryType;
  address: string;
  comment: string;
  confirmed: boolean;
};

type CheckoutFormErrors = Partial<Record<keyof CheckoutFormValues, string>>;

type CheckoutFormProps = {
  values: CheckoutFormValues;
  errors: CheckoutFormErrors;
  isSubmitting: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: <K extends keyof CheckoutFormValues>(
    field: K,
    value: CheckoutFormValues[K]
  ) => void;
};

export function CheckoutForm({
  values,
  errors,
  isSubmitting,
  onSubmit,
  onChange,
}: CheckoutFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-stone-200/90 bg-white p-6 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.12)] sm:p-8"
      noValidate
    >
      <h2 className="text-lg font-semibold tracking-tight text-stone-900 sm:text-xl">
        Контактные данные для заказа линз
      </h2>
      <p className="mt-2 text-sm text-stone-600">
        Заполните форму, и менеджер Adora Market подтвердит наличие и детали
        оплаты.
      </p>

      <div className="mt-8 space-y-5">
        <div>
          <label htmlFor="customerName" className="text-sm font-medium text-stone-700">
            Имя
          </label>
          <input
            id="customerName"
            type="text"
            value={values.customerName}
            onChange={(event) => onChange("customerName", event.target.value)}
            className="mt-2 h-12 w-full rounded-2xl border border-stone-200 px-4 text-sm text-stone-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            placeholder="Как к вам обращаться"
            autoComplete="name"
          />
          {errors.customerName ? (
            <p className="mt-2 text-xs text-red-600">{errors.customerName}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-stone-700">
            Телефон
          </label>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={(event) => onChange("phone", event.target.value)}
            className="mt-2 h-12 w-full rounded-2xl border border-stone-200 px-4 text-sm text-stone-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            placeholder="+7 (___) ___-__-__"
            autoComplete="tel"
            required
          />
          {errors.phone ? (
            <p className="mt-2 text-xs text-red-600">{errors.phone}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="city" className="text-sm font-medium text-stone-700">
            Город
          </label>
          <input
            id="city"
            type="text"
            value={values.city}
            onChange={(event) => onChange("city", event.target.value)}
            className="mt-2 h-12 w-full rounded-2xl border border-stone-200 px-4 text-sm text-stone-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            placeholder="Например, Алматы"
            autoComplete="address-level2"
          />
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-stone-700">Тип получения</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-stone-200 p-4 transition hover:border-violet-300">
              <input
                type="radio"
                name="deliveryType"
                value="delivery"
                checked={values.deliveryType === "delivery"}
                onChange={() => onChange("deliveryType", "delivery")}
                className="h-4 w-4 accent-violet-600"
              />
              <span className="text-sm text-stone-800">Доставка</span>
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-stone-200 p-4 transition hover:border-violet-300">
              <input
                type="radio"
                name="deliveryType"
                value="pickup"
                checked={values.deliveryType === "pickup"}
                onChange={() => onChange("deliveryType", "pickup")}
                className="h-4 w-4 accent-violet-600"
              />
              <span className="text-sm text-stone-800">Самовывоз</span>
            </label>
          </div>
        </fieldset>

        {values.deliveryType === "delivery" ? (
          <div>
            <label htmlFor="address" className="text-sm font-medium text-stone-700">
              Адрес доставки
            </label>
            <input
              id="address"
              type="text"
              value={values.address}
              onChange={(event) => onChange("address", event.target.value)}
              className="mt-2 h-12 w-full rounded-2xl border border-stone-200 px-4 text-sm text-stone-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
              placeholder="Улица, дом, квартира"
            />
            {errors.address ? (
              <p className="mt-2 text-xs text-red-600">{errors.address}</p>
            ) : null}
          </div>
        ) : null}

        <div>
          <label htmlFor="comment" className="text-sm font-medium text-stone-700">
            Комментарий к заказу (необязательно)
          </label>
          <textarea
            id="comment"
            value={values.comment}
            onChange={(event) => onChange("comment", event.target.value)}
            className="mt-2 min-h-[110px] w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            placeholder="Например, удобное время для звонка"
          />
        </div>

        <div>
          <label className="flex items-start gap-3 rounded-2xl border border-stone-200 p-4">
            <input
              type="checkbox"
              checked={values.confirmed}
              onChange={(event) => onChange("confirmed", event.target.checked)}
              className="mt-1 h-4 w-4 rounded accent-violet-600"
            />
            <span className="text-sm leading-relaxed text-stone-700">
              Я подтверждаю заказ и согласен, что оплата производится после
              подтверждения менеджером.
            </span>
          </label>
          {errors.confirmed ? (
            <p className="mt-2 text-xs text-red-600">{errors.confirmed}</p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 flex min-h-[54px] w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-rose-500 px-6 text-base font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-200 hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Оформляем..." : "Оформить заказ"}
      </button>
    </form>
  );
}
