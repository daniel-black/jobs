'use client';

import { useSearchParams } from 'next/navigation';

const Results = () => {
  const sp = useSearchParams();

  const title = sp.has('PositionTitle') ? sp.get('PositionTitle') : null;
  const location = sp.has('LocationName') ? sp.get('LocationName') : null;
  const keyword = sp.has('Keyword') ? sp.get('Keyword') : null;

  return (
    <div>
      I am results
      <p>title: {title}</p>
      <p>location: {location}</p>
      <p>keyword: {keyword}</p>
    </div>
  )
}

export default Results;