import React, { useState } from 'react'

const NewTask = ({td,changecom,changefailed,changenew}) => {

  
  const [condition1, setcondition1] = useState(true)
  const [active, setactive] = useState(false)
  
 

  const [acept, setacept] = useState(false)
  const [failed, setfailed] = useState(false)
      
     
      const fun=()=>{
        setcondition1(false)
        setactive(true)
        changenew(td.taskTitle)
     }

      const fun1=()=>{
          setactive(false)
          setacept(true)
          changecom(td.taskTitle)
      }
      const fun2=()=>{
          setactive(false)
          setfailed(true)
          changefailed(td.taskTitle)
          
      }


  return (
    <>
     <div className=' bg-sky-400 rounded-xl h-[90%] w-[320px] flex-shrink-0 p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm bg-red-500 px-3 rounded-xl py-1'>{td.category}</h3>
                <h4 className='text-sm'>{td.taskDate}</h4>
            </div>
            <h2 className='text-3xl font-semibold mt-7'>{td.taskTitle}</h2> 
        <p className='mt-2 text-sm'>{td.taskDescription}</p>

        {condition1 ? (
        <div className='flex justify-center mt-8'>
        <button onClick={fun} className='bg-green-500 text-sm py-2 px-3 rounded-md border-2 border-gray-500'>Accept Task</button>  
        </div>
         ) : (
        ""
        )}

        {active ? (
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

export default NewTask