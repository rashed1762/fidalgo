import React, { useState } from 'react'
import './order.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import useMenu from '../../../hooks/useMenu';

const Order = () => {
    const [tabIndex,setTabIndex]=useState(0);
    const [menu]=useMenu();
    const dessert=menu.filter(item=>item.category==='dessert');
    const soup=menu.filter(item=>item.category==='soup');
    const salad=menu.filter(item=>item.category==='salad');
    const pizza=menu.filter(item=>item.category==='pizza');
    const offered=menu.filter(item=>item.category==='offered');
  return (
    <div className='bg-black'>
        <div className='menucover flex justify-center items-center'>
         <h1 className=' text-6xl text-white font-jost tracking-widest '>Order Food</h1>
        </div>

        <div className='mt-24 text-white'> 
         <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
  </TabList>
  <TabPanel>
    <div className='max-w-screen-xl mx-auto max-2-screen xm-auto grid lg:grid-cols-3 md:grid-cols-2 gap-2 mt-24'>
    {
        salad.map(item=> <FoodCard
        key={item._id}
        item={item}
        ></FoodCard>)
    }
    </div>
   
  </TabPanel>
  <TabPanel>
  <div className='max-w-screen-xl mx-auto max-2-screen xm-auto grid lg:grid-cols-3 md:grid-cols-2 gap-2 mt-24'>
    {
        pizza.map(item=> <FoodCard
        key={item._id}
        item={item}
        ></FoodCard>)
    }
    </div>
  </TabPanel>
  <TabPanel>
  <div className='max-w-screen-xl mx-auto max-2-screen xm-auto grid lg:grid-cols-3 md:grid-cols-2 gap-2 mt-24'>
    {
        soup.map(item=> <FoodCard
        key={item._id}
        item={item}
        ></FoodCard>)
    }
    </div>
  </TabPanel>
  <TabPanel>
  <div className='max-w-screen-xl mx-auto max-2-screen xm-auto grid lg:grid-cols-3 md:grid-cols-2 gap-2 mt-24'>
    {
        dessert.map(item=> <FoodCard
        key={item._id}
        item={item}
        ></FoodCard>)
    }
    </div>
  </TabPanel>
  
</Tabs>
         </div>
    </div>
  )
}

export default Order