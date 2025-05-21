import React from 'react'

const TaskListNumbers = ({data}) => {

    
  return (
    <div className='flex justify-between gap-5 screen my-6'>
        <div className='h-40 rounded-xl px-6 py-9 w-1/2 bg-pink-400'> 
            <h2 className='text-5xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h4 className='text-2xl font-medium my-3'> New Tasks</h4>
        </div>
        <div className='h-40 rounded-xl px-6 py-9 w-1/2 bg-yellow-400'>
            <h2 className='text-5xl font-semibold'>{data.taskCounts.active}</h2>
            <h4 className='text-2xl font-medium my-3'>Active Tasks</h4>
        </div>
        <div className='h-40 rounded-xl px-6 py-9 w-1/2 bg-lime-400'>
            <h2 className='text-5xl font-semibold'>{data.taskCounts.completed}</h2>
            <h4 className='text-2xl font-medium my-3'>Completed Tasks</h4>
        </div>
        <div className='h-40 rounded-xl px-6 py-9 w-1/2 bg-red-400'> 
            <h2 className='text-5xl font-semibold'>{data.taskCounts.failed}</h2>
            <h4 className='text-2xl font-medium my-3'> Failed Tasks</h4>
        </div>
    </div>
  )
}

export default TaskListNumbers