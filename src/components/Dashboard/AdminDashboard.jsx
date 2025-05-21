import React, { useContext, useState } from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'
import { AuthContext } from '../../context/AuthProvider'

const AdminDashboard = (props) => {

 

  return (
    <>
    <div className='p-5'>
        <Header changeUser={props.changeUser}  data={props}/>
        <CreateTask/>
        <AllTask/>
    </div>
   
    

    
    </>
  )
}

export default AdminDashboard