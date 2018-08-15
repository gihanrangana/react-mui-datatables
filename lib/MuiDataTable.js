"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = require("@material-ui/core");

var _index = require("@material-ui/core/es/index");

var _reactExcelWorkbook = require("react-excel-workbook");

var _reactExcelWorkbook2 = _interopRequireDefault(_reactExcelWorkbook);

var _reactCsv = require("react-csv");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Gihan
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function Excel(props) {
    return _react2.default.createElement(
        _index.SvgIcon,
        props,
        _react2.default.createElement("path", {
            d: "M 28.8125 0.03125 L 0.8125 5.34375 C 0.339844 5.433594 0 5.863281 0 6.34375 L 0 43.65625 C 0 44.136719 0.339844 44.566406 0.8125 44.65625 L 28.8125 49.96875 C 28.875 49.980469 28.9375 50 29 50 C 29.230469 50 29.445313 49.929688 29.625 49.78125 C 29.855469 49.589844 30 49.296875 30 49 L 30 1 C 30 0.703125 29.855469 0.410156 29.625 0.21875 C 29.394531 0.0273438 29.105469 -0.0234375 28.8125 0.03125 Z M 32 6 L 32 13 L 34 13 L 34 15 L 32 15 L 32 20 L 34 20 L 34 22 L 32 22 L 32 27 L 34 27 L 34 29 L 32 29 L 32 35 L 34 35 L 34 37 L 32 37 L 32 44 L 47 44 C 48.101563 44 49 43.101563 49 42 L 49 8 C 49 6.898438 48.101563 6 47 6 Z M 36 13 L 44 13 L 44 15 L 36 15 Z M 6.6875 15.6875 L 11.8125 15.6875 L 14.5 21.28125 C 14.710938 21.722656 14.898438 22.265625 15.0625 22.875 L 15.09375 22.875 C 15.199219 22.511719 15.402344 21.941406 15.6875 21.21875 L 18.65625 15.6875 L 23.34375 15.6875 L 17.75 24.9375 L 23.5 34.375 L 18.53125 34.375 L 15.28125 28.28125 C 15.160156 28.054688 15.035156 27.636719 14.90625 27.03125 L 14.875 27.03125 C 14.8125 27.316406 14.664063 27.761719 14.4375 28.34375 L 11.1875 34.375 L 6.1875 34.375 L 12.15625 25.03125 Z M 36 20 L 44 20 L 44 22 L 36 22 Z M 36 27 L 44 27 L 44 29 L 36 29 Z M 36 35 L 44 35 L 44 37 L 36 37 Z " })
    );
}

