import React from 'react'
import useMenu from '../../../hooks/useMenu'
import { Helmet } from 'react-helmet-async';
import MenuItem from '../../Shared/Menuitem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({items}) => {
 

  return (
    <div>
         <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4  max-w-screen-xl mx-auto ">
        {
            items.map(item=> <MenuItem
            key={item._id}
            item={item}
            >
            </MenuItem>
          
            )
        }
       
    </div>
    <div className='flex justify-center items-center mt-16'>
          <Link to="/order">
          <button className="btn btn-wide text-xl font-jost">Order Food</button>
          </Link>
        </div>
    </div>
  )
}

export default MenuCategory