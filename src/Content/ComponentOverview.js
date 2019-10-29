import React, { Component } from 'react'
import Header from "../ComponentHeader"
import Footer from "../Footer/ComponentFooter"
import { Link } from 'react-router-dom'

import img1 from "./S.Trairat1.jpg"
import iconReact from "./iconReact.png"
import iconNodejs from "./iconNodejs.png"
import iconCss from "./iconCss.png"
import iconHtml from "./iconHtml.png"
import iconBootstrap from "./iconBootstrap.png"
import IconMysql from "./IconMysql.png"
import IconKmutnb from "./IconKmutnb.png"
import IconCit from "./iconCit.gif"
import Kmutnb from "./Kmutnb.jpg"
import IconRjs from "./IconRjs.jpg"
import rjs from "./rjs.jpg"

import Weather from "./EvE/Weather.png"
import Dashboard from "./EvE/Dashboard.png"
import Inverter from "./EvE/Inverter.png"
import Login from "./EvE/Login.png"
import Setting from "./EvE/Setting.png"
import Station from "./EvE/Station.png"

import IMG_1547 from "./BGC/IMG_1547.JPG"
import IMG_1631 from "./BGC/IMG_1631.JPG"
import SS from "./BGC/SS.png"
import WHRPowerPlant from "./BGC/WHRPowerPlant.png"
import WHRPowerPlant1 from "./BGC/WHRPowerPlant1.png"

import IMG_2243 from "./TOT/IMG_2243.jpg"
import IMG_2337 from "./TOT/IMG_2337.jpg"
import IMG_2352 from "./TOT/IMG_2352.jpg"

import IconKFC from "./IconKFC.png"

import IMG_2818 from "./Audio/IMG_2818.jpg"
import IMG_2819 from "./Audio/IMG_2819.jpg"

import Fixit2 from "./Fixit/Fixit2.JPG"
import Fixit3 from "./Fixit/Fixit3.JPG"
import Fixit4 from "./Fixit/Fixit4.JPG"
import Pdf from '../DocFinalprojeect/Finalproject.pdf'

import imgVolunteer1 from "./Volunteer/img1.JPG"
import imgVolunteer4 from "./Volunteer/img4.JPG"

import imgFp1 from "./Finalproject/imgFp1.jpg"
import imgFp2 from "./Finalproject/imgFp2.jpg"
import VideoFp1 from "./Finalproject/VideoFp1.mp4"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faGamepad,
    faFutbol,
    faTableTennis,
    faGlassCheers,
    faSolarPanel,
    faSun,
    faMobile,
    faComments,
    faUsers,
    faDoorOpen
} from '@fortawesome/free-solid-svg-icons'

library.add(fab,
    faGamepad,
    faFutbol,
    faTableTennis,
    faGlassCheers,
    faSolarPanel,
    faSun,
    faMobile,
    faComments,
    faUsers,
    faDoorOpen
)

var Overview_responsive = {
    width: '80%',
    height: '80%'
}

var Overview_responsive_icon = {
    width: '55%',
    height: '55%'
}

var Overview_responsive_img = {
    width: '100%',
    height: '100%'
}

var Overview_Container = {
    display: 'grid',
    gridTemplateColumns: 'auto',
}
var Overview_div = {
    textAlign: 'center'
}
/* var Overview_responsive_1 = {
    width: '100%',
    height: '100%'
} */