var MuiDataTable = function (_Component) {
    _inherits(MuiDataTable, _Component);

    function MuiDataTable(props) {
        _classCallCheck(this, MuiDataTable);

        var _this = _possibleConstructorReturn(this, (MuiDataTable.__proto__ || Object.getPrototypeOf(MuiDataTable)).call(this, props));

        _this.state = {
            page: 0,
            rowsPerPage: 5,
            searchText: "",
            showSearch: false,
            order: "asc",
            orderBy: ""
        };

        _this.handleChangePage = _this.handleChangePage.bind(_this);
        _this.handleChangeRowsPerPage = _this.handleChangeRowsPerPage.bind(_this);
        _this.handleSearch = _this.handleSearch.bind(_this);
        _this.handleActions = _this.handleActions.bind(_this);
        _this.getSorting = _this.getSorting.bind(_this);
        _this.handleRequestSort = _this.handleRequestSort.bind(_this);
        return _this;
    }

    _createClass(MuiDataTable, [{
        key: "handleChangePage",
        value: function handleChangePage(event, page) {
            this.setState({ page: page });
        }
    }, {
        key: "handleChangeRowsPerPage",
        value: function handleChangeRowsPerPage(event) {
            this.setState({ rowsPerPage: event.target.value });
        }
    }, {
        key: "handleSearch",
        value: function handleSearch(e) {
            this.setState({ searchText: e.target.value });
        }
    }, {
        key: "handleActions",
        value: function handleActions(val) {
            this.setState(_defineProperty({}, val, !this.state[val]));
        }
    }, {
        key: "handleRequestSort",
        value: function handleRequestSort(event, property) {
            // console.log(event, property);
            var orderBy = property;
            var order = "desc";

            if (this.state.orderBy === property && this.state.order === "desc") {
                order = "asc";
            }

            this.setState({ order: order, orderBy: orderBy });
        }
    }, {
        key: "getSorting",
        value: function getSorting(order, orderBy) {
            return function (a, b) {
                return order === "desc" ? b[orderBy] > a[orderBy] : a[orderBy] > b[orderBy];
            };
        }
    }, {
        key: "handlePrint",
        value: function handlePrint() {
            var content = document.getElementById("print_data").innerHTML;
            var win = window.open("about:blank", "", "_blank");
            win.document.write(content);
            win.print();
            win.close();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                options = _props.options,
                columns = _props.columns,
                title = _props.title;
            var _state = this.state,
                page = _state.page,
                rowsPerPage = _state.rowsPerPage,
                searchText = _state.searchText,
                showSearch = _state.showSearch,
                order = _state.order,
                orderBy = _state.orderBy;


            var download_headers = columns.filter(function (e) {
                return e.key !== "action";
            });

            var filteredData = this.props.data.filter(function (x) {
                return Object.keys(x).some(function (key) {
                    return x[key].toLowerCase().includes(searchText.toLowerCase()) || !searchText;
                });
            });

            return _react2.default.createElement(
                "div",
                { className: options.darkTheme ? "dark_theme mui_datatables" : "mui_datatables" },
                _react2.default.createElement(
                    _index.Toolbar,
                    { className: "table_toolbar" },
                    _react2.default.createElement(
                        "div",
                        { className: "toolbar_left" },
                        !showSearch ? _react2.default.createElement(
                            _index.Typography,
                            { variant: "title", className: "table_title" },
                            title
                        ) : _react2.default.createElement(
                            _index.Grow,
                            { "in": showSearch },
                            _react2.default.createElement(
                                _index.FormControl,
                                { fullWidth: true },
                                _react2.default.createElement(_index.Input, {
                                    name: "searchText",
                                    value: this.state.searchText,
                                    onChange: this.handleSearch,
                                    placeholder: "Type here to search...",
                                    endAdornment: _react2.default.createElement(
                                        _index.InputAdornment,
                                        { position: "end" },
                                        _react2.default.createElement(
                                            _index.IconButton,
                                            {
                                                onClick: function onClick() {
                                                    _this2.handleActions("showSearch");
                                                }
                                            },
                                            _react2.default.createElement(
                                                _index.Icon,
                                                null,
                                                "close"
                                            )
                                        )
                                    )
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "table_actions" },
                        options.searchBox && _react2.default.createElement(
                            _index.Tooltip,
                            { title: "Search" },
                            _react2.default.createElement(
                                _index.IconButton,
                                { onClick: function onClick() {
                                        _this2.handleActions("showSearch");
                                    } },
                                _react2.default.createElement(
                                    _index.Icon,
                                    null,
                                    "search"
                                )
                            )
                        ),
                        options.csv && _react2.default.createElement(
                            _index.Tooltip,
                            { title: "Download CSV" },
                            _react2.default.createElement(
                                _reactCsv.CSVLink,
                                { data: filteredData, headers: download_headers },
                                _react2.default.createElement(
                                    _index.IconButton,
                                    null,
                                    _react2.default.createElement(
                                        _index.Icon,
                                        null,
                                        "cloud_download"
                                    )
                                )
                            )
                        ),
                        options.printButton && _react2.default.createElement(
                            _index.Tooltip,
                            { title: "Print" },
                            _react2.default.createElement(
                                _index.IconButton,
                                { onClick: this.handlePrint.bind(this) },
                                _react2.default.createElement(
                                    _index.Icon,
                                    null,
                                    "print"
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _core.Table,
                    null,
                    _react2.default.createElement(
                        _core.TableHead,
                        null,
                        _react2.default.createElement(
                            _core.TableRow,
                            null,
                            options.hasIndex && _react2.default.createElement(
                                _core.TableCell,
                                null,
                                "#"
                            ),
                            columns.map(function (c) {
                                if (c.sort) {
                                    return _react2.default.createElement(
                                        _core.TableCell,
                                        {
                                            key: c.key,
                                            sortDirection: orderBy === c.key ? order : false
                                        },
                                        _react2.default.createElement(
                                            _index.Tooltip,
                                            {
                                                title: "Sort",
                                                enterDelay: 300
                                            },
                                            _react2.default.createElement(
                                                _index.TableSortLabel,
                                                {
                                                    active: orderBy === c.key,
                                                    direction: order,
                                                    onClick: function onClick(e) {
                                                        _this2.handleRequestSort(e, c.key);
                                                    }
                                                },
                                                c.label
                                            )
                                        )
                                    );
                                } else {
                                    return _react2.default.createElement(
                                        _core.TableCell,
                                        { key: c.key },
                                        c.label
                                    );
                                }
                            })
                        )
                    ),
                    _react2.default.createElement(
                        _core.TableBody,
                        null,
                        filteredData.sort(this.getSorting(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (r, i) {
                            return _react2.default.createElement(
                                _core.TableRow,
                                { key: i + 1 },
                                options.hasIndex && _react2.default.createElement(
                                    _core.TableCell,
                                    null,
                                    i + 1
                                ),
                                columns.map(function (c) {
                                    return _react2.default.createElement(
                                        _core.TableCell,
                                        { key: c.key,
                                            id: c.key === "action" ? r[options.indexColumn] : "" },
                                        c.key === "action" ? options.customAction : r[c.key]
                                    );
                                })
                            );
                        })
                    )
                ),
                _react2.default.createElement(_index.TablePagination, {
                    component: "div",
                    count: filteredData.length,
                    rowsPerPage: rowsPerPage,
                    page: page,
                    backIconButtonProps: {
                        "aria-label": "Previous Page"
                    },
                    nextIconButtonProps: {
                        "aria-label": "Next Page"
                    },
                    onChangePage: this.handleChangePage,
                    onChangeRowsPerPage: this.handleChangeRowsPerPage
                }),
                _react2.default.createElement(
                    "div",
                    { id: "print_data", style: { display: "none" } },
                    _react2.default.createElement(
                        "table",
                        { border: "0", cellSpacing: "0", style: {
                                width: "100%", fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif", fontSize: 14
                            } },
                        _react2.default.createElement(
                            "thead",
                            null,
                            _react2.default.createElement(
                                "tr",
                                { style: { background: "#e0e0e0", fontWeight: "bold" } },
                                columns.map(function (c) {
                                    if (c.key !== "action") {
                                        return _react2.default.createElement(
                                            "td",
                                            { style: { padding: "8px" }, key: c.key },
                                            c.label
                                        );
                                    }
                                })
                            )
                        ),
                        _react2.default.createElement(
                            "tbody",
                            null,
                            this.props.data.map(function (r, i) {
                                return _react2.default.createElement(
                                    "tr",
                                    { key: i, style: { background: i % 2 ? "#f0f0f0" : "", fontSize: 12 } },
                                    columns.map(function (c) {
                                        if (c.key !== "action") {
                                            return _react2.default.createElement(
                                                "td",
                                                { style: { padding: "8px" }, key: c.key },
                                                r[c.key]
                                            );
                                        }
                                    })
                                );
                            })
                        )
                    )
                )
            );
        }
    }]);

    return MuiDataTable;
}(_react.Component);

_propTypes2.default.defaultProps = {
    options: {
        hasIndex: false, /* <-- use numbers for rows*/
        customAction: "", /* <-- use action button for row */
        searchBox: true, /* <-- search true or false */
        csv: true, /* <-- csv download true or false */
        indexColumn: "", /* <-- add your data first unique column name for this like _id, i used fname because i don't have a _id field in my array */
        darkTheme: false,
        printButton: true
    }
};

exports.default = MuiDataTable;