import React from 'react'
import img1 from '../../../assets/lunch.jpg'
import img2 from '../../../assets/dinner.jpg'
import img3 from '../../../assets/dessert.jpg'
import img4 from '../../../assets/wines.jpg'
import './items.css'


const Items = () => {
  return (
    <div>
        <div className='grid grid-cols-4 gap-8 sm:gap-0 mt-24 flex space-x-4 max-w-screen-xl mx-auto mb-16'>
        <div>
            <img className='itemstyle' src={img1} alt="" />
            <h1 className='flex justify-center items-center  font-jost tracking-widest  '>LUNCH MENU</h1>
        </div>

        <div>
        <img className='itemstyle' src={img2} alt="" />
        <h1 className='flex justify-center items-center  font-jost tracking-widest '>DINER MENU</h1>
            </div>

            <div>
            <img className='itemstyle' src={img3} alt="" />
            <h1 className='flex justify-center items-center  font-jost tracking-widest sm:w- '>DESSERTS MENU</h1>
            </div>

            <div>
            <img className='itemstyle' src={img4} alt="" />
            <h1 className='flex justify-center items-center  font-jost tracking-widest '>WINE & DRINKS</h1>
            </div>
        </div>
    </div>
  )
}

export default Items