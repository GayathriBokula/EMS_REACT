import React, { useState } from 'react'

const Login = ({handlelogin}) => {
  
  

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')


  function submithandler(e){
    e.preventDefault()
    handlelogin(email,password)
    setemail("")
    setpassword("") 
  }

  return (
    <>
    <h1 className='text-6xl text-center my-10 font-bold'>Log In</h1>
    <div className='flex flex-row items-center justify-center h-100 w-screen '>
      <div className='border-2 border-emerald-600 rounded  p-20 m-10' >
            <form onSubmit={(e)=>{
                  submithandler(e)
                }}  className='flex flex-col items-center justify-center '>
                    <input value={email} onChange={(e)=>{
                      setemail(e.target.value)
                    }} required
                    className='border-2 border-emerald-600 rounded-full  bg-transparent placeholder:text-gray-400  outline-none text-white p-2 m-3' type="email" placeholder='Enter Email' />

                    <input value={password} onChange={(e)=>{
                      setpassword(e.target.value)
                    }} required
                    className='border-2 border-emerald-600 rounded-full bg-transparent placeholder:text-gray-400   outline-none text-white p-2 m-3' type="password" placeholder='Enter password' />
                
                    <button className='bg-emerald-600 px-5 py-1 m-2 rounded-full text-xl'>Log In</button>
            </form>
      </div>
    </div>
    </>
  )
}

export default Login