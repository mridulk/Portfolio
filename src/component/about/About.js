import React, { Component } from 'react'
import './About.css'
class About extends Component {

    render() {
        const skilss = [
            {
                skill: 'Python',
                width: '65%',
                color:'green'
            },
            {
                skill: 'C',
                width: '85%',
                color:'pink'
            },
            {
                skill: 'C++',
                width: '85%',
                color:'red'
            },
            {
                skill: 'java',
                width: '45%',
                color:'yellow'
            },
            {
                skill: 'HTML',
                width: '95%',
                color:'blue'
            },
            {
                skill: 'CSS',
                width: '85%',
                color:'orange'
            },
            {
                skill: 'JS',
                width: '87%',
                color:'grey'
            },

        ]
        
            const skillList =skilss.map((skill) => {
                return <div className="row mb-2">
                     <div className="col-3 font-weight-bold">
                         {skill.skill}
                     </div>
                     <div className="col-9 mt-1">
                         <div class="progress">
                             <div className="progress-bar progress-bar-striped"   role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: skill.width ,backgroundColor:skill.color}}></div>
                         </div>
                     </div>
                 </div>

             })
         
        return (
            <div className="text-center outerDiv">

                <div className="col-lg-11 col-10 pt-5">
                    <h1>About</h1>
                    <div className="container  containerAbout  ml-1 mt-5 mb-5">
                        <div className="col-12">
                            <h3>Education <i class='fas fa-book-open'></i></h3>
                        </div>
                        <div className="col-12 pt-5 pb-5 " >
                            <table className="table  table-striped " style={{ color: 'white' }}>
                                <tr>
                                    <td className="font-weight-bold">2017</td>
                                    <td className="text-left font-weight-light">V.V.D.A.V Public School, New Delhi <br />10th : 9.2 cgpa  <br />12th : 92%</td>

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


                    </div>
                    <div className="container containerAbout ml-1 mt-5 mb-5">
                        <div className="col-12">
                            <h3>Experience  <i class='fas fa-user-graduate'></i></h3>
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
