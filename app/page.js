import Image from 'next/image'
import Produk from './produk'
import Kategori from './kategori'

export default function Home () {
  const array = [...Array(10)]
  return (
    <div>
      <label className='font-bold'>Kategori</label>
      <div className=''>
        <Kategori text={'Semua'}/>
        <Kategori text={'Dog Food'}/>
        <Kategori text={'Cat Foot'}/>
        <Kategori text={'Toys'}/>
        <Kategori text={'Kandang'}/>
      </div>
      <label className='font-bold'>Produk</label>
      <div className='grid grid-cols-2 gap-2 mt-3'>
        {array.map((k, v) => {
          return <Produk key={k} />
        })}
      </div>
    </div>
  )
}
