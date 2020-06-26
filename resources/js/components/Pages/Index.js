import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        Axios.get("http://webapp.localhost/api/users").then(response => {
            this.setState({ users: response.data });
        });
    }

    userDelete(id) {
        Axios.delete("http://webapp.localhost/api/users/delete/" + id).then(
            response => {
                var result = this.state.users;
                for (var i = 0; i < result.length; i++) {
                    if (result[i].id == id) {
                        result.splice(i, 1);
                        this.setState({ result: result });
                    }
                }
            }
        );
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <strong> Laravel + React JS - CRUD &nbsp;</strong>
                            <Link className="btn btn-success btn-sm" to="/add">
                                {"+"} Add
                            </Link>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Level</th>
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                        <th>ACtion </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.users.map(u => {
                                        return (
                                            <tr>
                                                <td>{u.name}</td>
                                                <td>{u.email}</td>
                                                <td>
                                                    {u.level == 1
                                                        ? "Normal"
                                                        : "Administrator"}
                                                </td>
                                                <td>{u.created_at}</td>
                                                <td>{u.updated_at}</td>
                                                <td>
                                                    <div className="bd-example">
                                                        {u.level == 1 ? (
                                                            <a
                                                                type="button"
                                                                className="btn btn-primary btn-sm"
                                                                href="#"
                                                                onClick={this.userDelete.bind(
                                                                    this,
                                                                    u.id
                                                                )}
                                                            >
                                                                Delete
                                                            </a>
                                                        ) : (
                                                            <a
                                                                type="button"
                                                                className="btn btn-primary btn-sm disabled"
                                                                href="#"
                                                            >
                                                                Delete
                                                            </a>
                                                        )}
                                                        <Link
                                                            className="btn btn-secondary btn-sm"
                                                            to={`/edit/${u.id}`}
                                                        >
                                                            Edit
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
