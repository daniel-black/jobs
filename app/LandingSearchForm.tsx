'use client';

import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';
import { clientCreateSearchParams } from "../lib/utils/general-utils";

export default function LandingSearchForm(): JSX.Element {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryString = clientCreateSearchParams(title, location, keyword);
    router.push(`/search?${queryString}`);
  }

  return (
    <section className='bg-stone-100 opacity-90 rounded-lg px-8 py-10 shadow-lg max-w-xl border border-stone-200'>
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
                className='job-search-input shadow-inner w-full text-stone-700'
              />
            </div>
            <div className="w-full">
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text" 
                placeholder='Location' 
                className='job-search-input shadow-inner w-full text-stone-700'
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
              className='job-search-input w-full shadow-inner text-stone-700'
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