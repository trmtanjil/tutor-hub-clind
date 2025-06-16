
 import React, { use } from 'react'
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import {  useNavigate } from 'react-router';
   
 function AddTutor() {
  const {user}=use(AuthContext)
  const navigate =useNavigate()
 

      const handleAddProduct=e=>{
    e.preventDefault();
    const form =e.target;
    const formData = new FormData(form)
    const newFromData=Object.fromEntries(formData.entries());
    newFromData.likedBy = []
    newFromData.email = user?.email
    console.log(newFromData)

    // add product server 

    axios.post(`${import.meta.env.VITE_API_URL}/tutor`,newFromData).then(data=>{
      console.log(data)
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your Post  has been saved",
  showConfirmButton: false,
  timer: 1500
});
navigate('/')
    }).catch(err=>{
      console.log(err)   
    })

 
  }


   return (
     <div>
        {/* <Helmet>  <title>Add tutor </title></Helmet> */}
            <div className="text-white  mx-auto p-4 bg-gray-600 shadow rounded-xl m-4 px-[5%]">
      <h2 className="text-2xl font-bold mb-4">Add New Tutorial</h2>
      <form onSubmit={handleAddProduct}>
       <div className="space-y-4 grid md:grid-cols-2 gap-4" >


       {/* rusere email  */}
         <div>
          <label>User Email:</label>
          <input type="email" name="email"    readOnly
    placeholder="Rent Amount" defaultValue={user.email} className="w-full p-2 border rounded" required />
        </div>



 {/* user name */}
         <div>
          <label>User Name  :</label>
          <input type="text" name="username"  readOnly
           defaultValue={user.displayName}  
    placeholder="User Name " className="w-full p-2 border rounded" required />
        </div>


        {/*   */}
         <div>
          <label>Enter The language :</label>
          <input type="text" name="language" placeholder=" Enter The language " className="w-full p-2 border rounded" required />
        </div>
 
        {/*   price  */}
         <div>
          <label>Enter The Price :</label>
          <input type="number" name="price" placeholder="Enter The Price" className="w-full p-2 border rounded" required />
        </div>

 <div>
          <label>Enter a Photo URL:</label>
          <input type="text" name="image" placeholder="Enter a Photo URL" className="w-full p-2 border rounded" required />
        </div>
        {/*   info  */}
         <div>
          <label>Type Description</label>
          <input type="text" name="description" placeholder="Contact Info" className="w-full p-2 border rounded" required />
        </div>

       </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 my-4">Submit</button>
      </form>
    </div>
     </div>
   )
 }
 
 export default AddTutor
