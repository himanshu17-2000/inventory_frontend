import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
const url = "http://localhost:5000/auth"
const Register = ({ setAuth }) => {
  const initialvalues = {
    id: "",
    username: "",
    email: "",
    password: ""
  }
  const [inputs, setinputs] = useState(initialvalues)
  const handlechange = (e) => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }
  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (inputs.email === "" || inputs.password === "" || inputs.username === "" ||inputs.id === "") {
      alert("Fill all the Fields");

    }
    else {
      try {
        const response = await fetch(`${url}/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputs)
        })
        const parseRes = await response.json()
        if (parseRes.token) {
          localStorage.setItem("token", parseRes.token);

          setAuth(true);
          toast.success("Registered succesfully")
          setinputs(initialvalues)
        } else {
          toast.error(parseRes)
          setAuth(false);


        }
      } catch (error) {
        console.log(error.message);

      }
    }


  }

  return (
    <Fragment >
      <div className="container ">
        <h1 className="text-center my-5">Register</h1>
        <form>
          <input type="number" name="id" placeholder="phone" className="
        form-control mt-3
        "  onChange={(e) => { handlechange(e) }} value={inputs.id} />
          <input className="
        form-control mt-3
        " type="text" name="username" value={inputs.username} placeholder="username" onChange={(e) => { handlechange(e) }} />
          <input className="
        form-control mt-3
        " type="email" name="email" value={inputs.email} placeholder="email" onChange={(e) => { handlechange(e) }} />
          <input className="
        form-control mt-3
        " type="password" name="password" value={inputs.password} placeholder="password" onChange={(e) => { handlechange(e) }} />
          <button className="
        form-control mt-3 btn btn-success btn-block
        " onClick={(e) => { onSubmitForm(e) }} >Submit </button>
        </form>
        <Link to="/login" >Login</Link>
      </div>

    </Fragment>
  );
};

export default Register;
