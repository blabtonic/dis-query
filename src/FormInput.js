import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

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
            <Form>
                <Form.Group>
                    <Form.Label>Artist Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Artist Name" name="name" value={name} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Album Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Album Name" name="album" value={album} onChange={this.handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.submitForm}>Submit</Button>
            </Form>
        );
    }
}

/**
 * 
 *         return(
            <form>
                <label>Band Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label>Album Name</label>
                <input 
                    type="text"
                    name="album"
                    value={album}
                    onChange={this.handleChange} />
                <input 
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>
        );
 */
export default FormInput;