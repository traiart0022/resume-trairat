import React, { Component } from 'react'
import Footer from "../Footer/ComponentFooter"
import Header from "../ComponentHeader"
// import iconReact from "./iconReact.png"
// import iconNodejs from "./iconNodejs.png"
// import iconCss from "./iconCss.png"
// import iconHtml from "./iconHtml.png"
// import iconBootstrap from "./iconBootstrap.png"
// import IconMysql from "./IconMysql.png"


// var Overview_responsive_icon = {
//     width: '55%',
//     height: '55%'
// }

export default class ComponentSKILL extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidMount(){
   
            setInterval(() => {
    
                if (window.screen.availWidth < 576) {
                    this.setState({
                        TextRessolution1: "12px"
                    })
                } else {
                    this.setState({
                        TextRessolution1: "16px",
                    })
    
                }
    
            }, 1000);
      
    }
    
    render() {

        const { TextRessolution1/*  animetionSkill */ } = this.state
        return (
            <div>
                <Header />
                <div className=" p-1 mt-3 rounded p-2 font-weight-bold" style={{ backgroundColor: "#bbbb77", color: "", fontSize: TextRessolution1, paddingtop: "10px" }} >

                    <div className="container-fluid">

                        <h3><b>SKILL</b></h3>

                        <div className="row" >
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" >

                                <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>

                                    Web Application

                                    <div className="container-fluid" >
                                        <div className="row" >

                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                                                <b>Front-End</b>
                                                <ul style={{ color: "#cc5200", fontWeight: "bold" }}>
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
                                                <ul style={{ color: "#cc5200", fontWeight: "bold" }}>
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

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-6">
                                <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                    Desktop Application
                                    <div className="container-fluid">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 p-2" style={{ color: "#cc5200", fontWeight: "bold" }}>


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

                                                <div className="d-flex justify-content-between">
                                                    <div >

                                                        <li>WIN CC</li>

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

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                    Language English Skills
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 p-2" style={{ color: "#cc5200", fontWeight: "bold" }}>


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

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                    Professional Skills
                                    <div className="container-fluid">
                                        <div className="row">

                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-2" style={{ color: "#cc5200", fontWeight: "bold" }}>

                                                <li>Have integrity</li>
                                                <li>Have a good relationship</li>
                                                <li>Good teamwork</li>
                                                <li>Creative ideas</li>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                    Software - SCADA
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-2" style={{ color: "#cc5200", fontWeight: "bold" }}>


                                                <li>WINCC v7.5</li>
                                                <li>TIA PORTAL</li>
                                                <li>Visual Basic Script</li>
                                                <li>Factory Talk View</li>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="container-fluid rounded my-2" style={{ backgroundColor: "#d4d4aa", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                    Tool for Develop Application And Network Skills 
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 p-2" style={{ color: "#cc5200", fontWeight: "bold" }}>



                                                <li>Travis ci</li>
                                                <li>Git, GitHubDecktop And Docker</li>
                                                <li>Oracle VM VirtualBox</li>
                                                <li>JSON (JavaScript Object Notation)</li>
                                                <li>Node Red</li>


                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 p-2" style={{ color: "#cc5200", fontWeight: "bold" }}>

                                                <li>Basic config network switch</li>
                                                <li>Knowledgeable about protocal Tcp/ip , Modbus</li>
                                                <li>Knowledgeable about OSI Model</li>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}
