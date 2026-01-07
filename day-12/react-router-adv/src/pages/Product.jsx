import React from 'react'
import { Link, Outlet } from 'react-router'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 py-4 '>
            <Link className='text-xl font-semibold' to='/product/men'>Mens-collection</Link>
            <Link className='text-xl font-semibold' to='/product/women'>Women's-collection</Link>
        </div>
        <Outlet />
       
        
    </div>
  )
}

export default Product