import React, {useEffect, useState} from 'react'
import User from '../user-data/User';
import { useNavigate } from "react-router-dom";


const Edit = () => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  var index = User.map(function (e) {
    return e.id;
  }).indexOf(id);


  const handleUpdate = (e) =>{
    e.preventDefault();

    let a = User[index];
    a.name = name;
    a.number = number;
    a.email = email;


    history('/');
  }

  useEffect(() => {
    setName(localStorage.getItem('Name'))
    setNumber(localStorage.getItem('Number'))
    setEmail(localStorage.getItem('Email'))
    setId(localStorage.getItem('Id'))
  }, [])
  




  return (
    <>
    <div className="form-section">

 
 <form onSubmit={handleUpdate} className="form">
   <p className="p-40-50-700">Add User</p>

   <div>
     <label className="form-label" htmlFor="name">
       Name :{" "}
     </label>
     <input
       className="form-input"
       type="text"
       id="name"
       autoComplete="off"
       required
       placeholder="Enter name here . . . . ."
       name="name"
       value={name}
       onChange={(e) => setName(e.target.value)}
     />
   </div>
   <div>
     <label className="form-label" htmlFor="mobileNo">
       Mobile no.{" "}
     </label>
     <input
       className="form-input number"
       type="number"
       id="mobileNo"
       autoComplete="off"
       required
       placeholder="Enter mobile no.  . . . . ."
       name="mobileNo"
       inputMode="Numeric"
       value={number}
       onChange={(e) => setNumber(e.target.value)}
       
       
     />
   </div>
   <div>
     <label className="form-label" htmlFor="email">
       Email Id :{" "}
     </label>
     <input
       className="form-input"
       type="email"
       id="email"
       autoComplete="off"
       required
       placeholder="Enter email i'd . . . . . "
       name="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
     />
   </div>

   <div>
     <button className="submit-btn" type="submit" title="submit">
       Update
     </button>
   </div>
 </form>
</div>
    </>
  )
}

export default Edit