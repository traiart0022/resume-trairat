import React, { Component } from 'react'
import Cookies from "universal-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {

} from '@fortawesome/free-solid-svg-icons'

library.add(fab,
)

const cookies = new Cookies();

export default class ComponentLogin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      UserName: "",
      Password: "",
      Cookies: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.state.Cookies !== "") {
      cookies.remove("ComponentOverview", { path: '/ComponentOverview' });
    }
    //console.log(this.state.Cookies)
  }

  componentWillMount() {
    this.setState({ Cookies: cookies.get('ComponentOverview') })
  }

  handleSubmit(e) {
    e.preventDefault();


    if ((this.state.UserName !== "") && (this.state.Password !== "")) {

      this.setState({ Cookies: cookies.get('ComponentOverview') })

      if ((this.state.UserName == "Trairat") && (this.state.Password == "password1234")) {

        cookies.set("ComponentOverview", this.state.UserName, { path: "/ComponentOverview" });
        window.location.replace("/ComponentOverview")

      } else {

        alert("Username or Password is Incorrect")
        this.setState({
          UserName: "",
          Password: ""
        })
        
      }

    } else {
      alert("Incomplete information.")
    }

  }

  render() {
    return (
      <div>
        <div class="container-fluid mt-5">
          <div class="row d-flex justify-content-center">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 " >

              <div class="container-fluid rounded " style={{ backgroundColor: "#66ff99" }}>
                <form onSubmit={this.handleSubmit}>
                  <div class="form-group ">
                    <label>User Name</label>
                    <div class="">
                      <input
                        onChange={(e) => {
                          this.setState({ UserName: e.target.value })
                        }}
                        value={this.state.UserName}
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="UserName"
                      />

                    </div>
                  </div>

                  <div class="form-group">
                    <label>Password</label>
                    <div class="">
                      <input
                        onChange={(e) => {
                          this.setState({ Password: e.target.value })
                        }}
                        value={this.state.Password}
                        type="Password"
                        class="form-control"
                        id=""
                        placeholder="Password"
                      />

                    </div>
                  </div>

                  <button type="submit" class="my-5 btn-lg btn-primary" style={{ height: "100%", width: "100%" }}>
                    <div>LOGIN</div>
                  </button>
                </form>
              </div>

            </div>

          </div>
        </div>
      </div >
    )
  }
}
