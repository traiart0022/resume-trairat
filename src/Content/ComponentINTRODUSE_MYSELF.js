import React, { Component } from 'react'

import img1 from "./S.Trairat1.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var Overview_responsive = {
    width: '80%',
    height: '80%',
    boxShadow: "10px 10px 5px grey"
}

var Overview_div = {
    textAlign: 'center'
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
        }
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


    }
    render() {

        const { animetion1, animetion2, animetion3, animetion4, animetion5,/*  animetionSkill */ } = this.state

        return (
            <div className="container-fluid mt-2">
                        <div className="row rounded p-2" style={{ backgroundColor: "#53c653", color: "", fontSize: "18px", }}>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 p-2" style={Overview_div}>

                                <div className="container-fluid rounded p-5 my-2" style={{ backgroundColor: "#8cd98c", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                    <h3><b>INTRODUSE MYSELF</b></h3>
                                    <div>
                                        <img src={img1} className="rounded" alt='' style={Overview_responsive} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 align-self-center">
                                <div className="container-fluid rounded p-5 my-2" style={{ backgroundColor: "#8cd98c", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                    <ul>

                                        <li>

                                            <h6 className="" style={{ color: "", fontSize: "18px", }}>
                                                Name:
                                                </h6>
                                            <h6 className="" style={{ color: "#e65c00", fontSize: "18px", }}>
                                                Mr.Trirat Sukphong
                                                </h6>
                                        </li>

                                        <li>

                                            <h6 className="" style={{ color: "", fontSize: "18px", }}>
                                                Nickname:
                                            </h6 >

                                            <h6 className="" style={{ color: "#e65c00", fontSize: "18px", }}>
                                                Duck
                                                </h6>

                                        </li>

                                        <li>

                                            <h6 className="" style={{ color: "", fontSize: "18px", }}>
                                                Date of Birth:
                                            </h6>

                                            <h6 className="" style={{ color: "#e65c00", fontSize: "18px", }}>
                                                19 March 1997
                                                </h6>

                                        </li>

                                        <li>

                                            <h6 className="" style={{ color: "", fontSize: "18px", }}>
                                                Marital status:
                                                </h6>

                                            <h6 className="" style={{ color: "#e65c00", fontSize: "18px", }}>
                                                Single
                                                </h6>
                                        </li>

                                        <li>

                                            <h6 className="" style={{ color: "", fontSize: "18px", }}>
                                                Address:
                                            </h6>
                                            <h6 style={{ color: "#e65c00", fontSize: "18px", }}>
                                                8 Soi-Wutthakat 42, Wutthakat Road- Bang Kho Subdistrict - Chom Thong DistrictBangkok 10150
                                            </h6>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 align-self-center">
                                <div className="container-fluid rounded p-5 my-2" style={{ backgroundColor: "#8cd98c", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                                    <ul>
                                        <li>

                                            <h6 className="" style={{ color: "", fontSize: "18px", }}>
                                                Nationality:
                                            </h6>

                                            <h6 className="" style={{ color: "#e65c00", fontSize: "18px", }}>
                                                Thai
                                            </h6>

                                        </li>
                                        <li>


                                            <h6 className="" style={{ color: "", fontSize: "18px", }}>
                                                weight:
                                            </h6>

                                            <h6 className="" style={{ color: "#e65c00", fontSize: "18px", }}>
                                                47 kg
                                            </h6>

                                        </li>

                                        <li>

                                            <h6 className="" style={{ color: "", fontSize: "18px", }}>
                                                height:
                                            </h6>

                                            <h6 className="" style={{ color: "#e65c00", fontSize: "18px", }}>
                                                166 cm
                                             </h6>



                                        </li>

                                        <li>


                                            <h6 className="" style={{ color: "#e65c00", fontSize: "18px", }}>
                                                No military obligations
                                             </h6>



                                        </li>
                                        <li>Hobby: </li>

                                        <h6 className="" style={{ color: "#e65c00", fontSize: "18px", }}>
                                            Play Mobile Games(ROV) <FontAwesomeIcon icon="star" className={animetion1} style={{ color: "#e65c00" }} />
                                            <FontAwesomeIcon className={animetion2} icon="star" style={{ color: "#e65c00" }} />
                                            <FontAwesomeIcon className={animetion3} icon="star" style={{ color: "#e65c00" }} />
                                            <FontAwesomeIcon className={animetion4} icon="star" style={{ color: "#e65c00" }} />
                                            <FontAwesomeIcon className={animetion5} icon="star" style={{ color: "#e65c00" }} />
                                        </h6>



                                        <h6 className="" style={{ color: "#e65c00", fontSize: "18px", }}>
                                            Play Football<FontAwesomeIcon icon="star" className={animetion1} style={{ color: "#e65c00" }} />
                                            <FontAwesomeIcon className={animetion2} icon="star" style={{ color: "#e65c00" }} />
                                            <FontAwesomeIcon className={animetion3} icon="star" style={{ color: "#e65c00" }} />
                                            <FontAwesomeIcon className={animetion4} icon="star" style={{ color: "#e65c00" }} />
                                            <FontAwesomeIcon className={animetion5} icon="star" style={{ color: "#e65c00" }} />
                                        </h6>



                                    </ul>

                                    <div className=" d-flex justify-content-center">
                                        <FontAwesomeIcon className="mr-auto faa-tada animated-hover faa-fast" icon="gamepad" style={{ height: "60px", width: "60px", color: "" }} />
                                        <FontAwesomeIcon className="mr-auto faa-tada animated-hover faa-fast" icon="futbol" style={{ height: "60px", width: "60px", color: "" }} />
                                        <FontAwesomeIcon className="mr-auto faa-tada animated-hover faa-fast" icon="table-tennis" style={{ height: "60px", width: "60px", color: "" }} />
                                        <FontAwesomeIcon className="faa-tada animated-hover faa-fast" icon="glass-cheers" style={{ height: "60px", width: "60px", color: "" }} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
        )
    }
}
