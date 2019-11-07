import React, { Component } from 'react'

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


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


var Overview_responsive_img = {
    width: '100%',
    height: '100%'
}
export default class ComponentEXPERIENCE extends Component {
    render() {
        return (
            <div className=" p-1 mt-3 rounded" style={{ backgroundColor: "#6699ff", color: "", fontSize: "16px", paddingtop: "10px" }} >
                <div className="container-fluid">

                    <h3><b>EXPERIENCE</b></h3>

                    <div class="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#b3ccff", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                        <div class="row">
                            <ul >
                                <li>Full time job at INSPIRE TECH CO.,LTD  (JULY 2019 – Present)</li>
                                <ul >

                                    <li style={{ color: "#e65c00", fontSize: "", }}>Create Web Monitoring  PV & CHARGING STATION with Reactjs Node-red Nodejs Express And Mysql.</li>

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
                                        <button class="btn btn-warning " >
                                            <a href="http://eve.ke.in.th/" target="blank">
                                                <h4>
                                                    <FontAwesomeIcon className="faa-spin animated" icon="sun" style={{ height: "30px", width: "30px", color: "" }} />
                                                    &nbsp;
                                                        link to eve.ke.in.th
                                                    &nbsp;
                                                    <FontAwesomeIcon className="faa-spin animated" icon="sun" style={{ height: "30px", width: "30px", color: "" }} />
                                                </h4>
                                            </a>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#b3ccff", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                        <div class="row">
                            <ul >
                                <li>Co-Operative at INSPIRE TECH CO.,LTD  (AUG 2018 – NOV 2018)</li>
                                <ul >

                                    <li style={{ color: "#e65c00", fontSize: "", }}>Learned about machine control systems and  wrote more programs about vb.net and SQL languages.</li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}>Designed SCADA for checking about operation of machine.</li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}>Create Monitoring Substation system & Waste-Heat-Recovery system with Wonderware indusoft web studio.</li>

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

                    <div class="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#b3ccff", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                        <div class="row">
                            <ul >
                                <li>Co-Operative at TOT Public Company Limited (MAY 2014 - AUG 2014)</li>
                                <ul >
                                    <li style={{ color: "#e65c00", fontSize: "", }}>Connected the communication line at the source.</li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}>Foundgood quality communication lines for use.</li>
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

                    <div class="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#b3ccff", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                        <div class="row">
                            <ul >
                                <li>Past time job at KFC Sena-fest (JAN 2015 - JUNE 2019)</li>
                                <ul >
                                    <li style={{ color: "#e65c00", fontSize: "", }}>Service work in KFC shop.</li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}>Home delivery service.</li>
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
        )
    }
}
