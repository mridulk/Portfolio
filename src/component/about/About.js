import React, { Component } from 'react'
import './About.css'
import YoungEngine from './YoungEngine.png'
import nagarro from './img0.jpg'
import dsc from './dsc.png'
class About extends Component {

    render() {
        const skilss = [
            {
                skill: 'Python',
                width: '65%',
                color: 'green'
            },
            {
                skill: 'C',
                width: '85%',
                color: 'pink'
            },
            {
                skill: 'C++',
                width: '85%',
                color: 'red'
            },
            {
                skill: 'java',
                width: '45%',
                color: 'yellow'
            },
            {
                skill: 'HTML',
                width: '95%',
                color: 'blue'
            },
            {
                skill: 'CSS',
                width: '85%',
                color: 'orange'
            },
            {
                skill: 'JS',
                width: '87%',
                color: 'grey'
            },

        ]
        const frameLib = [
            {
                skill: 'React /Redux',
                width: '95%',
                color: 'green'
            },
            {
                skill: 'Node Js',
                width: '85%',
                color: 'pink'
            },
            {
                skill: 'Express Js',
                width: '85%',
                color: 'orange'
            },
            {
                skill: 'Bootstrap',
                width: '95%',
                color: 'red'
            },
            {
                skill: 'Jquery',
                width: '55%',
                color: 'yellow'
            },
            {
                skill: 'Sass',
                width: '35%',
                color: 'blue'
            },

        ]
        const tools = [
            {
                skill: 'Eclipse',
                width: '65%',
                color: 'green'
            },
            {
                skill: 'VS code',
                width: '85%',
                color: 'red'
            },
            {
                skill: 'Android Studio',
                width: '55%',
                color: 'grey'
            },
            {
                skill: 'Git',
                width: '75%',
                color: 'yellow',

            },


        ]
        const internships = [
            {
                companyName: 'Young Engine',
                internColor: 'rgb(249, 133, 37)',
                companyDescription: 'Worked on frontend (ReactJs), and added some frontend screens to the YoungEngine Portal. This application acts as interface bw companies and students',
                duration: '2 months',
                developmentType: 'React Developer',
                companyImage: YoungEngine,
                position: 'Intern'
            },
            {
                companyName: 'Nagarro',
                internColor: '#3366ff',
                companyDescription: 'Worked on MERN stack,and created few application using mainly React and Node js',
                duration: '2 months',
                developmentType: 'Front-End Developer',
                companyImage: nagarro,
                position: 'Intern'
            },
            {
                companyName: 'DSC-BVP',
                internColor: 'Green',
                companyDescription: 'It is a technical Society in which,Google collaborates with university students who are passionate about growing developer communities and supports them with starting student clubs on their campuses',
                duration: '2017-2020',
                developmentType: 'Competetive Programming',
                companyImage: dsc,
                position: 'Head'
            }

        ]

        const skillList = skilss.map((skill) => {
            return <div className="row mb-2">
                <div className="col-4 font-weight-bold " style={{ fontSize: '14px' }}>
                    {skill.skill}
                </div>
                <div className="col-8 mt-1">
                    <div class="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: skill.width, backgroundColor: skill.color }}></div>
                    </div>
                </div>
            </div>

        })
        const frameworks = frameLib.map((skill) => {
            return <div className="row mb-2">
                <div className="col-4 font-weight-bold " style={{ fontSize: '14px' }}>
                    {skill.skill}
                </div>
                <div className="col-8 mt-1">
                    <div class="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: skill.width, backgroundColor: skill.color }}></div>
                    </div>
                </div>
            </div>

        })
        const toollist = tools.map((skill) => {
            return <div className="row mb-2">
                <div className="col-4 font-weight-bold" style={{ fontSize: '14px' }}>
                    {skill.skill}
                </div>
                <div className="col-8 mt-1">
                    <div class="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: skill.width, backgroundColor: skill.color }}></div>
                    </div>
                </div>
            </div>

        })
        const internshipList = internships.map((internship) => {
            return (
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div className="mainflip">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p><img className="rounded-circle img-fluid" src={internship.companyImage} alt="card image" /></p>
                                        <h4 className="card-title"><div style={{ color: internship.internColor }}>{internship.position}</div>At {internship.companyName}</h4>
                                        <hr className="lineClass"></hr>
                                        <h6 className="font-weight-normal">{internship.developmentType}</h6>
                                        <hr className="lineClass"></hr>
                                        {/* <p className="card-text ">
                                            <div className="row">
                                                <div className="col-6">Duration :<br />{internship.duration}</div>
                                                <div className="col-6 font-weight-light">Location :<br />Delhi</div>
                                            </div>
                                        </p> */}
                                        <a className="#" class="btn btn-primary btn-sm "><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center mt-1">
                                        <h4 className="card-title" style={{ color: internship.internColor }}>{internship.companyName}</h4>
                                        <div className="card-text" style={{ fontSize: '15px' }}>
                                            <div className="row">
                                                <div className=" col-12 text-center pb-3" style={{ color: internship.internColor }}>
                                                    Project/Work Description:
                                                </div>
                                                {internship.companyDescription}
                                            </div>

                                        </div>

                                    </div>
                                    <div className="row pb-0" style={{ color: internship.internColor }}>
                                        <div className="col-6">Duration<br />{internship.duration}</div>
                                        <div className="col-6 font-weight-light">Location<br />Delhi</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })



        return (
            <div className="text-center outerDiv">

                <div className="col-lg-11 col-12 pt-5">
                    <h1 style={{ color: 'white' }}>About</h1>
                    <div className="container  containerAbout  ml-1 mt-5 mb-5">
                        <div className="col-12">
                            <h3>Education <i class='fas fa-book-open'></i></h3>
                        </div>
                        <div className="col-12 pt-5 pb-5 " >
                            <table className="table  table-striped " style={{ color: 'white' }}>
                                <tr>
                                    <td className="font-weight-bold">2017</td>
                                    <td className="text-left font-weight-light ">V.V.D.A.V Public School, New Delhi <br />10th : 9.2 cgpa  <br />12th: 95% (PCM) </td>

                                </tr>
                                <tr>
                                    <td className="font-weight-bold">2021</td>
                                    <td className="text-left font-weight-light">Bharati vidyapeeth’s college of engg., New Delhi </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className=" container containerAbout ml-1 mt-5 mb-5">
                        <div className="col-12">
                            <h3>Skills <i class='fas fa-laptop-code'></i></h3>
                        </div>
                        <div className="col-12  text-center mt-5">
                            <h6 className="font-weight-light">Languages :</h6>
                        </div>

                        {skillList}
                        <div className="col-12  text-center mt-5">
                            <h6 className="font-weight-light">Framework/Libraries :</h6>
                        </div>
                        {frameworks}
                        <div className="col-12  text-center mt-5">
                            <h6 className="font-weight-light">Tools :</h6>
                        </div>
                        {toollist}


                    </div>
                    <div className="container containerAboutExperience ml-1 mt-5 mb-5">
                        <div className="col-12">
                            <h3>Experience  <i className='fas fa-user-graduate'></i></h3>
                        </div>
                        <div className="row mt-4 ml-2 mr-2 mb-4">
                            {internshipList}


                        </div>
                    </div>
                    <div className="container  containerAbout ml-1 mt-5 mb-5">
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
