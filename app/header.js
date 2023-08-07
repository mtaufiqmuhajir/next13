import React from 'react'

export default function Header () {
  return (
    <div className='h-20 bg-primary w-100 flex justify-between py-5 px-4 gap-2'>
      <div>
        <button className='w-full h-full bg-gray-100 p-2 rounded-md'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
            />
          </svg>
        </button>
      </div>
      <div className='w-full flex items-center bg-white rounded-md ps-2 gap-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='gray'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
        <input type='text' className='w-full h-full rounded-lg focus-visible:outline-none' placeholder='Search'></input>
      </div>
    </div>
  )
}
