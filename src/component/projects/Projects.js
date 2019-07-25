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
        this.renderMobile = this.renderMobile.bind(this)
        this.updateSize = this.updateSize.bind(this)
        this.renderModal = this.renderModal.bind(this)
    }
    componentDidMount() {
        console.log(this.state.height, this.state.width)
        window.addEventListener("resize", this.updateSize)
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.updateSize);
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
                <div className="row pt-5 pb-5 ">
                    <div className="col-lg-4 col-md-4 pb-2 col-4">
                        <div className="col-12 pl-2 pr-2">
                            <img src={image} className="img-fluid rounded-circle imgClass" />
                        </div>
                        <div className="col-12">
                            <button className="demoClass btn btn-default" data-target="#loginModal" data-toggle="modal"> Watch Demo  <i class="fa fa-play pl-1"> </i> </button>
                            {this.renderModal()}
                        </div>

                    </div>
                    <div className="col-lg-7 col-md-7 col-7 descriptionClass">
                        <h1 style={{ color: '#3366ff' }}>Github Api</h1>
                        <div className="col-12"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusamus repellendus reiciendis distinctio obcaecati dolor esse? Voluptas reiciendis earum
                        assumenda quod nam, natus aliquid ipsam dolorum consequatur ad maiores modi.</p>
                        </div>
                        <div className="col-12 "><a href="#" className="linkClass"><h5>Github Repo</h5></a></div>
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
                        <h2 style={{ color: '#3366ff' }}>Github Searcher</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Totam, quod alias obcaecati consequatur eaque distinctio laboriosam blanditiis inventore suscipit voluptatibus excepturi amet, sit ratione facilis sunt voluptatum nisi eum doloremque.</p>
                    </div>
                    <div className="row">
                        <div className="col-7 mb-2  demoClassMobile">
                            <button className="btn btn-default" data-target="#loginModal" data-toggle="modal">Watch Demo <i class="fa fa-play"></i> </button>
                            {this.renderModal()}
                        </div>
                        <div className="col-5 linkClassMobile pt-2">
                            <a href="#">Code Link</a>
                        </div>
                    </div>
                </div>



                <div className="mobileDescriptionClass mt-5 mb-5">
                    <div className="col-12 pt-4 pb-2">
                        <img src={image} className="img-fluid rounded-circle MobileimgClass" />
                    </div>
                    <div className="col-12">
                        <h2 style={{ color: '#3366ff' }}>Github Searcher</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Totam, quod alias obcaecati consequatur eaque distinctio laboriosam blanditiis inventore suscipit voluptatibus excepturi amet, sit ratione facilis sunt voluptatum nisi eum doloremque.</p>
                    </div>
                    <div className="row">
                        <div className="col-7 mb-2  demoClassMobile">
                            <button className="btn btn-default" data-target="#loginModal" data-toggle="modal">Watch Demo <i class="fa fa-play"></i> </button>
                            {this.renderModal()}
                        </div>
                        <div className="col-5 linkClassMobile pt-2">
                            <a href="#">Code Link</a>
                        </div>
                    </div>
                </div>





                <div className="mobileDescriptionClass mt-5 mb-5">
                    <div className="col-12 pt-4 pb-2">
                        <img src={image} className="img-fluid rounded-circle MobileimgClass" />
                    </div>
                    <div className="col-12">
                        <h2 style={{ color: '#3366ff' }}>Github Searcher</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Totam, quod alias obcaecati consequatur eaque distinctio laboriosam blanditiis inventore suscipit voluptatibus excepturi amet, sit ratione facilis sunt voluptatum nisi eum doloremque.</p>
                    </div>
                    <div className="row">
                        <div className="col-7 mb-2  demoClassMobile">
                            <button className="btn btn-default" data-target="#loginModal" data-toggle="modal">Watch Demo <i class="fa fa-play"></i> </button>
                            {this.renderModal()}
                        </div>
                        <div className="col-5 linkClassMobile pt-2">
                            <a href="#">Code Link</a>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
    renderModal() {
        return (


            <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">


                    <div className="modal-content">


                        <div className="modal-body mb-0 p-0">

                            <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/SKXkC4SqtRk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                        </div>


                        <div className="modal-footer justify-content-center ">

                            <button type="button" className="btn btn-outline-primary btn-rounded btn-md "
                                data-dismiss="modal">Close</button>


                        </div>

                    </div>


                </div>
            </div>


        )
    }
    render() {
        return (
            <div className="text-center">

                <div className="col-lg-11 col-10 pt-5">
                    <h1 style={{color:'white'}}>Projects</h1>
                    {/* <h1 className="bg-white"> {this.state.width}</h1> */}
                    {this.state.width < 887 ? this.renderMobile() : this.renderWebsite()}
                </div>
            </div>

        )
    }
}
export default Projects
