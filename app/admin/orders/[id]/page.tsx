type Props = {
  params: Promise<{ id: string }>;
};

export default async function AdminOrderDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold text-neutral-900">Заказ</h1>
      <p className="mt-2 text-neutral-600">
        Детали заказа (id: {id}) — placeholder.
      </p>
    </main>
  );
}
