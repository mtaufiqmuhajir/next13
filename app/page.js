import Image from 'next/image'
import Produk from './produk'

export default function Home() {
  const array = [...Array(10)];
  return (
  <div className='grid grid-cols-2 gap-2'>
      {array.map((k,v) =>{
        return <Produk key={k}/>
      })}
  </div>
  )
}
