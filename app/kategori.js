'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function Kategori({text}) {
    const [stateStatus, setstateStatus] = useState(false)
    const router = useRouter();
    const searchparam = useSearchParams();
    const param = searchparam.get('q')
    useEffect(() => {
        if (param == text) {
            setstateStatus(true)
        }
    }, [param, text])
  return (
    <a className={`badge ${stateStatus ? 'badge-secondary text-white' : 'badge-accent text-secondary border-secondary border-[1px]'} me-2`} onClick={() => {
        router.replace('?q='+text)
    }}>{text}</a>
  )
}
