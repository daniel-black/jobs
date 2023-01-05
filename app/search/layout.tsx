import Search from "./Search";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Search />
      {children}
    </main>
  );
}
