import Footer from '../components/Footer'
import React, { useState, useReducer } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import { Web3Storage } from 'web3.storage'



export default function profile()   
{
    const [messages, showMessage] = useReducer((msgs, m) => msgs.concat(m), [])
  const [token, setToken] = useState('')
    const Web_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDUxODdDYTU3ZWU1MEEwOWZmOUI2NDAzMDRiQTlDNEZBOTE3MjlDM0YiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODQ3NzU2NjQ4MjYsIm5hbWUiOiJBeXVzaCJ9.rR03Th49YPmOVoy8n8teXTTImO1P5wz4BxAFDFAb3wM'
    const client = new Web3Storage({ token: Web_STORAGE_TOKEN })

    return (
     <>
  <Navbar/>

  <div className=' flex justify-center'>
    <div className=' text-3xl font-mono font-semibold text-cyan-700 my-6'>
        Biometric data
    </div>
  </div>

  <nav className=' flex justify-between h-12 text-cyan-700 bg-black   font-bold' >
                <span className='mx-20 my-2 flex text-white text-xl cursor-pointer '>Fingerprint 1</span>
                <ul className= 'px-2 py-3 flex space-x-10 mx-12 '>

        
        <div className='hover:text-white delay-50  text-red-500 text-md font-semibold font-mono'> Delete</div>
        
        </ul>
        </nav>
        <nav className=' flex justify-between h-12 text-cyan-700 bg-black   font-bold' >
                <span className='mx-20 my-2 flex text-white text-xl cursor-pointer '>Fingerprint 2</span>
                <ul className= 'px-2 py-3 flex space-x-10 mx-12 '>

        
        <div className='hover:text-white delay-50  text-red-500 text-md font-semibold font-mono'> Delete</div>
        
        </ul>
        </nav>
        <nav className=' flex justify-between h-12 text-cyan-700 bg-cyan-700   font-bold' >
                <span className='mx-20 my-2 flex text-white text-xl cursor-pointer '>+Add Biometrics</span>
                </nav>

  <Footer/>
  </>
    )
}