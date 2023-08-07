'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Header from './header';
import Footer from './footer';

export default function LayoutProvider({children}) {
    const pathname = usePathname();
  return (
    <>
    {pathname == '/login' ? (
      <div>
          {children}
      </div>
    ) : (
      <div className='w-full h-screen flex flex-col justify-between'>
        <div className='flex-1 '>
          <Header />
          <div className='px-3 pt-3 overflow-auto h-[calc(100vh-64px-80px)] bg-gray-100'>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    )}
  </>
  )
}
