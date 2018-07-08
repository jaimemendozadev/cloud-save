import React, { Component } from 'react';
import { connect } from 'react-redux';
import { prepAWSPayload } from './utils';
import { uploadFile } from '../../services/redux/actions/aws';

class Homepage extends Component {
    constructor(props) {
        super(props);
        const { currentUser } = this.props;
        const { drive } = currentUser;
        this.state = {
            targetLocation: '/',
            currentFile: {},
            currentFileObj: {},
            currentUser,
            drive,
        }
    }



    handleFileUpload = event => {
        // MVP goal: one file upload
        console.log('currentFile is  ', event.target.files[0]);

        const currentFile = {
            name: event.target.files[0].name,
            type: event.target.files[0].type,
        }

        this.setState({
            currentFile,
            currentFileObj: event.target.files[0],
        });
    }

    handleFileNameDisplay = () => {
        const { currentFile } = this.state;

        if (!currentFile) {
            return `No file currently selected`;
        }

        return `${currentFile.name}`;

    }

    handleDriveDisplay = drive => {
        if (!drive.length) {
            return `Looks like your Drive is empty. Please upload a new file to the cloud!`
        }
    }



    handleSubmit = event => {
        event.preventDefault();
        const { currentFile, currentFileObj, targetLocation } = this.state;
        const { uploadFile } = this.props;

        currentFile.targetLocation = targetLocation;
        const token = localStorage.getItem('token');

        const AWS_Payload = prepAWSPayload('GET', token, currentFile)

        // Kicks off Redux uploadFile action
        uploadFile(AWS_Payload, currentFileObj);
    }



    render() {
        const { drive, currentUser: { first_name } } = this.state;


        return (
            <div className='homepage'>
                <div className='homepage-top-half'>
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



                <div className='homepage-bottom-half'>
                    <div className='drive-display'>
                        {this.handleDriveDisplay(drive)}
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

export default connect(mapStateToProps, { uploadFile })(Homepage);