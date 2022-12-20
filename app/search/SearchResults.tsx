'use client';

import { useSearchParams } from 'next/navigation';
import { PARAMETERS } from '../../lib/constants';
import { getBaseUrl } from '../../lib/utils/general-utils';
import useSwr from 'swr';

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

  return (
    <div>
      <p>SearchResults component</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}