import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"


const Update = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
 
    const [user , setUser] = useState({
        name : "",
        lastName : "",
        email: ""
    })
    useEffect(() => {
      const fetchUser = async () => {
          const response = await axios.get(`http://localhost:3000/user/${id}`);
          setUser(response.data);
        
      };
  
      fetchUser();
    }, [id]);
    const handleUpdate = async (e) => {
      
        await axios.put(`http://localhost:3000/user/${id}`, user);
        navigate("/");
       
    };
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      handleUpdate(user)
    }

  return (
    <div className='flex w-full h-screen justify-center items-center  bg-[#f9fafb]'>
    <div className="mx-auto w-[320px] px-6 py-4 border border-gray-500 rounded-lg flex flex-col space-y-3 items-start bg-white">
      <p className='font-serif text-[26px] text-gray-700'>Update User</p>
      <form onSubmit={()=>{}} className='flex flex-col space-y-2 w-full'>
        <div className="w-full ">
        <p className='text-[24px] text-gray-400'>Name</p>
        <input type="text" className='py-2 px-2 outline-none border border-gray-700 rounded-lg w-full' placeholder='foulen' value={user.name} onChange={(e)=>{setUser({...user , name:e.target.value})}} />
        </div>
        <div className="w-full">

        <p className='text-[24px] text-gray-400'>LastName</p>
        <input type="text" className='py-2 px-2 outline-none border border-gray-700 rounded-lg w-full' placeholder='benfoulen' value={user.lastName} onChange={(e)=>{setUser({...user , lastName:e.target.value})}}/>
        </div >
        <div className="w-full">

        <p className='text-[24px] text-gray-400'>Email</p>
        <input type="email" className='py-2 px-2 outline-none border border-gray-700 rounded-lg w-full' placeholder='ben@gmail.com' value={user.email} onChange={(e)=>{setUser({...user , email:e.target.value})}}/>
        </div >
        
        <button className='w-full py-2 bg-black text-white rounded-xl text-center text-[18px]'onClick={handleSubmit}>Update</button>
      </form>
    </div>
    </div>
  )
}

export default Update