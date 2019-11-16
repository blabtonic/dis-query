import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class DataBoard extends Component{
    render() {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Artist</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Mandisc</td>
                    <td>Foo</td>
                    </tr>
                    
                </tbody>
            </Table>
        );
    }
}

export default DataBoard;