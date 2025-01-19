import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ProfileDetail = () => {
  const {id} = useParams()
  const [user,setUser]= useState()

  const getData=async ()=>{
    const result = await axios.get(`http://localhost:3000/user/${id}`)
    setUser(result.data)
  }

  useEffect(()=>{
    getData()
  },[id])

  return (
    <div className='flex w-full h-screen justify-center items-center bg-[#f9fafb]'>
      <div className="mx-auto bg-white w-[400px] h-[200px] flex flex-col border border-gray-300 px-6 py-4 rounded-xl">
        
        <h1 className='text-[18px] font-semibold'>User FirstName : {user?.name}  </h1>
        <h3 className=' font-medium'>User LastName :  {user?.name} </h3>
      </div>
    </div>
  )
}

export default ProfileDetail