type Props = {
  params: Promise<{ id: string }>;
};

export default async function AdminProductEditPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold text-neutral-900">Редактирование линзы</h1>
      <p className="mt-2 text-neutral-600">
        Позиция каталога (id: {id}) — заглушка до формы и API.
      </p>
    </main>
  );
}
