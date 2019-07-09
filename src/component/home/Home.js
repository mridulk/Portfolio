import React, { Component } from 'react'
import './Home.css'
import image from './Mridul.jpg'
class Home extends Component {
    render() {
        return (
            <div className="text-center ">
                <div className="col-lg-12 pt-5">
                    <img className="rounded-circle imageClass" alt="100x100" width="200px" s height="200px" src={image}
                        data-holder-rendered="true" />
                    <div className="col-lg-12 text-white p-4 ">
                        <p className="nameStyle">Mridul Khurana </p> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
