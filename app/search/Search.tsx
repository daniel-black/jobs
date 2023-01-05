'use client';

import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';

function createSearchParams(title: string, location: string, keyword: string): string {
  const urlSearchParams = new URLSearchParams();

  if (title !== '') urlSearchParams.append('PositionTitle', title);
  if (location !== '') urlSearchParams.append('LocationName', location);
  if (keyword !== '') urlSearchParams.append('Keyword', keyword);

  return urlSearchParams.toString();
}

const Search = (): JSX.Element => {
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');
  const router = useRouter();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryString = createSearchParams(title, location, keyword);
    router.push(`/search?${queryString}`);
    setShow(false);
  }

  return (
    <div className={`w-full bg-blue-400 p-4`}>
      {/* Main search form */}
      {show && (
        <div>
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
        </div>
      )}

      {/* Button for hiding and showing seach form */}
      <button 
        onClick={() => setShow(!show)}
        className='px-2 mt-2 bg-blue-600 rounded'
      >
        {show ? 'hide' : 'show'}
      </button>
    </div>
  );
}

export default Search;