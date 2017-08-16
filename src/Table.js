import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import Tabs from './TabsTwo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const styles = {
    propContainer: {
        width: '100%',
        overflow: 'hidden',
        margin: '20px auto 0',
    },

};

const tableData = [
    {   code:0,
        company:'ABC',
        price :'John',
        value :1232,
        charge :123,
        charge1:123,
    },
    {code:1,
        company:'ABC',
        price :'John',
        value :1232,
        charge :123,
        charge1:123
    },
    {
        code:2,
        company:'ABC',
        price :'John',
        value :1232,
        charge :123,
        charge1:123
    },
    {
        code:3,
        company:'ABC',
        price :'John',
        value :1232,
        charge :123,
        charge1:123
    },
    {
        code:4,
        company:'ABC',
        price :'John',
        value :1232,
        charge :123,
        charge1:123
    },
    {
        code:5,
        company:'ABC',
        price :'John',
        value :1232,
        charge :123,
        charge1:123
    },
    {
        code:6,
        company:'ABC',
        price :'John',
        value :1232,
        charge :123,
        charge1:123
    },
];
export default class TableExampleComplex extends Component {
    state = {
        //fixedHeader: true,
        // fixedFooter: true,
        stripedRows: false,
        showRowHover: false,
      // selectable: false,
      // multiSelectable: false,
       enableSelectAll: false,
       deselectOnClickaway: false,
       showCheckboxes:false,
        height: '100%',
    };

    handleChange = (event) => {
        this.setState({height: event.target.value});
    };

    render() {
        return (
            <div>
                <MuiThemeProvider>
                <Table
                    height={this.state.height}
                //    fixedHeader={this.state.fixedHeader}
                  //  fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>

                            <TableHeaderColumn colSpan="6" tooltip="" className={'header'}>
                                <Tabs />
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow  className={'header'}>
                            <TableHeaderColumn tooltip="" >Code</TableHeaderColumn>
                            <TableHeaderColumn tooltip="" >Company</TableHeaderColumn>
                            <TableHeaderColumn tooltip="" >Price</TableHeaderColumn>
                            <TableHeaderColumn tooltip="" >Value</TableHeaderColumn>
                            <TableHeaderColumn tooltip="" >Charge</TableHeaderColumn>
                            <TableHeaderColumn tooltip="" >Charge%</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                    //    deselectOnClickaway={this.state.deselectOnClickaway}
                     //   showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {tableData.map((row, index) => (
                            <TableRow key={index} >
                                <TableRowColumn>{row.code}</TableRowColumn>
                                <TableRowColumn>{row.company}</TableRowColumn>
                                <TableRowColumn>{row.price}</TableRowColumn>
                                <TableRowColumn>{row.value}</TableRowColumn>
                                <TableRowColumn>{row.charge}</TableRowColumn>
                                <TableRowColumn>{row.charge1}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </MuiThemeProvider>
            </div>
        );
    }
};
