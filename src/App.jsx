import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { GetLocalStorage, SetLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'



const App = () => {

  const [user, setuser] = useState(null) 
  const [LoggedInUserData, setLoggedInUserData] = useState(null)

  const [userdata,setuserdata]=useContext(AuthContext)

  useEffect(() => {
   const datauser=localStorage.getItem('logedinuser')
   
   if(datauser){
      const  LoggedinUser=JSON.parse(datauser)
      setuser(LoggedinUser.role)
      setLoggedInUserData(LoggedinUser.data)
   }  
 }, [])
 
  const handlelogin=(email,password)=>{
    
        if(email=="admin@gmail.com" && password==123){
              setuser('admin')
              localStorage.setItem('logedinuser',JSON.stringify({role:'admin'}))
        }
        else if(userdata){
            const employee=userdata.find((e)=>email==e.email &&  password==e.password)
            setuser('employee')
            setLoggedInUserData(employee) 
            localStorage.setItem('logedinuser',JSON.stringify({role:'employee',data:employee}))
        }
        else{
          alert("Invalid Credentials")
        }
  }

  return (
    <>
      {!user ? (<Login handlelogin={handlelogin} />) : user =="admin" ? (<AdminDashboard  changeUser={setuser} firstName={user} />) : (<EmployeeDashboard  changeUser={setuser} data={LoggedInUserData}/>)}
    </>
  )
}
export default App