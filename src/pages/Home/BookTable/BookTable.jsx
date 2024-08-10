import React from 'react'
import img1 from '../../../assets/h4-img3.jpg'
import img2 from '../../../assets/h4-img4.jpg'
import img3 from '../../../assets/h4-icon-img.png'
import './bootable.css'

const BookTable = () => {
  return (
    <div className='grid grid-cols-3  gap-8 mt-24'>
            <div>
                <img src={img1} alt="" />
            </div>

            <div className='bootablemiddle flex justify-center items-cente md:h-94'>
                <div className='lg:mt-36 md:mt-4'>
               <section className='flex justify-center items-cente'>
                <img className='sm:h-8 lg:h-32 md:h-12' src={img3} alt="" />
               </section>
                <h1 className='flex justify-center items-center font-jost text-4xl mt-4 sm:text-xl '>Book A table</h1>
                <p className='font-jost flex justify-center items-center sm:w-60'>*reservations recommended</p>
                <section className='flex justify-center items-cente ' >
                <select className=" bg-black lg:w-96 lg:mt-8 border-b-2 border-gray-600 md:w-32 md:mt-1 md:text-1xl ">
  <option disabled selected>1 PERSON</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>

                </section>

                <section className='flex justify-center items-cente' >
                <select className=" bg-black lg:w-96 lg:mt-8 md:mt-2 border-b-2 border-gray-600 md:w-32 md:text-1xl">
  <option disabled selected>25/09/2023</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>

                </section>


                <section className='flex justify-center items-cente' >
                <select className=" bg-black lg:w-96 lg:mt-8 border-b-2 border-gray-600 md:w-32 md:mt-1 md:text-1xl  ">
  <option disabled selected>11:00AM</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>



                </section>
                <section className='flex justify-center items-cente lg:mt-8 md:mt-2'>
<button className="btn btn-outline btn-secondary font-jost">BOOK NOW</button>
</section>

<section className='flex justify-center items-cente mt-8 md:mt-4'>
<p className='font-jost flex justify-center items-center md:text-1xl '>*Powered by OpenTable</p>
</section>
                </div>
                
                
            </div>


            <div>
                <img src={img2} alt="" />
            </div>
    </div>
  )
}

export default BookTable