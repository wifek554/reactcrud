import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const [userData, setUserData] = useState([])

  const handleUsers = async () => {
    const response = await axios.get("http://localhost:3000/user")
    const users = await response.data
    setUserData(users)
  };

  const handleDelete = async (id) => {

      await axios.delete(`http://localhost:3000/user/${id}`);
      setUserData(userData.filter((user) => user.id !== id));
    
  };

  useEffect(() => {
    handleUsers()
  }, [])

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col items-start mt-[150px]">
        <Link to={`/create`} className='border my-4  mx-auto border-orange-700 text-orange-700 px-4 py-2 rounded-xl '>create new +</Link>
        <table className="max-w-[1000px] w-full mx-auto  bg-white border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th
                className="py-2 px-4 border-b border-gray-200 text-left text-gray-600"
              >
                id
              </th>
              <th
                className="py-2 px-4 border-b border-gray-200 text-left text-gray-600"
              >
                Name
              </th>
              <th
                className="py-2 px-4 border-b border-gray-200 text-left text-gray-600"
              >
                LastName
              </th>
              <th
                className="py-2 px-4 border-b border-gray-200 text-left text-gray-600"
              >
                email
              </th>
              <th
                className="py-2 px-4 border-b border-gray-200 text-left text-gray-600"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item) => (
              <tr className="even:bg-[#f9fafb] ">
                <td
                  className="py-2 px-4 border-b border-gray-200 text-gray-800"
                >
                  {item.id}
                </td>
                <td
                  className="py-2 px-4 border-b border-gray-200 text-gray-800"
                >
                  {item.name}
                </td>
                <td
                  className="py-2 px-4 border-b border-gray-200 text-gray-800"
                >
                   {item.lastName}
                </td>
                <td
                  className="py-2 px-4 border-b border-gray-200 text-gray-800"
                >
                   {item.email}
                </td>
                <td className='flex space-x-4 items-center '>
                  <Link to={`/page-details/${item.id}`} className='border border-blue-700 text-blue-700 px-4 py-2 rounded-xl'>Read</Link>
                  <Link to={`/update/${item.id}`}className='border border-green-700 text-green-700 px-4 py-2 rounded-xl'>Update</Link>
                  <Link className='border border-red-700 text-red-700 px-4 py-2 rounded-xl' onClick={() => handleDelete(item.id)}>Delete</Link>
                </td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home