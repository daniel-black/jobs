'use client';

import { useSearchParams } from 'next/navigation';
import { PARAMETERS } from '../../lib/constants';
import { getBaseUrl } from '../../lib/utils/general-utils';
import useSwr from 'swr';
import { Results } from '../../lib/types/jobsApiTypes';
import JobListing from './JobListing';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return await res.json();
}

export default function SearchResults() {
  const searchParams = useSearchParams();
  const urlSearchParams = new URLSearchParams();
  PARAMETERS.map((p) => urlSearchParams.append(p, searchParams.get(p) || ''));
  const url = `${getBaseUrl()}/api/jobs?${urlSearchParams.toString()}`

  const { data, error, isLoading } = useSwr(url, fetcher);

  if (error) {
    return (
      <div>
        <p>Uh oh an error occurred</p>
        <pre>{JSON.stringify(error)}</pre>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  const { result }: { result: Results } = data;
  const { count, countAll, jobs } = result;

  console.log(result);

  const getResultsLine = () => {
    if (count === 0) return 'No results found';
    if (count === countAll) return `Viewing all ${count} results`;
    return `Viewing ${count} of ${countAll} results`;
  }

  return (
    <div>
      <p>{getResultsLine()}</p>
      {jobs && jobs.map((job) => <JobListing job={job} key={job.id} />)}
    </div>
  );
}