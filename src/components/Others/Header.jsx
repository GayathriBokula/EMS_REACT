import React, { useState } from 'react'

const Header = (props) => {
  
  const logoutUser=()=>{
    localStorage.setItem('logedinuser','')
    props.changeUser('')
  }
  
  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-2xl font-medium mx-8'>Hello <br /> <span className='text-3xl font-semibold'>{props.data.firstName}👋</span></h1> 
        <button onClick={logoutUser} className='bg-red-600 font-medium rounded px-5 py-2 text-white text-lg mx-8'>Log Out</button>
    </div> 
  )
}

export default Header