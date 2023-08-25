import React from 'react'

export default function Kategori1({ text, status = false }) {
    return (
        <a className={`badge 
            ${status
                ? 'bg-secondary text-white'
                : 'bg-white text-secondary border-[1px] border-secondary'}
                `}>
            {text}
        </a>
    )
}
