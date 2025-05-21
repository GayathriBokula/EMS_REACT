import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userdata,setuserdata]=useContext(AuthContext)
    
  return (
    <>
        <div className="bg-[#1c1c1c] p-5 rounded mt-5">
            <div className='flex justify-between bg-red-400 p-2 rounded mb-2 py-2 px-4 text-xl font-medium"'>
                <h2 className="w-1/5 ">Employee Name </h2>
                <h3 className="w-1/5 ">New Task</h3>
                <h5 className="w-1/5 ">Active Task</h5>
                <h5 className="w-1/5 ">Completed</h5>  
                <h5 className="w-1/5 ">Failed</h5>      
             </div>
            <div className='h-[80%] '>
                {userdata.map((e,k)=>{
                return <div key={k} className='flex justify-between bg-transparent border-2 border-emerald-400 p-2 rounded mb-2 py-2 px-4'>
                    <h2 className="w-1/5 ">{e.firstName}</h2>
                    <h2 className="w-1/5 text-sky-400  text-xl font-medium">{e.taskCounts.newTask} </h2>
                    <h3 className="w-1/5 text-yellow-400  text-xl font-medium">{e.taskCounts.active}  </h3>
                    <h5 className="w-1/5 text-green-500  text-xl font-medium">{e.taskCounts.completed} </h5>
                    <h5 className="w-1/5 text-red-600  text-xl font-medium">{e.taskCounts.failed} </h5>
                </div>
                })}
            </div>
            
        </div>
    </>
  )
}

export default AllTask