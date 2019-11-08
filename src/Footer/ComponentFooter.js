import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* import { Link } from 'react-router-dom' */

export default class ComponentFooter extends Component {
    render() {
        return (
            <div className=" p-1 mt-3  rounded" style={{ backgroundColor: "#0066ff", color: "", fontSize: "16px", padding: "" }}>
                <div className="container-fluid">
                    <div className="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#80b3ff", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                        <div className="row">

                            <div className="container-fluid">
                                <div className="">
                                    <h4><b>CONTACT</b></h4>
                                </div>
                                <div className="row">

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 my-2 ">

                                        <div className="d-flex justify-content-center">
                                            <FontAwesomeIcon className="" icon="mobile" style={{ height: "60px", width: "60px", color: "blue" }} />

                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <h5>PHONE: <b style={{ color: "#e65c00", fontSize: "", }}>086-549-2804</b></h5>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 my-2 align-self-center">

                                        <div className="d-flex justify-content-center ">
                                            <FontAwesomeIcon className="" icon="users" style={{ height: "60px", width: "60px", color: "blue" }} />



                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <h5 className="faa-bounce animated">FB: <a href='https://www.facebook.com/Trairat.Sukpong' target="blank"><b style={{ color: "#e65c00", fontSize: "", }}>Trairat.Sukpong</b></a></h5>

                                        </div>

                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 my-2">

                                        <div className="d-flex justify-content-center">

                                            <FontAwesomeIcon className="" icon="comments" style={{ height: "60px", width: "60px", color: "blue" }} />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <h5>LINE ID: <b style={{ color: "#e65c00", fontSize: "", }}>0897927930</b></h5>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 my-2">

                                        <div className="d-flex justify-content-center">

                                            <FontAwesomeIcon className="" icon="envelope" style={{ height: "60px", width: "60px", color: "blue" }} />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <h5>MAIL: <b style={{ color: "#e65c00", fontSize: "", }}>Trairat0022@gmail.com</b></h5>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
