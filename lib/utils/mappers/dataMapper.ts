import { Job, Pay, Results, Location, JobDetailed } from "../../types/jobsApiTypes";
import { 
  PositionLocation,
  PositionRemuneration,
  SearchResultItem,
  UsaJobsSearchResult
} from "../../types/usajobsApiTypes";

export function mapUsaJobsSearchResults(results: UsaJobsSearchResult): Results {
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

export function mapSingleJob(job: SearchResultItem): JobDetailed {
  const mappedJob: JobDetailed = {
    id: job.MatchedObjectId,
    title: job.MatchedObjectDescriptor.PositionTitle,
    summary: job.MatchedObjectDescriptor.UserArea.Details.JobSummary,
    isRemote: job.MatchedObjectDescriptor.UserArea.Details.RemoteIndicator,
    pay: mapPay(job.MatchedObjectDescriptor.PositionRemuneration[0]),
    location: mapLocations(job.MatchedObjectDescriptor.PositionLocation),
    usajobsUri: job.MatchedObjectDescriptor.PositionURI,
    dept: job.MatchedObjectDescriptor.DepartmentName,
    org: job.MatchedObjectDescriptor.OrganizationName,
    education: job.MatchedObjectDescriptor.UserArea.Details.Education,
    startDate: job.MatchedObjectDescriptor.PositionStartDate,
    endDate: job.MatchedObjectDescriptor.PositionEndDate,
    evaluations: job.MatchedObjectDescriptor.UserArea.Details.Evaluations,
    majorDuties: job.MatchedObjectDescriptor.UserArea.Details.MajorDuties,
    qualifications: job.MatchedObjectDescriptor.QualificationSummary,
    howToApply: job.MatchedObjectDescriptor.UserArea.Details.HowToApply,
    whatToExpectNext: job.MatchedObjectDescriptor.UserArea.Details.WhatToExpectNext,
    openings: +job.MatchedObjectDescriptor.UserArea.Details.TotalOpenings,
    agency: {
      phone: job.MatchedObjectDescriptor.UserArea.Details.AgencyContactPhone,
      email: job.MatchedObjectDescriptor.UserArea.Details.AgencyContactEmail,
      blurb: job.MatchedObjectDescriptor.UserArea.Details.AgencyMarketingStatement,
    },
  };

  return mappedJob;
}