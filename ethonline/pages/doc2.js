import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Web3Storage } from 'web3.storage'
import Image from 'next/image'
import fr from '../public/ff.jpg'
import ff from '../public/fr.jpg'

export default function docs1() {

   
    return (

<>
<Navbar/>
<div className=' flex justify-center'>
    <div className=' text-3xl font-mono font-semibold text-cyan-700 my-6'>
        Your Secured Docs
    </div>
  </div>
  <div className='flex'>
  <div className='grid grid-cols-4 gap-2 '>
  <div className=' bg-gray-900 text-white mx-10 my-2 rounded-xl  '>
                <div className="mx-1 my-1 cursor-pointer ">
                    <a href='https://bafybeietu4bacniu3vfiparmvxqmd4oclzdiieqva2gaz2exyif46ne4tu.ipfs.dweb.link/Logo.png'>
                    <Image src= {ff} 
                    alt='' height="260px" width='400px'>
                    </Image></a>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-cyan-700 font-mono my-2'>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-900 text-white mx-10 my-2 rounded-xl  '>
                <div className="mx-1 my-1 cursor-pointer">
                <a href='https://bafybeiab2w2lb6dugorkaxoi3fsl7666bh2m2erxpk7ahvgi5voxvxcvtu.ipfs.dweb.link/photo_2023-04-28_20-29-12.jpg'>
                    <Image src={fr} 
                    alt='' height="260px" width='400px'>
                    </Image></a>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-cyan-700 font-mono my-2'>
                        {/* <a href='https://bafybeiab2w2lb6dugorkaxoi3fsl7666bh2m2erxpk7ahvgi5voxvxcvtu.ipfs.dweb.link'>
                        View on IPFS
                        </a> */}
                    </div>
                    </div>
                    </div>
</div>
</div>


<Footer/>
</>
    )}