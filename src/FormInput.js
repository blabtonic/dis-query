import React, { Component } from 'react';

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

    render() {
        const { name, album } = this.state;

        return(
            <form>
                <label>Album Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={this.handleChange} />
                <label>Band Name</label>
                <input 
                    type="text"
                    value={album}
                    onChange={this.handleChange} />
            </form>
        );
    }
}

export default FormInput;