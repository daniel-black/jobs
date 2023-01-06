'use client';

import { useRouter } from "next/navigation";

const BackButton = (): JSX.Element => {
  const router = useRouter();
  
  return (
    <button 
      onClick={() => router.back()}
      className='hover:underline underline-offset-2'
    >
      ← Back to results
    </button>
  )
}

export default BackButton;