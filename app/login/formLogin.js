'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function FormLogin() {
    const router = useRouter();
    const [TypePassword, setTypePassword] = useState(true)
    const [IconsPassword, setIconsPassword] = useState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    )
    function handlePassword() {
        if (TypePassword) {
            setIconsPassword(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
            )
        } else {
            setIconsPassword(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>)
        }
        setTypePassword(!TypePassword)
    }


    return (
        <div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Email or mobile no</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <div className='join'>
                    <input type={TypePassword ? "password" : "text"} placeholder="password" className="input input-bordered w-full join-item" />
                    <button className='btn join-item' onClick={handlePassword}>
                        {IconsPassword}
                    </button>
                </div>
                <span className='text-right font-semibold'>Forgot Password ?</span>
            </div>
            <div className='mt-3'>
                <button className='btn bg-[#FF9738] hover:bg-orange-500 w-full text-white' onClick={() => {
                    router.push('/')
                }}>Sign In</button>
            </div>
            <div className='flex justify-between mt-4'>
                <button className='btn w-24 bg-blue-800 hover:bg-blue-500 text-white'>f</button>
                <button className='btn w-24 bg-red-600 hover:bg-red-400 text-white'>G</button>
                <button className='btn w-24 bg-blue-600 hover:bg-blue-400 text-white'>in</button>
            </div>
            <div className='flex justify-center'>
                <label className='text-center'>Don't have account ? <a className='text-orange-500'>Register</a></label>

            </div>
        </div>
    )
}
