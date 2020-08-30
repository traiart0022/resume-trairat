import React, { Component } from 'react'

import IconKmutnb from "./IconKmutnb.png"
import IconCit from "./iconCit.gif"
import Kmutnb from "./Kmutnb.jpg"
import IconRjs from "./IconRjs.jpg"
import rjs from "./rjs.jpg"
import { Link } from 'react-router-dom'

var Overview_Container = {
    display: 'grid',
    gridTemplateColumns: 'auto',
}

export default class ComponentEDUCATION extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    componentDidMount() {

        this.Text()

    }


    Text() {
        setInterval(() => {

            if (window.screen.availWidth < 576) {
                this.setState({
                    TextRessolution1: "12px"
                })
            } else {
                this.setState({
                    TextRessolution1: "20px",
                })

            }

        }, 1000);
    }
    render() {
        const {TextRessolution1} = this.state
        return (

            <div className=" p-1 mt-3 rounded" style={{ backgroundColor: "#ffd84f", color: "", fontSize: "16px", padding: "" }} >
                <div className="container-fluid">
                    <h3><b >EDUCATION</b></h3>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 ">

                            <div className="container-fluid my-2 rounded" style={{ backgroundColor: "#f2f3af", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                <div className="container-fluid d-flex justify-content-center">

                                    <div className="font-weight-bold"style={{fontSize: TextRessolution1}}>
                                        <center >
                                            King Mongkut's University of Technology North Bangkok
                                            Bachelor of Electronics Engineering <Link to='/TS'>(Telecommunication GPA 2.9)</Link>
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
                  

                    
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 align-self-center">

                            <div className="container-fluid p-2 my-2 rounded" style={{ backgroundColor: "#f2f3af", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                <div className="container-fluid d-flex justify-content-center">

                                    <div className="font-weight-bold" style={{fontSize: TextRessolution1}}>
                                        <center>
                                            Rajasitaram Technical College
                                            Vocational Certificate Electronics Technology (GPA 3.79)
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
