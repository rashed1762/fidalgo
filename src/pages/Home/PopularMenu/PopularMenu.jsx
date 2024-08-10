import React, { useEffect, useState } from 'react'
import MenuItem from '../../Shared/Menuitem/MenuItem';

const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=> {
            const popularItems=data.filter(item=>item.category === 'popular');
            setMenu(popularItems)
        })
    },[])
  return (
    <div>
        <h1 className='flex justify-center items-cente text-4xl font-jost mt-16'> <span className='border-b-2'> Our  Popular Menus </span></h1>
    
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4  max-w-screen-xl mx-auto ">
        {
            menu.map(item=> <MenuItem
            key={item._id}
            item={item}
            >
            </MenuItem>

            )
        }
    </div>
    </div>
  )
}

export default PopularMenu


// http://localhost:5000/menu