export default class ComponentIntroduceMyself extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid mb-3" >

                    <div className="container-fluid mt-2">
                        <div className="row rounded p-2" style={{ backgroundColor: "#53c653", color: "blue", fontSize: "18px", }}>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 p-2" style={Overview_div}>
                                <div class="container-fluid rounded p-5 my-2" style={{ backgroundColor: "#8cd98c", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                    <h3><b>Introduce Myself</b></h3>
                                    <div>
                                        <img src={img1} class="rounded" alt='' style={Overview_responsive} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 align-self-center">
                                <div class="container-fluid rounded p-5 my-2" style={{ backgroundColor: "#8cd98c", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                    <ul>
                                        <li>Name: Mr Trirat Sukphong</li>
                                        <li>Nickname: Duck</li>
                                        <li>Date/Month/Year of Birth: 19 March 1997</li>
                                        <li>Marital status: Single</li>
                                        <li>Address 8 Soi-Wutthakat 42, Wutthakat Road
                                            - Bang Kho Subdistrict - Chom Thong District
                                        Bangkok 10150</li>
                                    </ul>

                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 align-self-center">
                                <div class="container-fluid rounded p-5 my-2" style={{ backgroundColor: "#8cd98c", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                    <ul>
                                        <li>Thailand nationality.</li>
                                        <li>weight 47 kg</li>
                                        <li>height 166 cm</li>
                                        <li>No military obligations</li>
                                        <li>Hobby: Play Mobile Games(ROV) AND Play Football</li>

                                    </ul>

                                    <div className=" d-flex justify-content-center">
                                        <FontAwesomeIcon className="mr-auto" icon="gamepad" style={{ height: "60px", width: "60px", color: "blue" }} />
                                        <FontAwesomeIcon className="mr-auto" icon="futbol" style={{ height: "60px", width: "60px", color: "blue" }} />
                                        <FontAwesomeIcon className="mr-auto" icon="table-tennis" style={{ height: "60px", width: "60px", color: "blue" }} />
                                        <FontAwesomeIcon icon="glass-cheers" style={{ height: "60px", width: "60px", color: "blue" }} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="row">

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 "  >
                            <div className=" p-1 mt-3 rounded" style={{ backgroundColor: "#ff944d", color: "blue", fontSize: "16px", padding: "" }} >
                                <div className="container-fluid">
                                    <h3><b>EDUCATION</b></h3>

                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">

                                                <div class="container-fluid p-5 my-2 rounded" style={{ backgroundColor: "#ffbf80", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                                    <div class="container-fluid d-flex justify-content-center">

                                                        <div className="">
                                                            <h4>King Mongkut's University of Technology North Bangkok (GPA 2.9)</h4>
                                                        </div>
                                                    </div>
                                                    <div class="container-fluid ">

                                                        <div class="row">
                                                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center rounded my-1" style={Overview_Container} >

                                                                <div style={{}}>
                                                                    <img src={IconKmutnb} className="rounded" alt='' style={{ height: "180px", width: "auto" }} />
                                                                </div>

                                                            </div>

                                                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center rounded my-1" style={Overview_Container}>

                                                                <div className="rounded align-self-center" style={{}}>
                                                                    <img src={Kmutnb} className="rounded align-self-center" alt='' style={{ height: "140px", width: "auto" }} />
                                                                </div>

                                                            </div>

                                                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center rounded my-1" style={Overview_Container}>

                                                                <div style={{}}>
                                                                    <img src={IconCit} className="rounded" alt='' style={{ height: "180px", width: "auto" }} />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">

                                                <div class="container-fluid p-5 my-2 rounded" style={{ backgroundColor: "#ffbf80", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                                    <div class="container-fluid d-flex justify-content-center">

                                                        <div className="">
                                                            <h4>Rajasitaram Technical College, Bangbon Subdistrict, Bang Bon District, Bangkok (GPA 3.79)</h4>
                                                        </div>
                                                    </div>

                                                    <div class="container-fluid ">

                                                        <div class="row">
                                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center my-1" style={Overview_Container}>
                                                                <div>
                                                                    <img src={IconRjs} className="rounded" alt='' style={{ height: "180px", width: "auto" }} />
                                                                </div>
                                                            </div>

                                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center my-1" style={Overview_Container}>
                                                                <div className="rounded align-self-center">
                                                                    <img src={rjs} className="rounded" alt='' style={{ height: "140px", width: "auto" }} />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"  >
                            <div className=" p-1 mt-3 rounded p-2" style={{ backgroundColor: "#ff8080", color: "blue", fontSize: "16px", paddingtop: "10px" }} >
                                <div className="container-fluid">

                                    <h3><b>Skill</b></h3>

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">

                                            <div class="container-fluid rounded" style={{ backgroundColor: "#ffb3b3", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>

                                                <h4>Web Application</h4>
                                                <ul >
                                                    <div className="d-flex justify-content-start ">
                                                        <div class="container-fluid">
                                                            <div class="row">

                                                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                                    <div /* className="mr-lg-5" ff8080*/>
                                                                        <li>Front-End</li>

                                                                        <h6>React</h6>
                                                                        <h6>CSS3</h6>
                                                                        <h6>HTML5</h6>
                                                                        <h6>Bootstrap</h6>

                                                                    </div>
                                                                </div>

                                                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                                    <div /* className="ml-5 mr-5" */>
                                                                        <li>Back-End</li>

                                                                        <h6>Node js</h6>
                                                                        <h6>Express</h6>
                                                                        <h6>Mysql</h6>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </ul>
                                            </div>


                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                            <div class="container-fluid rounded my-2" style={{ backgroundColor: "#ffb3b3", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                                <h4>Desktop Application</h4>
                                                <div class="container-fluid">
                                                    <div class="row">
                                                        <ul >

                                                            <li><h6>vb.net</h6></li>
                                                            <li><h6>Linq</h6></li>
                                                            <li><h6>Sql Server</h6></li>
                                                            <li><h6>Report Viewer</h6></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
                                            <div class="container-fluid rounded my-2" style={{ backgroundColor: "#ffb3b3", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                                <h4>Language English Skills</h4>
                                                <div class="container-fluid">
                                                    <div class="row">
                                                        <ul >

                                                            <li><h6>Reading : Middle</h6></li>
                                                            <li><h6>Listening : Middle</h6></li>
                                                            <li><h6>Writing : pretty low</h6></li>
                                                            <li><h6>Speeking : Middle</h6></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
                                            <div class="container-fluid rounded my-2" style={{ backgroundColor: "#ffb3b3", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                                <h4>Professional Skills</h4>
                                                <div class="container-fluid">
                                                    <div class="row">
                                                        <ul >

                                                            <li><h6>Have integrity</h6></li>
                                                            <li><h6>Have a good relationship</h6></li>
                                                            <li><h6>Good teamwork</h6></li>
                                                            <li><h6>Creative ideas</h6></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
                                            <div class="container-fluid rounded my-2" style={{ backgroundColor: "#ffb3b3", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                                <h4>OTHER</h4>
                                                <div class="container-fluid">
                                                    <div class="row">
                                                        <ul >

                                                            <li><h6>Config Router,Switch(Cisco And Mikrotik) : Basic</h6></li>
                                                            <li><h6>Oracle VM VirtualBox</h6></li>
                                                            <li><h6>Node Red</h6></li>
                                                            <li><h6>knowledge protocal is Tcp/ip, Modbus And Ocpp</h6></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
                                            <div class="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#ffb3b3", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                                <div class="container-fluid">
                                                    <div class="row">

                                                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                                                            <div className="d-flex justify-content-center">
                                                                <img src={iconReact} className="rounded " alt='' style={Overview_responsive_icon} />
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                                            <div className="d-flex justify-content-center">
                                                                <img src={iconNodejs} className="rounded" alt='' style={Overview_responsive_icon} />
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                                            <div className="d-flex justify-content-center">
                                                                <img src={iconCss} className="rounded" alt='' style={Overview_responsive_icon} />
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                                            <div className="d-flex justify-content-center">
                                                                <img src={iconHtml} className="rounded" alt='' style={Overview_responsive_icon} />
                                                            </div>
                                                        </div>

                                                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                                            <div className="d-flex justify-content-center">
                                                                <img src={iconBootstrap} className="rounded" alt='' style={Overview_responsive_icon} />
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
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
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 "  >
                            <div className=" p-1 mt-3 rounded" style={{ backgroundColor: "#4dc3ff", color: "blue", fontSize: "16px", paddingtop: "10px" }} >
                                <div className="container-fluid">

                                    <h3><b>EXPERIENCE</b></h3>

                                    <div class="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#99ccff", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                        <div class="row">
                                            <ul >
                                                <li>Full time job at INSPIRE TECH CO.,LTD  (JULY 2019 – Present)</li>
                                                <ul >

                                                    <li>Create Web Monitoring  PV & CHARGING STATION with Reactjs Node-red Nodejs Express And Mysql.</li>

                                                </ul>

                                            </ul>
                                            <div class="container-fluid">



                                                <div class="row">



                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={Login} className="rounded" alt='' style={Overview_responsive_img} />
                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">
                                                        <div className="d-flex justify-content-center">
                                                            <img src={Dashboard} className="rounded" alt='' style={Overview_responsive_img} />
                                                        </div>
                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={Weather} className="rounded" alt='' style={Overview_responsive_img} />
                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={Station} className="rounded" alt='' style={Overview_responsive_img} />
                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={Inverter} className="rounded" alt='' style={Overview_responsive_img} />
                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={Setting} className="rounded" alt='' style={Overview_responsive_img} />
                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 my-2 d-flex justify-content-center">
                                                        <button class="btn btn-warning" >
                                                            <a href="http://eve.ke.in.th/" target="_blank">
                                                                <h4>
                                                                    <FontAwesomeIcon icon="solar-panel" style={{ height: "30px", width: "30px", color: "blue" }} />&nbsp;
                                                                    link to eve.ke.in.th
                                                                    &nbsp;<FontAwesomeIcon icon="sun" style={{ height: "30px", width: "30px", color: "blue" }} />
                                                                </h4>
                                                            </a>
                                                        </button>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#99ccff", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                        <div class="row">
                                            <ul >
                                                <li>Co-Operative at INSPIRE TECH CO.,LTD  (AUG 2018 – NOV 2018)</li>
                                                <ul >

                                                    <li>Learned about machine control systems and  wrote more programs about vb.net and SQL languages.</li>
                                                    <li>Designed SCADA for checking about operation of machine.</li>
                                                    <li>Create Monitoring Substation system & Waste-Heat-Recovery system with Wonderware indusoft web studio.</li>

                                                </ul>
                                            </ul>
                                            <div class="container-fluid">



                                                <div class="row">


                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={SS} className="rounded" alt='' style={Overview_responsive_img} />
                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={WHRPowerPlant} className="rounded" alt='' style={Overview_responsive_img} />
                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={WHRPowerPlant1} className="rounded" alt='' style={Overview_responsive_img} />
                                                        </div>

                                                    </div>

                                                    <div class="container-fluid">

                                                        <div class="row d-flex justify-content-center">

                                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                                <div className="d-flex justify-content-center">
                                                                    <img src={IMG_1547} className="rounded" alt='' style={{ height: "70%", width: "70%" }} />
                                                                </div>

                                                            </div>

                                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">
                                                                <div className="d-flex justify-content-center">
                                                                    <img src={IMG_1631} className="rounded" alt='' style={{ height: "70%", width: "70%" }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#99ccff", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                        <div class="row">
                                            <ul >
                                                <li>Co-Operative at TOT Public Company Limited (MAY 2014 - AUG 2014)</li>
                                                <ul >
                                                    <li>Connected the communication line at the source.</li>
                                                    <li>Foundgood quality communication lines for use.</li>
                                                </ul>
                                            </ul>

                                            <div class="container-fluid">



                                                <div class="row">


                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={IMG_2243} className="rounded" alt='' style={{ height: "70%", width: "70%" }} />
                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={IMG_2337} className="rounded" alt='' style={{ height: "70%", width: "70%" }} />
                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={IMG_2352} className="rounded" alt='' style={{ height: "70%", width: "70%" }} />
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div class="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#99ccff", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                        <div class="row">
                                            <ul >
                                                <li>Past time job at KFC Sena-fest (JAN 2015 - JUNE 2019)</li>
                                                <ul >
                                                    <li>Service work in KFC shop.</li>
                                                    <li>Home delivery service.</li>
                                                </ul>
                                            </ul>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                <div className="d-flex justify-content-center">
                                                    <img src={IconKFC} className="rounded" alt='' style={{ height: "50%", width: "50%" }} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 "  >
                            <div className=" p-1 mt-3  rounded" style={{ backgroundColor: "#e580ff", color: "blue", fontSize: "16px", padding: "" }} >
                                <div className="container-fluid">
                                    <h3><b>PORTFOLIO</b></h3>

                                    <div class="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#eb99ff", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                        <div class="row">
                                            <ul>
                                                <li>Final project at university is Semi - Automatic Raw Materials Mixer Machine</li>
                                            </ul>
                                            <div class="container-fluid">
                                                <div className="d-flex justify-content-center my-2">
                                                    <Link to={Pdf} target="_blank" download><button className="btn btn-success" >Download DOCUMENTS</button></Link>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <Link to={'/Doc'}><button className="btn btn-success">LINK TO DOCUMENTS </button></Link>
                                                </div>
                                                <div class="row">

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 ">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={imgFp1} className="rounded" alt='' style={{ height: "70%", width: "70%" }} />
                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 align-self-center">

                                                        <div className="d-flex justify-content-center ">

                                                            <video src={VideoFp1} width="100%" height="100%" controls preload="auto" />

                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={imgFp2} className="rounded" alt='' style={{ height: "70%", width: "70%" }} />
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                    <div class="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#eb99ff", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                        <div class="row">
                                            <ul>
                                                <li>Volunteer</li>
                                            </ul>
                                            <div class="container-fluid">

                                                <div class="row">

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 align-self-center">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={Fixit2} className="rounded" alt='' style={{ height: "70%", width: "70%" }} />
                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={Fixit4} className="rounded" alt='' style={{ height: "50%", width: "50%" }} />
                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 align-self-center">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={Fixit3} className="rounded" alt='' style={{ height: "70%", width: "70%" }} />
                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 ">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={imgVolunteer1} className="rounded" alt='' style={{ height: "70%", width: "70%" }} />
                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 align-self-center">

                                                        <div className="d-flex justify-content-center ">

                                                            <a target="_blank" href="https://www.youtube.com/watch?v=eBMgtnE_wLU&fbclid=IwAR0AvGJ39c9Bof5AOntUpB8PQG1IeF-gDarCmdSVek1PyAQ8TU9lzbGiQBQ">
                                                                <button className="btn btn-success" >LINK TO www.youtube.com</button>
                                                            </a>

                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={imgVolunteer4} className="rounded" alt='' style={{ height: "70%", width: "70%" }} />
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>



                                        </div>
                                    </div>

                                    <div class="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#eb99ff", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                        <div class="row">
                                            <ul>
                                                <li>Audio Equipment Competition</li>
                                            </ul>

                                            <div class="container-fluid">

                                                <div class="row">

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 my-2 align-self-center" >

                                                        <div className="d-flex justify-content-center">
                                                            <img src={IMG_2818} className="rounded" alt='' style={{ height: "70%", width: "70%" }} />
                                                        </div>

                                                    </div>

                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 my-2">

                                                        <div className="d-flex justify-content-center">
                                                            <img src={IMG_2819} className="rounded" alt='' style={{ height: "70%", width: "70%" }} />
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 "  >
                            <div className=" p-1 mt-3  rounded" style={{ backgroundColor: "#0066ff", color: "blue", fontSize: "16px", padding: "" }} >
                                <Footer />
                            </div>
                        </div>
                    </div>

                </div>

            </div >


        )
    }
}
