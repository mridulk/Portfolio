import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bgcolor sticky-top">
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#target_name">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="target_name">
                        <ul className="navbar-nav ">
                            <li  className="nav-item pl-1">
                               <Link to='/' className="nav-link link1 ">Home
                               </Link> 
                            </li>
                            <li className="nav-item pl-1 ">
                                <Link to='/about' className="nav-link link1 " >About</Link>
                            </li>
                            <li className="nav-item pl-1">
                                <Link to='/projects' className="nav-link link1 " href="#">Projects</Link>
                            </li>
                            <li className="nav-item pl-1">
                                <Link to='/contacts' className="nav-link link1 " href="#">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
