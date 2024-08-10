import React from 'react'
import img1 from '../../../assets/h4-img5.jpg'
import img2 from '../../../assets/h12-icon-img-removebg-preview.png'
import logo from '../../../assets/h4-icon-img.png'
import video1 from '../../../assets/video-2160p.mp4'
 import './bannerinfo.css'

const Bannerinfo = () => {
  return (
    <div >
        <div className='grid sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 '>

            <img src={img1} alt="" />
            <div className=' flex justify-center items-center ml-64 mr-64 md:ml-2 md:mr-2 ' >
            <div className=''>
                <div className=' mt-8 md:mt-0 md:flex md:justify-center sm:flex sm:justify-center'>
                <img  src={logo} alt="" />
                </div>
               
            <h1 className=' flex justify-center items-center lg:text-4xl text-white  font-jost mt-8 md:text-xl md:mt-2 md:flex md:justify-center sm:w-96 sm:text-xl sm:mb-4'>TAKUYA HIROKI HEAD SUSHI CHEF NYC</h1>
            <h1 className=' flex justify-center items-center  text-white font-jost  md:flex md:justify-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h1>
            <button className="btn btn-outline btn-secondary font-jost font-bold mt-8 md:flex md:justify-center ">Secondary</button>
            </div>

         
          </div>

        </div>


        <div className='grid sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2'>

           
            <div className=' flex justify-center items-center ml-64 mr-64 md:ml-2 md:mr-2 ' >
            <div>
                <div className='flex justify-center items-center mt-8 md:w-32'>
                <video className='video1 ' src={video1} autoPlay loop muted></video>
                </div>
               
               
            <h1 className=' flex justify-center items-center text-2xl text-white  font-jost mt-8 md:text-xl  '>VISIT US</h1>
            <h1 className=' flex justify-center items-center text-1xl text-white  font-jost mt-8 md:mt-1 '>28 Rue Vaneau, Paris, 01 23 45 67 89 </h1>
            <h1 className=' flex justify-center items-center text-1xl text-white  font-jost mt-2 md:mt-1 '>fidalgo@example.com </h1>
            <h1 className=' flex justify-center items-center text-2xl text-white  font-jost mt-8 md:mt-2 md:text-xl'>HOURS OF OPERATION</h1>
            <h1 className=' flex justify-center items-center  text-white font-jost mt-4 md:mt-0  '>Monday -friday: 6:00pm – 10:00pm</h1>
            <h1 className=' flex justify-center items-center  text-white font-jost mt-2 '>Lunch saturday & sunday only: 12:00pm – 2:00pm</h1>
            <div className='flex justify-center items-center'>
            <button className="btn btn-outline btn-secondary font-jost font-bold mt-8  md:mt-2 sm:mb-8" >Secondary</button>
            </div>
            </div>
            

         
          </div>
          <img src={img1} alt="" />

        </div>

        <section className=' mt-24'>
            
            <h1 className='flex justify-center items-center font-jost'>Our special item</h1>
            <h1 className='text-6xl font-jost flex justify-center items-center mt-4 tracking-widest'>STEAK</h1>
            <h1 className='text-8xl font-jost flex justify-center items-center mt-4 tracking-widest'>HOUSE</h1>
        </section>
        <section className='steakhouse flex justify-center items-center '>
            <img className='lg:w-96 md:w-64 sm:w-64' src={img2} alt="" />
        </section>

        
    </div>
  )
}

export default Bannerinfo