import SearchFormWrapper from "./SearchFormWrapper";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <SearchFormWrapper />
      {children}
    </main>
  );
}
