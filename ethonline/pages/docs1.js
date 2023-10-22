import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";


export default function docs1() {

   
    return (

<>
<Navbar/>
<main className='my-16 rounded-xl bg-slate-900 text-cyan-700 mx-72'>
<div className='flex justify-center items-center my-6 mx-4'>
<div className='rounded-2xl bg-slate-900'>
<div className=' text-3xl my-4 mx-8 cursor-pointer font-mono font-semibold'><Link href ="/doc2">
Verification</Link></div>
</div>
</div>
<div className="mx-4 my-4">
<div className='my-4 font-mono text-md font-semibold mx-4'>Put your finger on the fingerprint scanner for successful verification </div>
</div>

<div className="mx-4 my-4">
<div className='my-4 font-mono text-md font-semibold mx-4'>Wait for 5 seconds </div>
</div>
</main>
<Footer/>

</>
    )}