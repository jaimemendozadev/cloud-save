import React, { Component } from 'react';
import { connect } from 'react-redux';

class Homepage extends Component {
    constructor(props) {
        super(props);
        const { currentUser } = this.props;
        this.state = {

            currentFile: '',
            currentUser,
        }
    }



    handleFileUpload = event => {
        console.log('event is ', event.target.files[0]);

        this.setState({
            currentFile: event.target.files[0]
        })
    }

    handleFileNameDisplay = () => {
        const { currentFile } = this.state;

        if (!currentFile) {
            return `No file currently selected`;
        }

        return `${currentFile.name}`;

    }



    handleSubmit = event => {

    }

    render() {
        const { currentFile, currentUser: { first_name } } = this.state;


        return (
            <div className='homepage'>

                <div className='headers-container'>
                    <h1>Welcome {first_name ? first_name : ''} to the CloudSave Homepage!</h1>

                    <h2>Choose a file to upload</h2>
                </div>

                <div className='file-picker'>
                    <form>
                        <div className='upload-btn-container'>
                            <button className='upload-btn'>Upload a file</button>
                            <input name='Upload' onChange={this.handleFileUpload} type='file'
                                accept='image/*, .pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document' />
                        </div>

                        <button>Submit</button>
                    </form>

                    <div className='file-name-display'>
                        {this.handleFileNameDisplay()}
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