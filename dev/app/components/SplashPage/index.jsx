import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => (
    <div className='splash-page-container'>
        <div className='splash-page-header'>
            <h1>Cloud Save</h1>
        </div>

        <div className='splash-page-main'>
            <div className='cloud-img-container'>
                <img src='https://qph.fs.quoracdn.net/main-qimg-3f44012001f5d9c27d46a84e41f2d821' />
            </div>
            <div className='splash-page-verbiage'>
                <h2>A simple web app to store your files in the cloud</h2>

                <div className='splash-page-btn'>
                    <Link to='/signin'>Sign In/Log In</Link>
                </div>


            </div>
        </div>
    </div>
)


export default SplashPage;