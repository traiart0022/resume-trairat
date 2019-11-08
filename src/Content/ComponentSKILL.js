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
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">

                            <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>

                                <h4>Web Application</h4>

                                <div className="container-fluid">
                                    <div className="row">

                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                                            <li>Front-End</li>
                                            <ul>
                                                <div className="d-flex justify-content-between">

                                                    <div>
                                                        <h6 style={{ color: "#e65c00", fontSize: "", }}> React </h6>
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
                                                    <div style={{ color: "#e65c00", fontSize: "", }}>
                                                        <h6>CSS3 </h6>
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

                                                    <div>
                                                        <h6 style={{ color: "#e65c00", fontSize: "", }}>HTML5 </h6>
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
                                                    <div>
                                                        <h6 style={{ color: "#e65c00", fontSize: "", }}>Bootstrap </h6>
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

                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                                            <li>Back-End</li>
                                            <ul>
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h6 style={{ color: "#e65c00", fontSize: "", }}>Node js </h6>
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
                                                    <div>
                                                        <h6 style={{ color: "#e65c00", fontSize: "", }}>Express </h6>
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
                                                    <div>
                                                        <h6 style={{ color: "#e65c00", fontSize: "", }}>Mysql </h6>
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
                                                    <div>
                                                        <h6 style={{ color: "#e65c00", fontSize: "", }}>Firebase </h6>
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

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
                            <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                <h4>Desktop Application</h4>
                                <div className="container-fluid">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10">


                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h6 style={{ color: "#e65c00", fontSize: "", }}>Visual Basic.net</h6>
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
                                                <div>
                                                    <h6 style={{ color: "#e65c00", fontSize: "", }}>Linq </h6>
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
                                                <div>
                                                    <h6 style={{ color: "#e65c00", fontSize: "", }}> Sql Server </h6>
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
                                                <div>
                                                    <h6 style={{ color: "#e65c00", fontSize: "", }}>Report Viewer </h6>
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

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
                            <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                <h4>Language English Skills</h4>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">


                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h6 style={{ color: "#e65c00", fontSize: "", }}>Reading : Intermediate</h6>
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
                                                <div>
                                                    <h6 style={{ color: "#e65c00", fontSize: "", }}>Listening : Learning</h6>
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
                                                <div>
                                                    <h6 style={{ color: "#e65c00", fontSize: "", }}>Writing : Learning</h6>
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
                                                <div>
                                                    <h6 style={{ color: "#e65c00", fontSize: "", }}>Speeking : Beginner</h6>
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

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
                            <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                <h4>Professional Skills</h4>
                                <div className="container-fluid">
                                    <div className="row">

                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                            <h6 style={{ color: "#e65c00", fontSize: "", }}>Have integrity</h6>
                                            <h6 style={{ color: "#e65c00", fontSize: "", }}>Have a good relationship</h6>
                                            <h6 style={{ color: "#e65c00", fontSize: "", }}>Good teamwork</h6>
                                            <h6 style={{ color: "#e65c00", fontSize: "", }}>Creative ideas</h6>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
                            <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                <h4>OTHER</h4>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <h6 style={{ color: "#e65c00", fontSize: "", }}>Travis ci</h6>
                                            <h6 style={{ color: "#e65c00", fontSize: "", }}>Config Router,Switch(Cisco)</h6>
                                            <h6 style={{ color: "#e65c00", fontSize: "", }}>Oracle VM VirtualBox</h6>
                                            <h6 style={{ color: "#e65c00", fontSize: "", }}>Node Red</h6>
                                            <h6 style={{ color: "#e65c00", fontSize: "", }}>Knowledgeable about protocal Tcp/ip, Modbus And Ocpp</h6>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
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
