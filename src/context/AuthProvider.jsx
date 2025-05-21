import React, { createContext, useEffect, useState } from 'react'
import { GetLocalStorage, SetLocalStorage } from '../Utils/LocalStorage'

export const AuthContext=createContext()

const AuthProvider = ({children}) => {

  const [userdata, setuserdata] = useState(null)

  useEffect(() => {
    SetLocalStorage()
    const {employees}=GetLocalStorage()
    setuserdata(employees)  
  },[] )
  
 

  return (
   <>
      <AuthContext.Provider value={[userdata,setuserdata]}>
             {children}
      </AuthContext.Provider>
      
   </>
  )
}

export default AuthProvider