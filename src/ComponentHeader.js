import React, { Component } from 'react'
/*import Cookies from "universal-cookie";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const cookies = new Cookies(); */

export default class ComponentHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            UserLog: ""
        }
    }

/*     componentWillMount() {

        this.setState({
            UserLog: cookies.get('ComponentOverview'),
        })
    }

    componentDidMount() {

        setInterval(() => {
            this.setState({
                UserLog: cookies.get('ComponentOverview'),
            })
            if (this.state.UserLog === undefined || this.state.UserLog === "") {
                this.LogingUser();
            }
        }, 1000);

    }

    LogingUser = () => {

        cookies.remove("ComponentOverview", { path: '/ComponentOverview' });
        window.location.replace('/')

    }


    handleClick = () => {

        cookies.remove("ComponentOverview", { path: '/ComponentOverview' });

    } */

    render() {

        /*         const { UserLog } = this.state
        
                if (UserLog === undefined) {
        
                    window.location.replace('/')
        
                } */

        return (
            <div>

                <div className="container-fluid my-1">
                    <nav className="navbar navbar-expand-lg bg-primary navbar-primary rounded">

                        <div><h4>RESUME--->MR.TRAIRAT SUKPONG</h4></div>


                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span  className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto ">
                                {/* <li className="nav-item">
                                    <a onClick={this.handleClick} style={{ color: "black" }} className="nav-link" href="" >< FontAwesomeIcon icon="door-open" /> LOGOUT </a>
                                </li> */}

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
