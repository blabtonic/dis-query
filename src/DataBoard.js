import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

const TableBody = props => {
    const rows = props.bandData.map((row, index) =>{
        return (
            <tr key={index}>
                <td>{row.album}</td>
                <td>{row.name}</td>
                <td>
                    <Button variant="danger" size="sm" onClick={() => props.removeRecord(index)}>DELETE</Button>
                </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>
}

class DataBoard extends Component {
    render() {
        const { bandData, removeRecord } = this.props;

        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Settings</th>
                    </tr>
                </thead>
                <TableBody bandData={bandData} removeRecord={removeRecord}></TableBody>
            </Table>
        );
    }
}

export default DataBoard;