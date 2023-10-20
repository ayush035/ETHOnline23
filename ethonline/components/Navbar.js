import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar() {

   
    return (
        
            <>
            <nav className=' flex justify-between h-12 text-green-400 bg-black   font-bold' >
                <span className='mx-20 my-2 flex text-green-400 text-2xl  '><Link href={"/"}>SwiftFeed</Link></span>
                <ul className= 'px-2 py-3 flex space-x-10 mx-12 '>

        <div className='hover:text-white delay-50  text-md font-semibold font-mono'>
        
            <Link href="/explore">Explore</Link></div>
        <div className='hover:text-white delay-50  text-md font-semibold font-mono'>
        
            <Link href="/search">Search</Link></div>

            <div className='hover:text-white delay-50  text-md font-semibold font-mono'>
        
            <Link href="/post">Post</Link></div>
            <div className='hover:text-white delay-50 text-md font-semibold font-mono '>
        
            <Link href="/">Profile</Link></div>
              {/* <div className=' mx-2 my-2 '> */}         
        <ConnectButton/>
            </ul>
        </nav>
        {/* <hr/> */}
        </>
        
        );
        }