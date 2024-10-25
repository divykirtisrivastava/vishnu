import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
       <div>
       <div className='w-full h-auto flex flex-col justify-center items-center welcome-main-container'> 
            <div className='w-full h-auto flex flex-col justify-center items-center background-color welcome-boxcontainer'>
                <div className='w-full mt-20 flex flex-col justify-center items-center' id='bannerimage'>
                    <h1 className='text-[65px] uppercase font-bold z-50 text-white'>Login</h1>
                </div>
                <div className='w-full h-auto  p-[5%]'>
                <form action="post" className='flex flex-col items-center p-9'>
                        <div className='w-full md:flex  gap-6 items-center justify-center mb-10'>
                            <input type="text" placeholder='Enter User ID' className=' w-full md:w-[50%] h-[50px] px-3 text-xl font-medium border rounded mb-3 md:mb-0 ' name='sponsorId '/>
                        </div>
                        <div className='w-full md:flex  gap-6 items-center justify-center mb-10'>
                            <input type="text" placeholder='Enter Password' className=' w-full md:w-[50%] h-[50px] px-3 text-xl font-medium border rounded mb-3 md:mb-0 ' name='sponsorId '/>
                        </div>
                        <button value='submit' name='submit' className='bg-blue-800 text-white px-10 py-3 text-xl uppercase font-bold rounded hover:bg-slate-900'>Submit</button>
                        </form>
                        <hr/>

                        <div className='flex justify-around'>
                            <h1 className='text-3xl text-white'>Not a member ? <Link to='/register' className='text-blue-600'>Register Now</Link></h1>
                            <h1 className='text-3xl text-white'>Forgate Password ?</h1>
                        </div>
                </div>
            </div>
       </div>
    </div>
    </div>
  )
}
