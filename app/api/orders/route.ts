import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  return NextResponse.json({ error: "Not implemented" }, { status: 501 });
}

type OrderItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
};

type OrderPayload = {
  customerName?: string;
  phone?: string;
  city?: string;
  deliveryType?: string;
  address?: string;
  comment?: string;
  items?: OrderItem[];
  totalPrice?: number;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as OrderPayload;
    const { customerName, phone, city, deliveryType, address, comment, items, totalPrice } =
      body;

    if (!customerName || !phone || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Некорректные данные заказа" },
        { status: 400 }
      );
    }

    const db = await getDb();

    const orderToInsert = {
      customerName,
      phone,
      city: city ?? "",
      deliveryType: deliveryType ?? "",
      address: address ?? "",
      comment: comment ?? "",
      items,
      totalPrice: totalPrice ?? 0,
      status: "new",
      paymentStatus: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const { insertedId } = await db.collection("orders").insertOne(orderToInsert);

    return NextResponse.json({
      success: true,
      orderId: insertedId.toString(),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Не удалось сохранить заказ";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
