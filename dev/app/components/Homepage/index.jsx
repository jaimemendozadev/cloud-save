import React, { Component } from 'react';
import { connect } from 'react-redux';
import Document from '../Document/index.jsx';
import { prepAWSPayload, getFileType, uploadFileToAWS } from './utils';
import { fetchUpdatedDrive } from '../../services/redux/actions/User';
import { startUserLogOut } from '../../services/redux/actions/Auth';

class Homepage extends Component {
    constructor(props) {
        super(props);
        const { currentUser } = this.props;
        // const { drive } = currentUser;
        this.state = {
            targetLocation: '/',
            currentFile: {},
            currentFileObj: {},
            currentUser,
            drive: [],
            errorMessage: '',
        }
    }



    handleFileUpload = event => {
        // MVP goal: one file upload

        const currentFile = {
            name: event.target.files[0].name,
            type: event.target.files[0].type,
        }

        const extension = getFileType(currentFile.type);

        currentFile.extension = extension;

        this.setState({
            currentFile,
            currentFileObj: event.target.files[0],
        });
    }

    handleFileNameDisplay = () => {
        const { currentFile, errorMessage } = this.state;

        if (errorMessage) {
            return <span className='errorMsg'>{errorMessage}</span>;
        }

        if (!currentFile.name) {
            return `No file currently selected`;
        }

        return `${currentFile.name}`;

    }

    handleDriveDisplay = drive => {
        if (!drive.length) {
            return `Looks like your Drive is empty. Please upload a new file to the cloud!`
        }

        return drive.map(document => {
            const { original_file_name, aws_url, file_type } = document;
            return <Document
                key={`${original_file_name}-${aws_url}`}
                original_file_name={original_file_name}
                aws_url={aws_url}
                file_type={file_type}
            />
        })
    }

    handleLogOut = () => {
        const { startUserLogOut } = this.props;
        /*
          Clearing localStorage doesn't happen fast
          LogOut process terminates at <ProtectedRoute />
          handleProtectedRoute()
        */

        localStorage.clear();

        startUserLogOut();

    }

    handleSubmit = async event => {
        event.preventDefault();

        const { currentFile, currentFileObj, targetLocation } = this.state;
        const { fetchUpdatedDrive } = this.props;

        currentFile.targetLocation = targetLocation;
        const token = localStorage.getItem('token');

        const AWS_Payload = prepAWSPayload('POST', token, currentFile)

        // Kicks off getting preSignedUrl, Doc/Drive creation/update on Server
        // & file upload on FE
        const finalResult = await uploadFileToAWS(AWS_Payload, currentFileObj, currentFile.type);

        if (finalResult === 'File upload error') {
            this.setState({
                errorMessage: 'There was an error uploading the file. Please try again later.'
            });
        }

        // Trigger Redux Action to get updatedDrive
        fetchUpdatedDrive()
    }



    render() {
        // const { drive, currentUser: { first_name } } = this.state;
        const { currentUser: { first_name } } = this.state;
        const { drive } = this.props;

        return (
            <div className='homepage'>
                <div className='homepage-top-half'>
                    <div className='headers-container'>
                        <h1>Welcome {first_name ? first_name : ''} to the CloudSave Homepage!</h1>

                        <button onClick={this.handleLogOut} className='logout-btn'>Logout</button>

                        <h2>Choose a file to upload</h2>
                    </div>

                    <div className='file-picker'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='upload-btn-container'>
                                <button className='upload-btn'>Upload a file</button>
                                <input name='Upload' onChange={this.handleFileUpload} type='file'
                                    accept='image/*, .pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document' />
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
        currentUser,
        drive: currentUser.drive,
    }
}

export default connect(mapStateToProps, { fetchUpdatedDrive, startUserLogOut })(Homepage);