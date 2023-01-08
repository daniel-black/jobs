'use client';

import { useSearchParams } from 'next/navigation';
import { getBaseUrl } from '../../lib/utils/general-utils';
import { Results as ApiResults } from '../../lib/types/jobsApiTypes';
import useSwr from 'swr';
import JobListing from './JobListing';
import ResultsLine from './ResultsLine';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return await res.json();
}

const Results = (): JSX.Element => {
  const sp = useSearchParams();
  const url = `${getBaseUrl()}/api/jobs?${sp.toString()}`
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
      <div className='mt-20 flex justify-center'>
        <div className='w-20 h-20 bg-stone-300 animate-ping rounded-full'></div>
      </div>
    );
  }

  const { result }: { result: ApiResults } = data;
  const { count, countAll, jobs } = result;

  console.log(result);

  return (
    <div className='py-6 space-y-6'>
      <ResultsLine 
        count={count}
        countAll={countAll}
        title={sp.get('PositionTitle')}
        location={sp.get('LocationName')}
      />
      <div className='px-3 space-y-4 w-full'>
        {jobs && jobs.map((job) => (
          <JobListing job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
}

export default Results;

