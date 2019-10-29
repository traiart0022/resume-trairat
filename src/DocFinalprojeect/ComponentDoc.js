import React, { Component } from 'react'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'
import Pdf from './Finalproject.pdf'
import Header from "../ComponentHeader"
import Footer from "../Footer/ComponentFooter"
export default class ComponentDoc extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="container mb-3">
                    <div className="d-flex justify-content-center">
                        <Link to={Pdf} target="_blank" download><button className="btn btn-success" >Download</button></Link>
                    </div>
                    <Iframe src={Pdf} width="100%" height="800px" display="initial" scrolling="yes"></Iframe>
                    <div className="d-flex justify-content-center">
                        <Link to={'/'}><button className="btn btn-success" > <b>BACK</b>  </button></Link>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 "  >
                            <div className=" p-1 mt-3  rounded" style={{ backgroundColor: "#0066ff", color: "blue", fontSize: "16px", padding: "" }} >
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
