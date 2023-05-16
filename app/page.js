import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* <Image src='/hero.jpeg' width={}/> */}
      <img src="/hero.jpg" alt="" className='w-full max-h-[500px] mx-auto' mx-3 />
      <Footer/>
    </div>
  )
}
