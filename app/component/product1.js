'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Product1() {
    const [count, setCount] = useState(0)
    return (
        <div className=''>
            <div className='bg-white'>
                <Image src={'https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/6/669F1PA-1_T1679904750.png'}
                    sizes='100vw'
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                    width={500}
                    height={300} />
            </div>
            <div className='flex flex-col'>
                <span>Macbook Pro</span>
                <span>Rp. 200.000</span>
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
