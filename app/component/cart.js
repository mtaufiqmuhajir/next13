'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Cart() {
    const [count, setCount] = useState(0)

    return (
        <div className='flex gap-2'>
            <div className='bg-white p-1'>
                <Image src={'https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/6/669F1PA-1_T1679904750.png'}
                    sizes='100vw'
                    style={{
                        width: '100%',
                        height: '100px'
                    }}
                    width={100}
                    height={100} />
            </div>
            <div className='flex flex-col '>
                <label>Nama Produk</label>
                <label>Rp. 200.000</label>
                <label>Tidak ada diskon</label>
            </div>
            <div className='flex-1'>
                <div className='flex gap-2'>
                    <a className='cursor-pointer bg-white border-secondary border-[1px] rounded-lg px-2'
                        onClick={() => {
                            if (count > 0) {
                                setCount(count - 1)
                            }
                        }}
                    >-</a>
                    <span className='w-4 text-center'>{count}</span>
                    <a className='cursor-pointer bg-secondary text-white rounded-lg px-2 flex items-center justify-center'
                        onClick={() => {
                            setCount(count + 1)
                        }}
                    >+</a>
                </div>
            </div>
        </div>
    )
}
