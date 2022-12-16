import SearchForm from "./SearchForm";

export default function Home() {
  return (
    <div className='relative'>
      <img 
        className='absolute -z-10 top-28 md:top-20 lg:top-4' 
        src='/blobs/blob1.svg' 
        alt="a fun lil svg blob" 
      />
      <div className='p-4 md:px-20 text-center flex flex-col space-y-20 min-h-screen items-center justify-center md:flex-row md:space-y-0 md:space-x-32'>
        <h1 className='text-stone-600 font-bold text-4xl sm:text-5xl md:text-6xl'>
          Search for a <span className='italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-stone-700 to bg-stone-900'>Job</span><span className='font-extrabold text-emerald-500'>.</span>
        </h1>
        <SearchForm />
      </div>
    </div>
  );
}
