type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold text-neutral-900">Линза</h1>
      <p className="mt-2 text-neutral-600">
        Страница линзы (id: {id}) — заглушка до подключения данных каталога.
      </p>
    </main>
  );
}
