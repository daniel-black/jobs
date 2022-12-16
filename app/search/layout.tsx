
export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <p>Hello I am the layout</p>
      {children}
    </main>
  );
}
