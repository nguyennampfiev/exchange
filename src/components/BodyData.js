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

import Tabs from './BodyTable';

const styles = {
    propContainer: {
        width: '100%',
        overflow: 'hidden',
        margin: '20px auto 0',
    },
};

export default class TableData extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    state = {
        stripedRows: false,
        showRowHover: false,
       enableSelectAll: false,
       deselectOnClickaway: false,
       showCheckboxes:false,
        height: '100%',
        data:[]
    };
    setData = (array)=>{
        this.setState({data:array});
        console.log(this.state.data.length);
    }
    handleChange = (event) => {
        this.setState({height: event.target.value});
    };
    render() {
        return (
            <div>
                <Table
                    height={this.state.height}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow  className={'header'}>
                            <TableHeaderColumn tooltip='' >Code</TableHeaderColumn>
                            <TableHeaderColumn tooltip=''>Company</TableHeaderColumn>
                            <TableHeaderColumn tooltip=''>Price</TableHeaderColumn>
                            <TableHeaderColumn tooltip=''>Value</TableHeaderColumn>
                            <TableHeaderColumn tooltip=''>Charge</TableHeaderColumn>
                            <TableHeaderColumn tooltip=''>Charge%</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        stripedRows={this.state.stripedRows}
                    >
                        {this.state.data.map((row, index) => (
                            <TableRow key={index} >
                                <TableRowColumn>{row.code}</TableRowColumn>
                                <TableRowColumn>{row.company}</TableRowColumn>
                                <TableRowColumn>{row.price}</TableRowColumn>
                                <TableRowColumn>{row.value}</TableRowColumn>
                                <TableRowColumn style={{color:checkColor(row.charge)}}>{`${row.charge}%`}</TableRowColumn>
                                <TableRowColumn style={{color:checkColor(row.chargePercent)}}>{`${row.chargePercent}%`}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
};
function checkColor(percent) {
    if(percent>0){
        return "green";
    }
    if(percent<0){
        return "red";
    }
    return "write";
}