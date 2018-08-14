# Material UI DataTables for react MaterialUI ^v1 - react-mui-datatables

[![npm version](https://badge.fury.io/js/react-mui-datatables.svg)](https://badge.fury.io/js/react-mui-datatables)

react-mui-datatables is table component for [Material-UI V1](https://www.material-ui.com). This vetsion comes with search,export csv,sort,paginations. more options coming soon.stay with us...


## Install

`npm install react-mui-datatables --save`

## Demo

[![Edit 0qx6yljwlv](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/0qx6yljwlv)

## Usage

For a simple table:

```js

import MuiDataTable from "react-mui-datatables";
import data from "./data";


class App extends Component {
    constructor(props) {
        super(props);

        App.handleClick = App.handleClick.bind(this);
    }

    componentWillMount() {

    }

    /*
    * This function for handle your action button click event 
    * if you add action button you can get your own key from array using below command
    * please add indexColumn key to options object.
    */
    static handleClick(e) {
        /* Your code is here.alert is the example */
        alert("parent td#id: " + e.target.parentNode.id);
    }

    render() {
        const columns = [
            { 
                label: "First Name", 
                key: "fname", /* this value is the your array object key.if you did't add this table is not working */
                sort: true  /* you can set column sort true / false as your own */
            },
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
                <MuiDataTable data={data} columns={columns} options={options} title={"User Data"} />
            </div>
        );
    }

}
```

## API


#### &lt;MuiDataTable />

This component accepts the following props:

|Name|Type|Description
|:--:|:-----|:-----|
|**`title`**|array|Title used to caption table
|**`columns`**|array|Columns use to describe the table.this display on the table head cells.This is required
|**`data`**|array|Data is your data array.This is required
|**`options`**|object|Options use to customize your table

Options:
Use these as option object key.

|Name|Type|Default|Description
|:--:|:-----|:--|:-----|
|**`hasIndex`**|bool|false|This is use for create column with your index for adding numbers for rows first column
|**`customAction`**|string||You can add custom action button if you want.please add this as a component
|**`searchBox`**|bool|true|You can remove search box using this option
|**`csv`**|bool|true|You can remove csv download using this option
|**`indexColumn`**|string||If add custom action button please set the indexColumn as your own array key. 

## Custom Styles
You can styles using material ui CreateMuiTheme function.


## License
The files included in this repository are licensed under the MIT license.
