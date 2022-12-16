import { Job, Pay, Results, Location } from "../../types/jobsApiTypes";
import { PositionLocation, PositionRemuneration, SearchResultItem, UsaJobsSearchResult } from "../../types/usajobsApiTypes";

export function mapUsaJobsSearchResults(results: UsaJobsSearchResult): Results {
  console.log('top mapper:');
  
  console.log(results)
  return {
    count: results.SearchResultCount,
    countAll: results.SearchResultCountAll,
    jobs: mapUsaJobs(results.SearchResultItems),
  } as Results;
}

function mapUsaJobs(jobs: SearchResultItem[]): Job[] {
  return jobs?.map(j => ({
    id: j.MatchedObjectId,
    title: j.MatchedObjectDescriptor.PositionTitle,
    summary: j.MatchedObjectDescriptor.UserArea.Details.JobSummary,
    isRemote: j.MatchedObjectDescriptor.UserArea.Details.RemoteIndicator,
    pay: mapPay(j.MatchedObjectDescriptor.PositionRemuneration[0]),
    location: mapLocations(j.MatchedObjectDescriptor.PositionLocation),
  } as Job));
}

function mapPay(p: PositionRemuneration): Pay {
  return {
    rate: mapRate(p.Description),
    min: p.MinimumRange,
    max: p.MaximumRange,
  } as Pay;
}

function mapRate(rate: string): 'h' | 'y' | 'idk' {
  if (rate === 'Per Year') return 'y';
  if (rate === 'Per Hour') return 'h';
  return 'idk';
}

function mapLocations(locations: PositionLocation[]): Location[] {
  return locations.map(l => ({
    city: l.CityName,
    displayName: l.LocationName,
  } as Location));
}