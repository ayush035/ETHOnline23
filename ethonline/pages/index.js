import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import d1 from '../public/d1.jpg'
import veri from '../public/veri.jpg'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar/>
<div className='grid grid-cols-2'>
        <div className=' flex flex-col=-2'>
      <div className ='my-20 mx-20 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105'>
<Image 
src={d1}
alt=''
width="400"
height="400"/>
</div>
</div>
<div className=' flex flex-col'>
<div className ='my-20 mx-20 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105'>
<Image 
src={veri}
alt=''
width="350"
height="400"/>
</div>
</div> 
</div>
      
      <Footer/>
  
  
  </main>
  )
}
