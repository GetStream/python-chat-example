import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: "",
      password: ""
    };

    this.initStream = this.initStream.bind(this);
  }

  async initStream() {
    await this.setState({
      loading: true
    });

    const base = "http://localhost:8000";

    const formData = new FormData();
    formData.set("username", this.state.email);
    formData.set("password", this.state.password);

    const registration = await axios({
      method: "POST",
      url: `${base}/auth/users/`,
      data: formData,
      config: {
        headers: { "Content-Type": "multipart/form-data" }
      }
    });

    const authorization = await axios({
      method: "POST",
      url: `${base}/auth/token/login/`,
      data: formData,
      config: {
        headers: { "Content-Type": "multipart/form-data" }
      }
    });

    localStorage.setItem("token", authorization.data.stream_token);

    await this.setState({
      loading: false
    });

    this.props.history.push("/");
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="login-root">
        <div className="login-card">
          <h4>Login</h4>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={e => this.handleChange(e)}
          />
          <button onClick={this.initStream}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Login;
