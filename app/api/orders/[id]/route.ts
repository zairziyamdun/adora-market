import { NextResponse } from "next/server";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(request: Request, context: RouteContext) {
  void request;
  await context.params;
  return NextResponse.json({ error: "Not implemented" }, { status: 501 });
}

export async function PATCH(request: Request, context: RouteContext) {
  void request;
  await context.params;
  return NextResponse.json({ error: "Not implemented" }, { status: 501 });
}
