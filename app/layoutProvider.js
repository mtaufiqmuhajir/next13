'use client'

import { usePathname } from "next/navigation"
import Footer from "./footer"

export default function LayoutProvider({ children }) {
    const pathname = usePathname()
    return (
        <>
            {pathname == '/login' ?
                <div>
                    {children}
                </div> : (
                    <div className="flex flex-col h-screen">
                        <div className="flex-1">
                            <div className='h-20 w-full bg-primary flex gap-2 p-5'>
                                <div className='rounded-lg bg-gray-100 p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </div>
                                <div className='w-full rounded-lg bg-white flex gap-1 items-center px-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                    <input type='text' className='w-full h-full rounded-lg'></input>
                                </div>
                            </div>
                            {children}
                        </div>
                        <Footer />
                    </div>
                )}
        </>
    )
}
