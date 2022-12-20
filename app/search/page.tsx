import SearchResults from "./SearchResults";

export default async function SearchPage() {
  return (
    <div>
      This is the server rendered /search page
      <SearchResults />
    </div>
  );

  // if (searchParams && Object.keys(searchParams).length === 0) {
  //   return <div>Try searching for jobs!</div>;
  // }

  // const urlSearchParams = new URLSearchParams(searchParams);
  // const url = `${getBaseUrl()}/api/jobs?${urlSearchParams.toString()}`;
  // // console.log(url);

  // const response = await fetch(url, { cache: 'no-store' });

  // if (!response.ok) {
  //   return (
  //     <div>
  //       <p>API Error</p>
  //       <p>{JSON.stringify(response, null, 2)}</p>
  //     </div>
  //   );
  // }

  // const { result } = await response.json() as JobsApiResponse;
  // console.log(result);

  // if (result.hasOwnProperty('code')) {
  //   return (
  //     <div>
  //       <p>API Error</p>
  //       <p>{JSON.stringify(result, null, 2)}</p>
  //     </div>
  //   );
  // }

  // const { count, countAll, jobs } = result as Results;

  // if (count === 0) return <p>No results found for {urlSearchParams.toString()}</p>;

  // const getResultsLine = (): string => {
  //   return count === countAll 
  //     ? (count === 1 ? 'Viewing only result' : `Viewing all ${count} results`) 
  //     : `Viewing ${count} of ${countAll} results`;
  // } 

  // const getSearchTerms = (): string => {
  //   let terms = 'for ';
  //   if (searchParams?.PositionTitle && searchParams.PositionTitle !== '') terms += `"${searchParams.PositionTitle}"`;
  //   if (searchParams?.LocationName && searchParams.LocationName !== '') terms += `, "${searchParams.LocationName}"`;
  //   if (searchParams?.Keyword && searchParams.Keyword !== '') terms += `, "${searchParams.Keyword}"`;
  //   return terms;
  // }

  // return (
  //   <div>
  //     <p>{getResultsLine()} {getSearchTerms()}</p>
  //     {jobs && jobs.length > 0 && (
  //       <div className="space-y-3 px-3">
  //         {jobs.map(job => <JobListing job={job} key={job.id} />)}
  //       </div>
  //     )} 
  //   </div>
  // );
}
