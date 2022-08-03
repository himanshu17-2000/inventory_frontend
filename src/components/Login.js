import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom"
import { toast } from "react-toastify" ;
const url = "http://localhost:5000/auth"

const Login = ({ setAuth }) => {
  const initialvalues = {
    email: "",
    password: "",
  }
  const [inputs, setInputs] = useState(initialvalues)
  const handlechange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }
  const onSubmitForm = async (e) => {
    e.preventDefault()
    if(inputs.email === "" || inputs.password === ""){
      alert("Fill all the Fields") ;
      
    }
    else{
      try {
        const response = await fetch(`${url}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputs)
        })
        const parseRes = await response.json()
  
        if(parseRes.token){
          localStorage.setItem("token", parseRes.token);
          setAuth(true)
          toast.success("login , Successfully");
        }
        else{
          setAuth(false) ;
          toast.error(parseRes) 
        }
       
  
  
      } catch (error) {
        console.log(error.message + " LOGIN me ")
      }
    }

   
  }
  return (
    <Fragment  >
      <div className="container">
        <h1 className="text-center  my-3">Login</h1>
        <form>
          <input onChange={(e) => { handlechange(e) }} className="form-control  my-3" type="email" name="email" value={inputs.email} placeholder="Email" />
          <input onChange={(e) => { handlechange(e) }} className="form-control my-3" type="password" name="password" value={inputs.password} placeholder="Password" />
          <button onClick={(e) => { onSubmitForm(e) }} className="btn btn-success btn-block" >Submit </button>
        </form>
        <Link to="/register"> Register</Link>

      </div>

    </Fragment>
  );
};

export default Login;
