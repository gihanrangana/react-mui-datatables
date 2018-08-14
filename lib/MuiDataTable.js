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

require("./styles.css");

var _reactCsv = require("react-csv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Gihan
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


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
            order: 'asc',
            orderBy: ''
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
            console.log(event, property);
            var orderBy = property;
            var order = 'desc';

            if (this.state.orderBy === property && this.state.order === 'desc') {
                order = 'asc';
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
                return e.key !== 'action';
            });

            var filteredData = this.props.data.filter(function (x) {
                return Object.keys(x).some(function (key) {
                    return x[key].toLowerCase().includes(searchText.toLowerCase()) || !searchText;
                });
            });

            return _react2.default.createElement(
                "div",
                { className: options.darkTheme ? 'dark_theme mui_datatables' : 'mui_datatables' },
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
                })
            );
        }
    }]);

    return MuiDataTable;
}(_react.Component);

_propTypes2.default.defaultProps = {
    options: {
        hasIndex: false, /* <-- use numbers for rows*/
        customAction: '', /* <-- use action button for row */
        searchBox: true, /* <-- search true or false */
        csv: true, /* <-- csv download true or false */
        indexColumn: "", /* <-- add your data first unique column name for this like _id, i used fname because i don't have a _id field in my array */
        darkTheme: false
    }
};

exports.default = MuiDataTable;