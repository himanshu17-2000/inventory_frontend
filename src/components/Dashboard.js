import React, { Fragment, useEffect, useState } from "react";
import ItemCard from "./Cards/ItemCard";
import axios from 'axios'
import { toast } from 'react-toastify'
import Navbar from "./widgets/Navbar";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About"
import Service from "./Services/Service"
import Modal from "./widgets/Modal";

const url = "http://localhost:5000"

const Dashboard = ({ setAuth }) => {
  const initialvalues = {
    user_id: "",
    user_name: "",
    user_email: "",
    user_password: ""
  }
  const [user, setUser] = useState(initialvalues)
  const [text, settext] = useState("")
  const [items, setitems] = useState([])
  const [flag, setflag] = useState(Boolean)
  const [file, setfile] = useState({}) 

  const getName = async (getItems) => {
    try {
      const response = await fetch(`${url}/dashboard/`,
        {
          method: "POST",
          headers:
          {
            token: localStorage.token
          }

        })
      const parseRes = await response.json()
      setUser(parseRes)
      setflag(flag => !flag)

    } catch (error) {
      console.log(error.message)
    }

  }

  const Logout = async (e) => {
    e.preventDefault()
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logged out successfully")
    } catch (err) {
      console.error(err.message);
    }

  }

  const getItems = async () => {

    const res = await fetch(`${url}/inventory/items`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: user.user_id })
    })

    const parseRes = await res.json()
    setitems(parseRes)
    console.log(items)

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const item_id = Math.floor(Math.random() * 10000000000001);
    const data = {
      item_id: item_id,
      user_id: user.user_id,
      user_email: user.user_email,
      content: text
    }
    console.log(file)
    await axios.post(`${url}/inventory/add`, data)

    toast.success("hogya");
  }

  useEffect(() => {
    getName()
  }, [])

  useEffect(() => {
    getItems()
  }, [flag])

  return (
    <Fragment>

      <div className="container-fluid text-center">
        <Navbar Logout={Logout} />
        <h1>The Content</h1>
        <h1>{user.user_id + " " + user.user_name}</h1>
        <Modal setflag={setflag} setfile={setfile} handleSubmit={handleSubmit} settext={settext} text={text} />

        <br />
        <div className="row">
          {items.map(item => <ItemCard key={Math.floor(Math.random() * 10000000000001)} setflag={setflag} data={item} />)}
        </div>




      </div>


    </Fragment>

  );
};

export default Dashboard;
