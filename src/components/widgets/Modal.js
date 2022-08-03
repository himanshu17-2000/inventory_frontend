import React from 'react'

function Modal({ handleSubmit, setflag  ,setfile ,settext ,text}) {
    return (
        <div>





            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add
            </button>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Random data</label>
                                <input type="text" className="form-control" onChange={(e)=>{settext(e.target.value)}} value={text} id="exampleInputEmail1" placeholder="Enter Data" />
                                <input type="file" className="form-control" onChange={(e)=>{setfile({[e.target.value] : e.target.files[0]})}}  id="exampleInputEmail1" placeholder="Enter Data" />
                            </div>
                            <br />
                            <button type="button" onClick={(e) => {
                                handleSubmit(e)
                                setflag(flag => !flag)
                            }} className="btn" data-bs-dismiss="modal" aria-label="Close" >submit</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal