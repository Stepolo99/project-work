import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
    <div >
        <nav className="navbar navbar-expand-lg bg-dark mynav" >
            <div className="container-fluid">
                <a className="navbar-brand nav-link" href="#">Dream Experience</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link " aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a> 

                    </div>    
                </div>
                <div className="d-flex justify-content-end">
                    <img src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png" alt="" style={{width: '55px', height: '55px'}} />
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar
