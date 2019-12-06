import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* import { Link } from 'react-router-dom' */

export default class ComponentFooter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Ressolution: "",
            TextRessolution1: "",
            TextRessolution2: ""

        }
    }


    componentDidMount() {
        setInterval(() => {

            if (window.screen.availWidth < 576) {
                this.setState({
                    TextRessolution1: "13px",
                    TextRessolution2: "16px"
                })

            } else {
                this.setState({
                    TextRessolution1: "18px",
                    TextRessolution2: "20px"
                })

            }

        }, 1000);
    }
    render() {

        const { TextRessolution1, TextRessolution2 } = this.state

        var sizeText1 = {
            color: "#e65c00",
            fontSize: TextRessolution1
        }

        var sizeText2 = {
            fontSize: TextRessolution2
        }

        return (
            <div className=" p-1 mt-3  rounded" style={{ backgroundColor: "#0066ff", color: "", fontSize: "16px", padding: "" }}>
                <div className="container-fluid">
                    <h4><b>CONTACT</b></h4>
                    <div className="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#80b3ff", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                        <div className="row">

                            <div className="container-fluid">
                                
                                <div className="row">

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 my-2 ">

                                        <div className="d-flex justify-content-center">
                                            <FontAwesomeIcon className="" icon="mobile" style={{ height: "60px", width: "60px", color: "blue" }} />

                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div><b style={sizeText2}>PHONE: </b><b style={sizeText1}>086-549-2804</b></div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 my-2 align-self-center">

                                        <div className="d-flex justify-content-center ">
                                            <FontAwesomeIcon className="" icon="users" style={{ height: "60px", width: "60px", color: "blue" }} />



                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div style={sizeText2} className="faa-bounce animated"><b>FB: </b><a href='https://www.facebook.com/Trairat.Sukpong' target="blank"><b style={sizeText1}>Trairat.Sukpong</b></a></div>

                                        </div>

                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 my-2">

                                        <div className="d-flex justify-content-center">

                                            <FontAwesomeIcon className="" icon="comments" style={{ height: "60px", width: "60px", color: "blue" }} />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div><b style={sizeText2}>LINE ID: </b><b style={sizeText1}>0897927930</b></div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 my-2">

                                        <div className="d-flex justify-content-center">

                                            <FontAwesomeIcon className="" icon="envelope" style={{ height: "60px", width: "60px", color: "blue" }} />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div><b style={sizeText2}>MAIL: </b><b style={sizeText1}>Trairat0022@gmail.com</b></div>
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
