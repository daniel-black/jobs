'use client';

import { useState } from "react";
import SearchForm from "./SearchForm";

const Search = (): JSX.Element => {
  const [show, setShow] = useState(true);  
  
  return (
    <div className={`w-full p-5 rounded-b-3xl bg-stone-100 shadow`}>
      <div className={`${show ? 'block' : 'hidden'}`}>
        <SearchForm toggleWrapper={() => setShow(!show)} />
      </div>
      <div className="flex justify-center">
        <button 
          onClick={() => setShow(!show)}
          className={`${show ? 'mt-5' : ''} py-1 bg-stone-200 shadow text-2xl text-stone-600 rounded-full z-20 w-[50%]`}
        >
          {show ? '↑' : '↓'}
        </button>
      </div>
    </div>
  );
}

export default Search;