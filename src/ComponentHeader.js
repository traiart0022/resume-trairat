import React, { Component } from 'react'
import Cookies from "universal-cookie";
import { Redirect, Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Pdf from './Content/Presentation4.pdf'
const cookies = new Cookies();

export default class ComponentHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            UserLog: cookies.get('cookies')
        }
    }

    componentWillMount() {

        this.LogingUser();

        setTimeout(() => {
            if (this.state.UserLog === null) {
                this.setState({
                    redirect: false

                })
            }
        }, 1500);
    }


    componentDidMount() {

        this.LogingUser();

        setInterval(() => {

            if (this.state.UserLog === "") {

                cookies.remove("cookies", { path: '/' });
                this.LogingUser();
            }
        }, 3000);

    }

    LogingUser = () => {

        this.setState({
            UserLog: cookies.get('cookies'),
        })

    }


    handleClick = () => {


        cookies.remove("cookies", { path: '/' });
        this.LogingUser();

    }

    render() {

        const { UserLog, redirect } = this.state

        // console.log(UserLog)

        if (redirect === false || UserLog === undefined ) {
            return <Redirect to='/' />;
        }


        return (


           
                <nav className="navbar navbar-expand-lg navbar-light rounded" style={{ backgroundColor: "#50a0c3" }}>

                    <div><b>RESUME--</b></div>
                    <div><b>MR.TRAIRAT SUKPONG</b></div>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto ">

                            {/*                                  
                                <li className="nav-item">
                                    <Link to='/INTRODUSEMYSELF' style={{ color: "black" }} className="nav-link" >< FontAwesomeIcon icon="door-open" /> INTRODUSE MYSELF </Link>
                                </li>*/}

                            <li className="nav-item">
                                <Link to='/ComponentOverview' style={{ color: "black" }} className="nav-link" >
                                    <button className="btn-success btn-sm">
                                        {/* < FontAwesomeIcon icon="tachometer-alt" /> */}
                                            INTRODUSEMYSELF
                                        </button>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/SKILL' style={{ color: "black" }} className="nav-link" >
                                    <button className="btn-success btn-sm">
                                        {/* < FontAwesomeIcon icon="file-word" /> */}
                                            SKILL
                                         </button>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/EXPERIENCE' style={{ color: "black" }} className="nav-link" >
                                    <button className="btn-success btn-sm">
                                        {/* < FontAwesomeIcon icon="graduation-cap" /> */}
                                            EXPERIENCE
                                    </button>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/PORTFOLIO' style={{ color: "black" }} className="nav-link" >
                                    <button className="btn-success btn-sm">
                                        {/* < FontAwesomeIcon icon="tachometer-alt" /> */}
                                             PORTFOLIO
                                        </button>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/Doc' style={{ color: "black" }} className="nav-link" >
                                    <button className="btn-success btn-sm">
                                        {/* < FontAwesomeIcon icon="file-word" /> */}
                                            PROJECT DOCUMENT
                                        </button>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/ts' style={{ color: "black" }} className="nav-link" >
                                    <button className="btn-success btn-sm">
                                        {/* < FontAwesomeIcon icon="graduation-cap" /> */}
                                            TRANSCRIPT
                                        </button>
                                </Link>
                            </li>

                            {/* <li className="nav-item">
                                    <Link to={Pdf}  target="_blank" download style={{ color: "black" }} className="nav-link" >< FontAwesomeIcon icon="file-pdf" /> DOWNLOAD RESUME PDF TYPE</Link>   
                                                               
                                </li>  */}

                            <li className="nav-item">
                                <Link onClick={this.handleClick} style={{ color: "black" }} className="nav-link" >
                                    <button className="btn-success btn-sm">
                                        {/* < FontAwesomeIcon icon="door-open" /> */}
                                             LOGOUT
                                        </button>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </nav>
        )
    }
}
