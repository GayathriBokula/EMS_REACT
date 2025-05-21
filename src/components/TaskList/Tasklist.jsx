import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FaildTask from './FaildTask'
import { AuthContext } from '../../context/AuthProvider'

const Tasklist = ({data}) => {

      const [userdata,setuserdata]=useContext(AuthContext)
     
      const changecom=(taskTitle)=>{
            
            const dp=userdata
    
            const employee=dp.find((e)=>data.firstName==e.firstName)
            employee.taskCounts.completed=(employee.taskCounts.completed)+1

            const t=employee.tasks.find((e)=>taskTitle==e.taskTitle)
            t.active=false
            t.newTask=false
            t.completed=true
            t.failed=false

           
            setuserdata(dp)
           
            localStorage.setItem('employees',JSON.stringify(dp))
      }
      const changefailed=(taskTitle)=>{
            
            const dp=userdata
    
            const employee=dp.find((e)=>data.firstName==e.firstName)
            employee.taskCounts.failed=(employee.taskCounts.failed)+1

            const t=employee.tasks.find((e)=>taskTitle==e.taskTitle)
            t.active=false
            t.newTask=false
            t.completed=false
            t.failed=true

            
            setuserdata(dp)
           
            localStorage.setItem('employees',JSON.stringify(dp))
      }

      const changenew=(taskTitle)=>{
            const dp=userdata
    
            const employee=dp.find((e)=>data.firstName==e.firstName)
            employee.taskCounts.failed=(employee.taskCounts.failed)+1

            const t=employee.tasks.find((e)=>taskTitle==e.taskTitle)
            t.active=true
            t.newTask=false
            t.completed=false
            t.failed=false

            
            setuserdata(dp)
           
            localStorage.setItem('employees',JSON.stringify(dp))
      }


  return (
    <div id="tasklist" className= 'overflow-x-auto w-full h-[55%] flex items-center justify-start gap-5 flex-nowrap mx-2 my-1'>

       {data.tasks.map((e,i)=>{
          if(e.active){
                return <AcceptTask td={e} changecom={changecom} changefailed={changefailed} key={i}/>  
          }
          if(e.newTask){
                return <NewTask td={e} changecom={changecom} changefailed={changefailed} changenew={changenew} key={i}/>  
          }
          if(e.completed){
                return <CompleteTask td={e} key={i}/>  
          }
          if(e.failed){
                 return <FaildTask td={e} key={i}/>  
          }
          
       })}

    </div>
  )
}

export default Tasklist