import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='bg-stone-50'>

        <div className='relative'>
          <img 
            className='absolute -z-10 top-28 md:top-20 lg:top-4' 
            src='/blobs/blob1.svg' 
            alt="a fun lil svg blob" 
          />
          {children}
        </div>
      </body>
    </html>
  );
}
