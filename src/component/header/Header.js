import React, { Component } from 'react'
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
                                <a className="nav-link link1 " href="#">Home</a>
                            </li>
                            <li className="nav-item pl-1 ">
                                <a className="nav-link link1 " href="#">About</a>
                            </li>
                            <li className="nav-item pl-1">
                                <a className="nav-link link1 " href="#">Projects</a>
                            </li>
                            <li className="nav-item pl-1">
                                <a className="nav-link link1 " href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
