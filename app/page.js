import Image from 'next/image'
import Produk from './produk'
import Kategori from './kategori'
import Product1 from './component/product1'
import Kategori1 from './component/kategori'

async function getProduct() {
  let response = await fetch("http://localhost:5000/products", {
    cache: 'no-cache'
  });
  return response.json();
}

export default async function Home () {
  const array = [...Array(10)]
  let products = await getProduct(); 
  return (
    <div>
      <label className='font-bold'>Kategori</label>
      <div className='flex gap-2 mb-3'>
        <Kategori1 text={'Semua'} status={true}/>
        <Kategori1 text={'Dog Food'} />
        <Kategori1 text={'Cat Food'} />
        <Kategori1 text={'Toys'} />
        <Kategori1 text={'Kandang'} />
        {/* <Kategori text={'Semua'}/>
        <Kategori text={'Dog Food'}/>
        <Kategori text={'Cat Foot'}/>
        <Kategori text={'Toys'}/>
        <Kategori text={'Kandang'}/> */}
      </div>
      <label className='font-bold'>Produk</label>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-3'>
        {products.map((v, k) => {
          // return <Produk key={k} />
          return <Product1 key={v.id} product={v} />
        })}
      </div>
    </div>
  )
}
