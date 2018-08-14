import React, { Component } from "react";
import { render } from "react-dom";
import MuiDataTable from "../../lib";
import data from "./data";
import { Button, Paper } from "@material-ui/core/es/index";

import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    dangerouslyUseGlobalCSS: true,
    productionPrefix: 'c',
});

class App extends Component {
    constructor(props) {
        super(props);

        App.handleClick = App.handleClick.bind(this);
    }

    componentWillMount() {

    }

    static handleClick(e) {
        /* Your code is here.alert is the example */
        alert("parent td#id: " + e.target.parentNode.id);
    }

    render() {
        const columns = [
            { label: "First Name", key: "fname", sort: true },
            { label: "Last Name", key: "lname", sort: true },
            { label: "Email", key: "email" },
            { label: "Gender", key: "gender" },
            { label: "Action", key: "action" }, /* <-- this is required if you using customAction */
        ]; /* <-- Table header columns. this is required */

        const action = <Button onClick={App.handleClick}>Action</Button>; /* <-- action button */

        const options = {
            hasIndex: true, /* <-- use numbers for rows*/
            customAction: action, /* <-- use action button for row */
            searchBox: true, /* <-- search true or false */
            csv: true, /* <-- csv download true or false */
            indexColumn: "fname" /* <-- add your data first unique column name for this like _id, i used fname because i don't have a _id field in my array */
        };

        return (
            <div>
                <Paper style={{ padding: 16, margin: 16 }}>
                    <MuiDataTable data={data} columns={columns} options={options} title={"User Data"} />
                </Paper>
            </div>
        );
    }

}

render(
    <JssProvider generateClassName={generateClassName}>
        <App />
    </JssProvider>, document.getElementById("root"));