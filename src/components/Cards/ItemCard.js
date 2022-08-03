import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const url = "http://localhost:5000/inventory/delete"
function ItemCard({data , setflag}) {
    const deleteItem = async (e) => {
        e.preventDefault()

        const id = data.item_id
        const res = await fetch(`${url}/` + id, {
            method: 'DELETE',
        })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
        toast.success("deleted");
        setflag(flag => !flag)
    }
    return (
        <div className='col-lg-6 col-md-4 col-sm-4 col-xs-4'>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{data.content}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={(e)=>deleteItem(e)} className="btn btn-primary">delete</button>
                </div>
            </div>
        </div>

    )
}

export default ItemCard