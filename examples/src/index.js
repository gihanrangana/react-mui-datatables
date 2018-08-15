import React, { Component } from "react";
import { render } from "react-dom";
import MuiDataTable from "../../src";
import data from "./data";
import { AppBar, Button, Paper, Toolbar, SvgIcon, IconButton } from "@material-ui/core/es/index";
import { createGenerateClassName,createMuiTheme,MuiThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import "./styles.css";

import JssProvider from "react-jss/lib/JssProvider";

const generateClassName = createGenerateClassName({
    dangerouslyUseGlobalCSS: true,
    productionPrefix       : "c",
});

function GitHub(props) {
    return(
        <SvgIcon {...props}>
            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
        </SvgIcon>
    )
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        };
        
        App.handleClick = App.handleClick.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
    }
    
    componentWillMount() {
    
    }
    
    static handleClick(e) {
        /* Your code is here.alert is the example */
        alert("parent td#id: " + e.target.parentNode.id);
    }
    
    handleThemeChange() {
        const theme = this.state.theme;
        if (theme === "light") {
            this.setState({theme: "dark"})
        }else {
            this.setState({theme: "light"})
        }
    }
    
    render() {
        const theme = createMuiTheme({
            palette: {
                secondary: {
                    main: blue[700],
                },
                type     : this.state.theme,
            },
        });
        
        const columns = [
            {label: "First Name", key: "fname", sort: true},
            {label: "Last Name", key: "lname", sort: true},
            {label: "Email", key: "email"},
            {label: "Gender", key: "gender"},
            {label: "Action", key: "action"}, /* <-- this is required if you using customAction */
        ];
        /* <-- Table header columns. this is required */
        
        const action = <Button onClick={App.handleClick}>Action</Button>;
        /* <-- action button */
        
        const options = {
            hasIndex    : true, /* <-- use numbers for rows*/
            customAction: action, /* <-- use action button for row */
            searchBox   : true, /* <-- search true or false */
            csv         : true, /* <-- csv download true or false */
            indexColumn : "fname", /* <-- add your data first unique column name for this like _id, i used fname because i don't have a _id field in my array */
            darkTheme   : true,
            printButton: true
        };
        
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <Button color="secondary" variant={"raised"} onClick={this.handleThemeChange}>Change Theme
                            Light / Dark</Button>
                        
                        <div style={{flexGrow:1}}/>
                        
                        <IconButton style={{color:'#fff'}} component={'a'} href={'https://github.com/GihanRangana/react-mui-datatables'}>
                            <GitHub/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                
                <Paper style={{padding: 16, margin: 16}}>
                    <MuiDataTable data={data} columns={columns} options={options} title={"User Data"}/>
                </Paper>
                </MuiThemeProvider>
            </div>
        );
    }
    
}

render(
    <JssProvider generateClassName={generateClassName}>
        <App/>
    </JssProvider>, document.getElementById("root"));