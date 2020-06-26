import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Index";
import Edit from "./Pages/Edit";
import Add from "./Pages/Add";

export default class Index extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={Add} />
                <Route exact path="/edit/:id" component={Edit} />
            </Router>
        );
    }
}

if (document.getElementById("container")) {
    ReactDOM.render(<Index />, document.getElementById("container"));
}
