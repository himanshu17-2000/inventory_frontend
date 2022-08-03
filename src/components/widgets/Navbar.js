import React from 'react'
import { Link } from 'react-router-dom'
{/* <button className="btn btn-sm btn-outline-secondary" onClick={(e) => {
    Logout(e)
}}>Logout </button> */}
function Navbar({ Logout }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">The Dashboard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">about</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/service">service</Link>
                            </li>
                            
                        </ul>
                        <form className="d-flex">

                            <button onClick={Logout} className="btn btn-light">Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar