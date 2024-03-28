import React from 'react'
import './Navbar.css'

type NavbarProps = {
  cart: number[];
};

const Navbar = (props: NavbarProps) => {
    console.log(props)
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
                <div className="d-flex justify-content-end relative">
                    <img src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png" alt="" style={{width: '55px', height: '55px' }} />
                    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{props.cart.length}</span>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar
