import React, { Component } from 'react'

import iconReact from "./iconReact.png"
import iconNodejs from "./iconNodejs.png"
import iconCss from "./iconCss.png"
import iconHtml from "./iconHtml.png"
import iconBootstrap from "./iconBootstrap.png"
import IconMysql from "./IconMysql.png"


var Overview_responsive_icon = {
    width: '55%',
    height: '55%'
}

export default class ComponentSKILL extends Component {
    render() {
        return (

            <div className=" p-1 mt-3 rounded p-2" style={{ backgroundColor: "#bbbb77", color: "", fontSize: "16px", paddingtop: "10px" }} >
                <div className="container-fluid">

                    <h3><b>SKILL</b></h3>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-self-center">

                            <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>

                                <h4>Web Application</h4>

                                <div className="container-fluid">
                                    <div className="row">

                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                                            <b>Front-End</b>
                                            <ul style={{  color: "#cc5200", fontSize: "16px", fontWeight: "bold" }}>
                                                <div className="d-flex justify-content-between">

                                                    <div >
                                                      
                                                            <li> React </li>
                                                 
                                                    </div>
                                                    <div>
                                                        {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <div >
                                                        
                                                            <li>CSS3 </li>
                                                      
                                                    </div>
                                                    <div>
                                                        {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between">

                                                    <div >
                                                    
                                                            <li>HTML5 </li>
                                                     
                                                    </div>
                                                    <div>
                                                        {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div >
                                                 
                                                            <li>Bootstrap </li>
                                                      
                                                    </div>
                                                    <div>
                                                        {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                    </div>

                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div >
                                                 
                                                            <li>JavaScript </li>
                                                      
                                                    </div>
                                                    <div>
                                                        {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                    </div>

                                                </div>
                                            </ul>
                                        </div>

                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >

                                            <b>Back-End</b>
                                            <ul style={{  color: "#cc5200", fontSize: "16px", fontWeight: "bold" }}>
                                                <div className="d-flex justify-content-between">
                                                    <div >
                                                       
                                                            <li>Node js </li>
                                                    
                                                    </div>
                                                    <div>
                                                        {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                    </div>

                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <div >
                                                        
                                                            <li>Express </li>
                                                        
                                                    </div>
                                                    <div>
                                                        {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                    </div>

                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div >
                                                       
                                                            <li>Mysql </li>
                                                  
                                                    </div>
                                                    <div>
                                                        {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                    </div>

                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div >
                                              
                                                            <li>Firebase </li>
                                        
                                                    </div>
                                                    <div>
                                                        {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                    </div>

                                                </div>                                             

                                                <div className="d-flex justify-content-between">
                                                    <div >
                                              
                                                            <li>RESTful API </li>
                                        
                                                    </div>
                                                    <div>
                                                        {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                    </div>

                                                </div>
                                            </ul>

                                        </div>

                                    </div>
                                </div>



                            </div>


                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-self-center">
                            <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                <h4>Desktop Application</h4>
                                <div className="container-fluid">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 p-2" style={{  color: "#cc5200", fontSize: "16px", fontWeight: "bold"  }}>


                                            <div className="d-flex justify-content-between">
                                                <div >
                                                   
                                                        <li>Visual Basic.net</li>
                                                  
                                                </div>
                                                <div>
                                                    {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                </div>

                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <div >
                                                 
                                                        <li>Linq </li>
                                                  
                                                </div>
                                                <div>
                                                    {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                </div>

                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <div >
                                                  
                                                        <li>SQL Server and SSMS </li>
                                                   
                                                </div>
                                                <div>
                                                    {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                </div>

                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <div >
                                                    
                                                        <li>Report Viewer </li>
                                                   
                                                </div>
                                                <div>
                                                    {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                </div>

                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <div >
                                                    
                                                        <li>Visual Basic Script</li>
                                                   
                                                </div>
                                                <div>
                                                    {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                </div>

                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-self-center">
                            <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                <h4>Language English Skills</h4>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 p-2" style={{ color: "#cc5200", fontSize: "16px", fontWeight: "bold" }}>


                                            <div className="d-flex justify-content-between">
                                                <div >

                                                    <li>Reading : Intermediate</li>

                                                </div>
                                                <div>

                                                    {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}

                                                </div>

                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <div >

                                                    <li>Listening : Learning</li>

                                                </div>
                                                <div>
                                                    {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                </div>

                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <div >

                                                    <li>Writing : Learning</li>

                                                </div>
                                                <div>
                                                    {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                </div>

                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <div >

                                                    <li>Speeking : Beginner</li>

                                                </div>
                                                <div>
                                                    {/* <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon className={animetionSkill} icon="star" style={{ color: "#e65c00" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} />
                                                                    <FontAwesomeIcon icon="star" style={{ color: "#adad85" }} /> */}
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-self-center">
                            <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                <h4>Professional Skills</h4>
                                <div className="container-fluid">
                                    <div className="row">

                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-2" style={{ color: "#cc5200", fontSize: "16px", fontWeight: "bold" }}>

                                            <li>Have integrity</li>
                                            <li>Have a good relationship</li>
                                            <li>Good teamwork</li>
                                            <li>Creative ideas</li>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-self-center">
                            <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                <h4>OTHER</h4>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-2" style={{ color: "#cc5200", fontSize: "16px", fontWeight: "bold" }}>
                                            <li>Travis ci</li>
                                            <li>Git, GitHubDecktop And Docker</li>
                                            <li>Oracle VM VirtualBox</li>
                                            <li>JSON (JavaScript Object Notation)</li>
                                            <li>Node Red</li>
                                            <li>Knowledgeable about protocal Tcp/ip , Modbus</li>
                                            <li>Knowledgeable about OSI Model</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-self-center">
                            <div className="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                <div className="container-fluid">
                                    <div className="row">

                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                                            <div className="d-flex justify-content-center">
                                                <img src={iconReact} className="rounded " alt='' style={Overview_responsive_icon} />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                            <div className="d-flex justify-content-center">
                                                <img src={iconNodejs} className="rounded" alt='' style={Overview_responsive_icon} />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                            <div className="d-flex justify-content-center">
                                                <img src={iconCss} className="rounded" alt='' style={Overview_responsive_icon} />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                            <div className="d-flex justify-content-center">
                                                <img src={iconHtml} className="rounded" alt='' style={Overview_responsive_icon} />
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                            <div className="d-flex justify-content-center">
                                                <img src={iconBootstrap} className="rounded" alt='' style={Overview_responsive_icon} />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                            <div className="d-flex justify-content-center">
                                                <img src={IconMysql} className="rounded" alt='' style={Overview_responsive_icon} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
