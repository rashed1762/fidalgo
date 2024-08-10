import React from 'react'
import img1 from '../../../assets/about4.jpg'
import img2 from '../../../assets/about5.jpg'
import img3 from '../../../assets/about6.jpg'
import './Bookevent.css'

const Bookevent = () => {
  return (
    <div className='text-white'>
        <div  className='mt-16'>
        <h1 className='flex justify-center items-center  text-5xl font-jost tracking-widest'>BOOK YOUR EVENT</h1>
        <p className='flex justify-center items-center mt-2 font-jost'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <p className='flex justify-center items-center font-jost'>empor ut enim ad minim veniam, quis nostrud</p>
        </div>
        
        <div className='grid grid-cols-3 gap-24 flex  max-w-screen-2xl mx-auto mt-16'>

            <div>
                <img src={img1} alt="" />
                
                <div className=''>
                    <h1 className='flex justify-center items-center mt-8 text-2xl font-jost tracking-widest text-slate'>CELEBRATIONS</h1>
                    <p className='flex justify-center items-center mt-2 font-jost text-slate-300'>Friday, 21 Nov</p>
                    <p className='flex justify-center items-center font-jost text-slate-300'>Reservations 12Pm To 1.30Pm</p>
                </div>
                
            </div>
            <div>
                <img style={{borderRadius: '200px 200px 0px 0px'}} className='' src={img2} alt="" />
                <div className=''>
                    <h1 className='flex justify-center items-center mt-8 text-2xl font-jost tracking-widest text-slate'>Weddings</h1>
                    <p className='flex justify-center items-center mt-2 font-jost text-slate-300'>Monday, 17 Nov</p>
                    <p className='flex justify-center items-center font-jost text-slate-300'>Reservations 1Pm To 3.30Pm</p>
                </div>
            </div>
            <div>
                <img src={img3} alt="" />
                <div className=''>
                    <h1 className='flex justify-center items-center mt-8 text-2xl font-jost tracking-widest text-slate'>CORPORATE</h1>
                    <p className='flex justify-center items-center mt-2 font-jost text-slate-300'>WEDNESDAY,26 NOV</p>
                    <p className='flex justify-center items-center font-jost text-slate-300'>Reservation 3Pm to 5.30 Pm</p>
                </div>
            </div>

        </div>



        <div className='aboutbanner2'>

        </div>

        <div className='grid grid-cols-3 gap-8 flex  max-w-screen-2xl mx-auto mt-16 '>

            <div >
            <div className='border-r-2 border-slate-300 '>
                    <h1 className='flex justify-center items-center mt-8 text-xl font-jost tracking-widest text-slate'>CONTACT US</h1>
                    <p className='flex justify-center items-center mt-4 font-jost text-slate-300'>T. +12 344 0567899</p>
                    <p className='flex justify-center items-center font-jost text-slate-300'>M. fidalgo@example.com</p>
                </div>
            </div>



            <div>
            <div className=' border-r-2 border-slate-300'>
                    <h1 className='flex justify-center items-center mt-8 text-xl font-jost tracking-widest text-slate'>CORPORATE</h1>
                    <p className='flex justify-center items-center mt-4 font-jost text-slate-300'>WEDNESDAY,26 NOV</p>
                    <p className='flex justify-center items-center font-jost text-slate-300'>Reservation 3Pm to 5.30 Pm</p>
                </div>
            </div>




            <div>
            <div className=''>
                    <h1 className='flex justify-center items-center mt-8 text-xl font-jost tracking-widest text-slate'>CORPORATE</h1>
                    <p className='flex justify-center items-center mt-4 font-jost text-slate-300'>WEDNESDAY,26 NOV</p>
                    <p className='flex justify-center items-center font-jost text-slate-300'>Reservation 3Pm to 5.30 Pm</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Bookevent