import React, { Component } from 'react'
import Modal from 'react-awesome-modal';
import img1 from "./S.Trairat1.jpeg"
// import gif1 from "./1.gif"
import { Link } from 'react-router-dom'
import Pdf from './Doc1.pdf'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var actionUp = {
    width: '80%',
    height: '100%',
    boxShadow: "10px 10px 5px grey"
}

var actionDown = {
    width: '80%',
    height: '100%'
}

export default class ComponentINTRODUSE_MYSELF extends Component {
    constructor(props) {
        super(props)

        this.state = {
            animetion1: "",
            animetion2: "",
            animetion3: "",
            animetion4: "",
            animetion5: "",
            animetionSkill: "faa-wrench animated",
            TextRessolution1: "",
            visible: false,
            visibleG: false,
            Overview_responsive_gif: actionDown,
            Overview_responsive: actionDown
        }
    }

    state = {
        hidden: false
    }

    componentDidMount() {

        setInterval(() => {

            setTimeout(() => {
                this.setState({
                    animetion1: "faa-bounce animated"
                })
            }, 100);
            setTimeout(() => {
                this.setState({
                    animetion2: "faa-bounce animated"
                })
            }, 200);
            setTimeout(() => {
                this.setState({
                    animetion3: "faa-bounce animated"
                })
            }, 300);
            setTimeout(() => {
                this.setState({
                    animetion4: "faa-bounce animated"
                })
            }, 400);
            setTimeout(() => {
                this.setState({
                    animetion5: "faa-bounce animated"
                })
            }, 500);

        }, 500);

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
                    TextRessolution1: "16px",
                })

            }

        }, 1000);
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    openModalG() {
        this.setState({
            visibleG: true
        });
    }

    closeModalG() {
        this.setState({
            visibleG: false
        });
    }

    MoveUp(key) {

        switch (key) {

            case 1:
                this.setState({
                    Overview_responsive: actionUp
                })
                break;

            case 2:
                this.setState({
                    Overview_responsive_gif: actionUp
                })
                break;

            default:
                break;
        }
    }

    MoveDown(key) {

        switch (key) {

            case 1:
                this.setState({
                    Overview_responsive: actionDown
                })
                break;

            case 2:
                this.setState({
                    Overview_responsive_gif: actionDown
                })
                break;

            default:
                break;
        }

    }

    render() {

        const { animetion1, animetion2, animetion3, animetion4, animetion5, TextRessolution1/*  animetionSkill */ } = this.state

        // var sizeText2 = {
        //     fontSize: TextRessolution1,
        //     color: "#232941"
        // }

        return (

            <div className=" mt-3 rounded" style={{ backgroundColor: "#499360", color: "", fontSize: TextRessolution1, padding: "" }} >
                <div className="container-fluid">
                    <h3><b >INTRODUSE MYSELF</b></h3 >

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">

                            <div className="container-fluid my-2  rounded" style={{ backgroundColor: "#97baa4", borderStyle: "solid ", borderColor: "#Back", borderWidth: "3px" }}>

                                <div className="container-fluid ">

                                    <div className="row">

                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 d-flex justify-content-center rounded my-2"  >

                                            <button className="btn btn-link">
                                                <img
                                                    src={img1} 
                                                    className="rounded faa-float animated-hover faa-fast"
                                                    onMouseOut={() => this.MoveDown(1)}
                                                    onMouseMove={() => this.MoveUp(1)}
                                                    onClick={() => this.openModal()}
                                                    alt=''
                                                    style={this.state.Overview_responsive}
                                                />
                                            </button>
                                            <Modal
                                                visible={this.state.visible}
                                                width="50%"
                                                // height="40%"
                                                effect="fadeInUp"
                                                onClickAway={() => this.closeModal()}

                                            >
                                                <div>

                                                    <img src={img1} className="rounded" alt="" style={{ width: "100%", height: "100%" }} />

                                                    {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                </div>
                                            </Modal>



                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 align-self-center" >


                                            <div className="" style={{ color: "#232941", fontSize: TextRessolution1, }}>
                                                <b>Name: </b><b style={{ color: "#295651", fontSize: TextRessolution1, }}>Mr.Trairat Sukpong</b>
                                            </div> <br />


                                            <div className="" style={{ color: "#232941", fontSize: TextRessolution1, }}>
                                                <b>Nickname:</b> <b style={{ color: "#295651", fontSize: TextRessolution1, }}>Duck</b>
                                            </div ><br />
                                            <div className="" style={{ color: "#232941", fontSize: TextRessolution1, }}>
                                                <b>Date of Birth:</b><b style={{ color: "#295651", fontSize: TextRessolution1, }}>19 March 1997</b>
                                            </div><br />

                                            <div className="" style={{ color: "#232941", fontSize: TextRessolution1, }}>
                                                <b>Marital status:</b><b style={{ color: "#295651", fontSize: TextRessolution1, }}>Single</b>
                                            </div><br />

                                            <div className="" style={{ color: "#232941", fontSize: TextRessolution1, }}>
                                                <b>Address:</b><b style={{ color: "#295651", fontSize: TextRessolution1, }}>8 Soi-Wutthakat 42, Wutthakat Road- Bang Kho Subdistrict - Chom Thong DistrictBangkok 10150</b>
                                            </div><br />


                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4  align-self-center" >


                                            <div className="" style={{ color: "#232941", fontSize: TextRessolution1, }}>
                                                <b>Nationality: </b><b style={{ color: "#295651", fontSize: TextRessolution1, }}>Thai</b>
                                            </div><br />


                                            <div className="" style={{ color: "#232941", fontSize: TextRessolution1, }}>
                                                <b> weight</b>: <b style={{ color: "#295651", fontSize: TextRessolution1, }}>47 kg</b>
                                            </div><br />



                                            <div className="" style={{ color: "#232941", fontSize: TextRessolution1, }}>
                                                <b>height:</b>  <b style={{ color: "#295651", fontSize: TextRessolution1, }}>166 cm</b>
                                            </div><br />

                                            <div className="" style={{ color: "#232941", fontSize: TextRessolution1, }}>
                                                <b>Military Status: </b><b style={{ color: "#295651", fontSize: TextRessolution1, }}>Exempted </b>
                                            </div><br />

                                            <div className="" style={{ color: "#232941", fontSize: TextRessolution1, }}>
                                                <b> Hobby:</b>
                                            </div>

                                            <div className="" style={{ color: "#295651", fontSize: TextRessolution1, }}>
                                                <b>Play Mobile Games(ROV)</b> <FontAwesomeIcon icon="star" className={animetion1} style={{ color: "#295651" }} />
                                                <FontAwesomeIcon className={animetion2} icon="star" style={{ color: "#295651" }} />
                                                <FontAwesomeIcon className={animetion3} icon="star" style={{ color: "#295651" }} />
                                                <FontAwesomeIcon className={animetion4} icon="star" style={{ color: "#295651" }} />
                                                <FontAwesomeIcon className={animetion5} icon="star" style={{ color: "#295651" }} />
                                            </div>



                                            <div className="" style={{ color: "#295651", fontSize: TextRessolution1, }}>
                                                <b>Play Football</b><FontAwesomeIcon icon="star" className={animetion1} style={{ color: "#295651" }} />
                                                <FontAwesomeIcon className={animetion2} icon="star" style={{ color: "#295651" }} />
                                                <FontAwesomeIcon className={animetion3} icon="star" style={{ color: "#295651" }} />
                                                <FontAwesomeIcon className={animetion4} icon="star" style={{ color: "#295651" }} />
                                                <FontAwesomeIcon className={animetion5} icon="star" style={{ color: "#295651" }} />
                                            </div>





                                            <div className=" d-flex justify-content-center">
                                                <FontAwesomeIcon className="mr-auto faa-tada animated-hover faa-fast" icon="gamepad" style={{ height: "60px", width: "60px", color: "" }} />
                                                <FontAwesomeIcon className="mr-auto faa-tada animated-hover faa-fast" icon="futbol" style={{ height: "60px", width: "60px", color: "" }} />
                                                <FontAwesomeIcon className="mr-auto faa-tada animated-hover faa-fast" icon="table-tennis" style={{ height: "60px", width: "60px", color: "" }} />                                 <FontAwesomeIcon className="faa-tada animated-hover faa-fast" icon="glass-cheers" style={{ height: "60px", width: "60px", color: "" }} />
                                            </div>

                                            <div className="d-flex justify-content-center my-2">
                                                <Link to={Pdf} target="_blank" download>
                                                    <button className="btn-lg  btn-primary" style={{ fontSize: TextRessolution1 }}>
                                                        DOWNLOAD RESUME PDF TYPE
                                                        </button>
                                                </Link>
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
