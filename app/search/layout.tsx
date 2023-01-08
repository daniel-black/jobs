import SearchFormWrapper from "./SearchFormWrapper";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col sm:flex-row">
      <SearchFormWrapper />
      {children}
    </main>
  );
}
