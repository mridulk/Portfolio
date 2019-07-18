import React, { Component } from 'react'
import './Project.css'
import image from './GithubApi.png'
class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        }
        this.renderWebsite = this.renderWebsite.bind(this)
        // this.renderMobile = this.renderMobile.bind(this)
        this.updateSize = this.updateSize.bind(this)
    }
    componentDidMount() {
        console.log(this.state.height, this.state.width)
        window.addEventListener("resize", this.updateSize)
    }
    updateSize() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }
    renderWebsite() {
        return (
            <div>
            <div className="row pt-5 pb-5">
                <div className="col-lg-4 col-md-4 pb-2 col-4">
                    <div className="col-12 pl-2 pr-2">
                        <img src={image} className="img-fluid rounded-circle imgClass" />
                    </div>
                    <div className="col-12 watchDemoClass">
                      <h4>Watch Demo</h4>
                    </div>

                </div>
                <div className="col-lg-7 col-md-7 col-7 descriptionClass">
                    <h1 style={{color:'#3366ff'}}>Github Api</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusamus repellendus reiciendis distinctio obcaecati dolor esse? Voluptas reiciendis earum
                        assumenda quod nam, natus aliquid ipsam dolorum consequatur ad maiores modi.</p>
                </div>
            </div>
            
            </div>
        )
    }
    renderMobile() {
        return (
            <div>
                <div className="mobileDescriptionClass mt-5 mb-5">
                    <div className="col-12 pt-4 pb-2">
                        <img src={image} className="img-fluid rounded-circle MobileimgClass" />
                    </div>
                    <div className="col-12">
                    <h2 style={{color:'#3366ff'}}>Github Searcher</h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus obcaecati ab beatae aliquid accusamus quisquam cupiditate corrupti
                        voluptatem voluptatisfdhshdhh lorebus perspiciatis natus mollitia ullam autem possimus, vero quidem corporis incidunt dolorem.
                </div>
                </div>
                <div className="mobileDescriptionClass mb-5">
                    <div className="col-12 pt-4 pb-2">
                        <img src={image} className="img-fluid rounded-circle MobileimgClass" />
                    </div>
                    <div className="col-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus obcaecati ab beatae aliquid accusamus quisquam cupiditate corrupti
                        voluptatem voluptatibus perspiciatis natus mollitia ullam autem possimus, vero quidem corporis incidunt dolorem.
                </div>
                </div>
                <div className="mobileDescriptionClass mb-5">
                    <div className="col-12 pt-4 pb-2">
                        <img src={image} className="img-fluid rounded-circle MobileimgClass" />
                    </div>
                    <div className="col-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus obcaecati ab beatae aliquid accusamus quisquam cupiditate corrupti
                        voluptatem voluptatibus perspiciatis natus mollitia ullam autem possimus, vero quidem corporis incidunt dolorem.
                </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="text-center">

                <div className="col-lg-11 col-10 pt-5">
                    <h1>Projects</h1>
                    {/* <h1 className="bg-white"> {this.state.width}</h1> */}
                    {this.state.width < 887 ? this.renderMobile() : this.renderWebsite()}
                </div>
            </div>

        )
    }
}
export default Projects
