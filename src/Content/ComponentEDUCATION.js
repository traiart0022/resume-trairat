import React, { Component } from 'react'

import IconKmutnb from "./IconKmutnb.png"
import IconCit from "./iconCit.gif"
import Kmutnb from "./Kmutnb.jpg"
import IconRjs from "./IconRjs.jpg"
import rjs from "./rjs.jpg"


var Overview_Container = {
    display: 'grid',
    gridTemplateColumns: 'auto',
}

export default class ComponentEDUCATION extends Component {
    render() {
        return (

            <div className=" p-1 mt-3 rounded" style={{ backgroundColor: "#ffb84d", color: "", fontSize: "16px", padding: "" }} >
                <div className="container-fluid">
                    <h3><b>EDUCATION</b></h3>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">

                            <div className="container-fluid p-5 my-2 rounded" style={{ backgroundColor: "#ffbf80", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                <div className="container-fluid d-flex justify-content-center">

                                    <div className="">
                                        <center>
                                            <h4>King Mongkut's University of Technology North Bangkok </h4>
                                            <h5>Bachelor of Electronics Engineering (Telecommunication GPA 2.9)</h5>
                                        </center>
                                    </div>


                                </div>
                                <div className="container-fluid ">

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center rounded my-1" style={Overview_Container} >

                                            <div style={{}}>
                                                <img src={IconKmutnb} className="rounded" alt='' style={{ height: "180px", width: "auto" }} />
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center rounded my-1" style={Overview_Container}>

                                            <div className="rounded align-self-center" style={{}}>
                                                <img src={Kmutnb} className="rounded align-self-center" alt='' style={{ height: "140px", width: "auto" }} />
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center rounded my-1" style={Overview_Container}>

                                            <div style={{}}>
                                                <img src={IconCit} className="rounded" alt='' style={{ height: "180px", width: "auto" }} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">

                            <div className="container-fluid p-5 my-2 rounded" style={{ backgroundColor: "#ffbf80", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                <div className="container-fluid d-flex justify-content-center">

                                    <div className="">
                                        <center>
                                            <h4>Rajasitaram Technical College</h4>
                                            <h5>Vocational Certificate Electronics Technology (GPA 3.79)</h5>
                                        </center>
                                    </div>
                                </div>

                                <div className="container-fluid ">

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center my-1" style={Overview_Container}>
                                            <div>
                                                <img src={IconRjs} className="rounded" alt='' style={{ height: "180px", width: "auto" }} />
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center my-1" style={Overview_Container}>
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

        )
    }
}
