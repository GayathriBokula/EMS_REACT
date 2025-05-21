import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userdata,setuserdata]=useContext(AuthContext)

  const [Task, setTask] = useState('')
  
  const [taskTitle, settaskTitle] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignto, setassignto] = useState('')
  const [category, setcategory] = useState('')
  const [taskDescription, settaskDescription] = useState('')

  const submithandler=(e)=>{
    e.preventDefault()
    setTask({taskTitle, taskDate,category,taskDescription,active:false,newTask:true,failed:false,completed:false})

    const data=userdata
    
    const employee=data.find((e)=>assignto==e.firstName)
    employee.tasks.push(Task)
    employee.taskCounts.newTask=(employee.taskCounts.newTask)+1

    setuserdata(data)
   
    localStorage.setItem('employees',JSON.stringify(data))

    // setassignto('')
    // setcategory('')
    // setdate('')
    // setdescription('')
    // settasktittle('')
  }

  return (
    <>
      <div className='bg-[#1c1c1c] h-70 w-[95%] m-5 border-2 border-emerald-400'>
        <form onSubmit={(e)=>{submithandler(e)}} className='flex items-center justify-between gap-32 py-4 px-8'>
            <div className='w-1/2 px-10 '>
                <h2 className='text-xl'>Task tittle</h2>
                <input value={taskTitle} onChange={(e)=>settaskTitle(e.target.value)} className='rounded  w-full bg-transparent border-2 border-emerald-400 p-2' type="text" placeholder='Enter the Task tittle' />

                <h2 className='text-xl mt-2'>Date</h2>
                <input value={taskDate} onChange={(e)=>settaskDate(e.target.value)} className='rounded  w-full bg-transparent border-2 border-emerald-400 p-2' type="date" />

                <h2 className='text-xl mt-2'>Assign To</h2>
                <input value={assignto} onChange={(e)=>setassignto(e.target.value)} className='rounded   w-full bg-transparent border-2 border-emerald-400 p-2' type="text" placeholder='employee name' />

                <h2 className='text-xl mt-2'>Category</h2>
                <input value={category} onChange={(e)=>setcategory(e.target.value)} className='rounded  w-full bg-transparent border-2 border-emerald-400 p-2' type="text" placeholder='design,dev etc' />
            </div>
            <div className='w-1/2 h-50 flex flex-col justify-center'>
                <h2 className='text-xl'>Description</h2>
                <textarea value={taskDescription} onChange={(e)=>settaskDescription(e.target.value)} className='rounded  bg-transparent border-2 border-emerald-400 p-2 h-60 w-full' name="give deatiled description" id=""></textarea>
                <button className='mt-4 bg-emerald-400 h-12 rounded text-xl font-semibold p-2'>Create Task</button>
            </div>   
        </form>
      </div>
    </>
  )
}

export default CreateTask