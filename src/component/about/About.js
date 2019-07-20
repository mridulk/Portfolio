import React, { Component } from 'react'
import './About.css'
class About extends Component {
    render() {
        return (
            <div className="text-center outerDiv">
                
                <div className="col-lg-11 col-10 pt-5">
                    <h1>About</h1>
                    <div className="container  containerAbout mt-5 mb-5">
                       <div className="col-12">
                           <h3>Education <i class='fas fa-book-open'></i></h3>
                       </div>
                    </div>
                    <div className="  containerAbout mt-5 mb-5">
                    <div className="col-12">
                           <h3>Skills <i class='fas fa-laptop-code'></i></h3>
                       </div>
                    </div>
                    <div className="container  containerAbout mt-5 mb-5">
                    <div className="col-12">
                           <h3>Experience  <i class='fas fa-user-graduate'></i></h3>
                       </div>
                    </div>
                    <div className="container  containerAbout mt-5 mb-5">
                    <div className="col-12">
                           <h3>Achievements  <i class='fas fa-award'></i></h3>
                       </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default About
