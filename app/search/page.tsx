// import SearchResults from "./SearchResults";

export default async function SearchPage({ searchParams }: {
  searchParams?: {
    PositionTitle?: string,
    LocationName?: string,
    Keyword?: string,
  }
}) {
  return (
    <div>
      <p>searchParams:</p>
      {/* <SearchResults /> */}
      <pre>{JSON.stringify(searchParams, null, 2)}</pre>
    </div>
  );
}
