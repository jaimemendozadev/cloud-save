import React, { Component } from 'react';
import { connect } from 'react-redux';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFile: ''
        }
    }

    handleFileUpload = event => {
        console.log('event is ', event.target.files[0]);

        this.setState({
            currentFile: event.target.files[0]
        })
    }



    handleSubmit = event => {

    }

    render() {
        const { currentUser } = this.props;
        const { currentFile } = this.state;
        console.log('currentUser is ', currentUser);

        return (
            <div className='homepage'>
                <h1>Welcome to the CloudSave Homepage</h1>
                <form>
                    <label>Choose file to upload</label>
                    <input onChange={this.handleFileUpload} type='file' />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ currentUser }) {
    return {
        currentUser
    }
}

export default connect(mapStateToProps, null)(Homepage);