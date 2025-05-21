import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({td,changecom,changefailed}) => {
    
   
    const [acept, setacept] = useState(false)
    const [failed, setfailed] = useState(false)
    const [condition, setcondition] = useState(true)

    const fun1=()=>{
        setcondition(false)
        setacept(true)
        changecom(td.taskTitle)
        

    }
    const fun2=()=>{
        setfailed(true)
        setcondition(false)
        changefailed(td.taskTitle)
    }

  return (
   <>
   <div className='  bg-sky-400 rounded-xl h-[90%] w-[320px] flex-shrink-0 p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm bg-red-500 px-3 rounded-xl py-1'>{td.category}</h3>
                <h4 className='text-sm'>{td. taskDate}</h4>
            </div>
            <h2 className='text-3xl font-semibold mt-7'>{td.taskTitle}</h2> 
        <p className='mt-2 text-sm'>{td.taskDescription}</p>

        {condition ? (
        <div className='flex justify-between mt-8'>
        <button onClick={fun1} className='bg-green-500 text-sm py-2 px-3 rounded-md border-2 border-gray-500'>Mark As Completed</button>
        <button onClick={fun2} className='bg-red-500 text-sm py-2 px-3 rounded-md border-2 border-gray-500'>Mark As Failed</button>
        </div>
         ) : (
        ""
        )}

        {failed ? (
        <div className='flex justify-center mt-8'>
        <button className='bg-red-500 text-sm py-2 px-8 rounded-md border-2 border-gray-500'>Failed</button>  
        </div>
         ) : (
        ""
        )}

        {acept ? (
       <div className='flex justify-center mt-8'>
       <button className='bg-green-500 text-sm py-2 px-3 rounded-md border-2 border-gray-500'>Completed</button>  
       </div>
         ) : (
        ""
       )}

    </div>
   </>
  )
}

export default AcceptTask