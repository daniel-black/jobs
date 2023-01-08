import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';
import { clientCreateSearchParams } from "../../lib/utils/general-utils";

type SearchFormProps = {
  toggleWrapper: () => void;
};

const SearchForm = ({ toggleWrapper }: SearchFormProps): JSX.Element => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryString = clientCreateSearchParams(title, location, keyword);
    router.push(`/search?${queryString}`);
    toggleWrapper();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='space-y-5 text-lg'>
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text" 
            placeholder='Job Title' 
            className='job-search-input shadow-inner w-full text-stone-700'
          />
        </div>
        <div>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text" 
            placeholder='Location' 
            className='job-search-input shadow-inner w-full text-stone-700'
          />
        </div>
        <div>
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            type="text" 
            placeholder='Any relevant keywords' 
            className='job-search-input w-full shadow-inner text-stone-700'
          />
        </div>
        <div>
          <input 
            className='job-search-input shadow bg-stone-700 text-stone-50 w-full'
            type="submit" 
            value='Search' 
          />
        </div>
      </div>
    </form>
  );
}

export default SearchForm;