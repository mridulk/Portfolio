import React, { Component } from 'react'
import './Home.css'
import image from './Mridul.jpg'
class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            windowWidth: window.innerWidth
        }
        this.updateWidth = this.updateWidth.bind(this)
        this.renderWebsite = this.renderWebsite.bind(this)
        this.renderMobile = this.renderMobile.bind(this)
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateWidth)
    }
    updateWidth() {
        this.setState({
            windowWidth: window.innerWidth
        })
    }
    renderMobile() {
        return (
            <div>
                <div className="row containerObjective pl-3 pr-3 pt-4 pb-4 font-weight-light">
                    As a fresher, I want to put to use my creative skills,
                    technologies that I am familiar with, innovative thoughts
                    that will benefit the Organization in the long run and also
                    help me in building my professional career.
                </div>
            </div>
        )
    }
    renderWebsite() {
        return (
            <div>
                <div className="col-12 containerObjective p-5 font-weight-light">
                    As a fresher, I want to put to use my creative skills,
                    technologies that I am familiar with, innovative thoughts
                    that will benefit the Organization in the long run and also
                    help me in building my professional career.
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="text-center container">

                <div className="col-lg-11 col-10 pt-5">
                    <img className="rounded-circle imageClass" alt="100x100" width="210px" height="210px" src={image}
                        data-holder-rendered="true" />
                    <div className="col-lg-12 text-white p-4 ">
                        <p className="nameStyle">Mridul Khurana </p>
                    </div>
                    {this.state.windowWidth < 887 ?  this.renderMobile() : this.renderWebsite() }
                    {console.log(this.state.windowWidth)}
                </div>
            </div>
        )
    }
}

export default Home
