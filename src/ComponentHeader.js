import React, { Component } from 'react'
import Cookies from "universal-cookie";
import { Redirect, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const cookies = new Cookies();

export default class ComponentHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            UserLog: cookies.get('cookies')
        }
    }


    componentDidMount() {

        setInterval(() => {
            
            if (this.state.UserLog === undefined) {
                this.LogingUser();
                cookies.remove("cookies", { path: '/' });
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

        const { UserLog } = this.state

        if (UserLog === undefined) {

            return <Redirect to='/' />;

        }

        return (
            <div>

                <div className="container-fluid my-1">
                    <nav className="navbar navbar-expand-lg  bg-primary navbar-light rounded">

                        <div><h4>RESUME--->MR.TRAIRAT SUKPONG</h4></div>


                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto ">
                                 <li className="nav-item">
                                    <Link onClick={this.handleClick} style={{ color: "black" }} className="nav-link" >< FontAwesomeIcon icon="door-open" /> LOGOUT </Link>
                                </li>

                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#">SKILL</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">EXPERIENCE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">EDUCATION</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">PORTFOLIO</a>
                                </li> */}
                            </ul>
                        </div>
                    </nav>
                </div>


            </div>
        )
    }
}
