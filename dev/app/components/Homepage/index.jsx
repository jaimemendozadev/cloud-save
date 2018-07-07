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

                <div className='headers-container'>
                    <h1>Welcome to the CloudSave Homepage</h1>

                    <h2>Choose a file to upload</h2>
                </div>

                <div className='file-picker'>
                    <form>
                        <div className='upload-btn-container'>
                            <button className='upload-btn'>Upload a file</button>
                            <input name='Upload' onChange={this.handleFileUpload} type='file'
                                accept='image/*,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document' />
                        </div>

                        <button>Submit</button>
                    </form>

                    <div className='file-name-display'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti unde mollitia quis? Tempore labore quam sapiente corporis voluptate eligendi, corrupti esse aliquid dolores minima rerum ex illo at delectus reiciendis?
                    </div>
                </div>
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