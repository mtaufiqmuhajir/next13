'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Produk () {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col  mb-3'>
      <div className='bg-white p-3'>
        <Image
          alt='sepatu'
          src='https://cianjur.jabarekspres.com/wp-content/uploads/2023/05/H05fb626c54d8404c8027fa6390cdaf2dE.jpg'
          sizes='100vw'
          style={{
            width: '100%',
            height: 'auto'
          }}
          width={500}
          height={300}
        />
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-sm'>Sepatu</label>
          <label className='font-semibold text-sm text-primary'>
            Rp. 200.000
          </label>
          <div className='flex items-center gap-2'>
            <button className='bg-white border-secondary border-[1px] rounded-lg px-2' onClick={() => {
                if (count > 0) {
                    setCount(count - 1)
                }
            }}>
              -
            </button>
            <label>{count}</label>
            <button className='bg-secondary text-white rounded-lg px-2 flex items-center justify-center' onClick={() => {
                setCount(count + 1)
            }}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
