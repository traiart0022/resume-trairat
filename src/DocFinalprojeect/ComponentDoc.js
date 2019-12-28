import React, { Component } from 'react'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'
import Pdf from './Finalproject.pdf'
import Header from "../ComponentHeader"
import Footer from "../Footer/ComponentFooter"
export default class ComponentDoc extends Component {

constructor(props) {
    super(props)

    this.state = {
        Ressolution:"",
        TextRessolution:""

    }
}


    componentDidMount(){
        setInterval(() => {

            if ( window.screen.availWidth < 576) {
                this.setState({
                    Ressolution:"none",
                    TextRessolution:"View Document"
                })

            }else{
                this.setState({
                    Ressolution:"initial",
                    TextRessolution:"Download"
                })

            }

        }, 1000);
    }
    render() {
       

        return (
            <div>
                <Header />
                <div class="container mb-3">
                    <div className="d-flex justify-content-center mb-2">
                        <Link to={Pdf} target="_blank" download><button  className="btn btn-success" >{this.state.TextRessolution}</button></Link>
                    </div>
                    <Iframe src={Pdf} width="100%" height="800px" display={this.state.Ressolution} scrolling="yes"></Iframe>
                    <div className="d-flex justify-content-center mt-3">
                        <Link to={'/ComponentOverview'}><button className="btn btn-success" > <b>BACK</b>  </button></Link>
                    </div>
                </div>
                <div class="container-fluid">

                    <div class="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 "  >

                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
