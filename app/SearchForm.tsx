'use client';

import { FormEvent, useState } from "react";
import { getBaseUrl, isDev } from "../lib/utils/general-utils";

export default function SearchForm(): JSX.Element {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('PositionTitle', title);
    urlSearchParams.append('LocationName', location);
    urlSearchParams.append('Keyword', keyword);

    const url = `${getBaseUrl()}/api/jobs?${urlSearchParams.toString()}`;
    alert(url);
  }

  return (
    <section className='bg-stone-100 rounded px-8 py-10 shadow max-w-xl'>
      <form onSubmit={handleSubmit}>
        <div className='space-y-5 text-lg'>
          {/* Title and Location */}
          <div className='space-y-5 sm:space-y-0 flex flex-col sm:flex-row sm:space-x-5'>
            <div className="w-full">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text" 
                placeholder='Job Title' 
                className='job-search-input shadow-inner w-full'
              />
            </div>
            <div className="w-full">
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text" 
                placeholder='Location' 
                className='job-search-input shadow-inner w-full'
              />
            </div>
          </div>
          {/* Keywords */}
          <div>
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              type="text" 
              placeholder='Any relevant keywords' 
              className='job-search-input w-full shadow-inner'
            />
          </div>
          {/* Submit button */}
          <div>
            <input 
              className='job-search-input shadow bg-stone-700 text-stone-50 w-full'
              type="submit" 
              value='Search' 
            />
          </div>
        </div>
      </form>
    </section>
  );
}