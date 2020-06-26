import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class Add extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            name: "",
            email: "",
            pwd: "",
            level: 0
        };
        this.onChange = this.onChange.bind(this);
        this.onAddSubmit = this.onAddSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onAddSubmit(e) {
        e.preventDefault();
        const { name, email, pwd, level } = this.state;
        Axios.post("http://webapp.localhost/api/users/store", {
            name,
            email,
            pwd,
            level
        }).then(response => {
            alert(response.data);
            window.location.reload();
        });
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h1>
                                Add Users{" "}
                                <Link className="btn btn-primary btn-sm" to="/">
                                    {"<"} Back
                                </Link>
                            </h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.onAddSubmit}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span
                                            className="input-group-text"
                                            id="inputGroup-sizing-default"
                                        >
                                            Name
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-label="Name"
                                        aria-describedby="inputGroup-sizing-default"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span
                                            className="input-group-text"
                                            id="inputGroup-sizing-default"
                                        >
                                            Email
                                        </span>
                                    </div>
                                    <input
                                        type="email"
                                        className="form-control"
                                        aria-label="email"
                                        aria-describedby="inputGroup-sizing-default"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span
                                            className="input-group-text"
                                            id="inputGroup-sizing-default"
                                        >
                                            Password
                                        </span>
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control"
                                        aria-label="email"
                                        aria-describedby="inputGroup-sizing-default"
                                        name="pwd"
                                        placeholder="************"
                                        value={this.state.pwd}
                                        onChange={this.onChange}
                                        minLength="7"
                                        required
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label
                                            className="input-group-text"
                                            htmlFor="inputGroupSelect01"
                                        >
                                            Level
                                        </label>
                                    </div>
                                    <select
                                        className="custom-select"
                                        id="inputGroupSelect01"
                                        name="level"
                                        defaultValue={this.state.level}
                                        onChange={this.onChange}
                                    >
                                        <option value="0">
                                            {" "}
                                            Administrator{" "}
                                        </option>
                                        <option value="1"> Normal </option>
                                    </select>
                                </div>
                                <div className="bd-example">
                                    <button
                                        type="submit"
                                        className="btn btn-success btn-lg btn-block"
                                    >
                                        Add User
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
