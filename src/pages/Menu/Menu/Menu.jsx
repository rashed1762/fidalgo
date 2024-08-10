import React from 'react'
import img from '../../../assets/banner1.jpg'
import { Helmet } from 'react-helmet-async'
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';
import img1 from '../../../assets/coverimg1.jpg'
import img2 from '../../../assets/menu3-parallax.jpg'
import './menu.css'

const Menu = () => {
    const [menu]=useMenu();
    const dessert=menu.filter(item=>item.category==='dessert');
    const soup=menu.filter(item=>item.category==='soup');
    const salad=menu.filter(item=>item.category==='salad');
    const pizza=menu.filter(item=>item.category==='pizza');
    const offered=menu.filter(item=>item.category==='offered');
  return (
    <div className='bg-black'>
        <Helmet>
            <title>Fidalgo |Our Menu</title>
        </Helmet>
        <div className='menucover flex justify-center items-center'>
         <h1 className=' text-6xl text-white font-jost tracking-widest '>Our Menu</h1>
        </div>
       
        <div className='text-white'>
          <h1 className='flex justify-center items-center text-3xl tracking-widest'> <span className=' border-b-2 mt-8 mb-16'> TOP OFFER </span></h1>
          <MenuCategory  items={offered}></MenuCategory>

          <h1 className='flex justify-center items-center text-3xl tracking-widest'> <span className=' border-b-2 mt-24 mb-24'> PIZZA </span></h1>
          <MenuCategory  items={pizza}></MenuCategory>

          <h1 className='flex justify-center items-center text-3xl tracking-widest'> <span className=' border-b-2 mt-24 mb-24'> SALAD </span></h1>
          <MenuCategory  items={pizza}></MenuCategory>

          <h1 className='flex justify-center items-center text-3xl tracking-widest'> <span className=' border-b-2 mt-24 mb-24'> SOUP </span></h1>
          <MenuCategory  items={pizza}></MenuCategory>

          <h1 className='flex justify-center items-center text-3xl tracking-widest'> <span className=' border-b-2 mt-24 mb-24'> DESSERT </span></h1>
          <MenuCategory  items={pizza}></MenuCategory>
        </div>
    
    </div>
  )
}

export default Menu