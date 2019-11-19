import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

const TableBody = props => {
    return (
        <tbody/>
    );
}

class DataBoard extends Component{
    render() {
        const { bandData } = this.props;

        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Album</th>
                        <th>Artist</th>
                    </tr>
                </thead>
                <TableBody bandData={bandData}></TableBody>
            </Table>
        );
    }
}

export default DataBoard;