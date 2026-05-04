import { NextResponse } from "next/server";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(request: Request, context: RouteContext) {
  void request;
  await context.params;
  return new NextResponse(null, { status: 501 });
}

export async function PATCH(request: Request, context: RouteContext) {
  void request;
  await context.params;
  return new NextResponse(null, { status: 501 });
}

export async function DELETE(request: Request, context: RouteContext) {
  void request;
  await context.params;
  return new NextResponse(null, { status: 501 });
}
