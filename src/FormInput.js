import React, { Component } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

class FormInput extends Component {
    constructor(props) {
        super(props)

        this.initState = {
            album: '',
            name: '',
        }

        this.state = this.initState;
    }
    
    handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({
            [name]: value,
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initState);
    }

    render() {
        const { name, album } = this.state;

        return(
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Artist Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Artist Name" name="name" value={name} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Album Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Album Name" name="album" value={album} onChange={this.handleChange} />
                    </Form.Group>
                    
                    <InputGroup className="mb-3">
                        <Button variant="primary" onClick={this.submitForm}>Submit</Button>
                    </InputGroup>
                </Form>
            </div>
        );
    }
}

export default FormInput;