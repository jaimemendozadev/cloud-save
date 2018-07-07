import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { prepPayload, escapeHtml, handleOnFocus, handleFirstName, handleLastName } from './utils';
import { initSocialAuth, initRegularAuth, getSocialAuthUser, getRegularAuthUser, resetSocialAuth, tokenSet } from '../../services/redux/actions/Auth'

const API_URL = 'http://localhost:3000/api';


class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: 'First Name',
            last_name: 'Last Name',
            email: 'Enter an Email',
            password: '',
            authError: '',
            signInError: '',
            redirect: false,
            redirectTarget: null,
        }
    }

    displayError = () => {
        const { authError, signInError } = this.state;

        if (authError) {
            return <h3 className='errorMsg'>{authError}</h3>
        }

        if (signInError) {
            return <h3 className='errorMsg'>{signInError}</h3>
        }
    }

    handleOnFocus = formField => {
        const formPlaceholder = {
            first_name: 'First Name',
            last_name: 'Last Name',
            email: 'Enter an Email',
        }
        const currentField = this.state[formField]
        if (currentField === formPlaceholder[formField]) {
            const newFormValue = {}
            newFormValue[formField] = ''
            const newState = Object.assign({}, this.state, newFormValue)
            this.setState(newState)
        }
    }

    handleFirstName = event => {
        const first_name = escapeHtml(event.target.value);
        this.setState({
            first_name,
            authError: '',
            signInError: '',
        })
    }

    handleLastName = event => {
        const last_name = escapeHtml(event.target.value);
        this.setState({
            last_name,
            authError: '',
            signInError: '',
        })
    }

    handleEmail = event => {
        const email = escapeHtml(event.target.value);
        this.setState({
            email,
            authError: '',
            signInError: '',
        })
    }
    handlePassword = event => {
        const password = escapeHtml(event.target.value);
        this.setState({
            password,
            authError: '',
            signInError: '',
        })
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { initRegularAuth, getRegularAuthUser } = this.props;

        const { first_name, last_name, email, password } = this.state;
        const payload = prepPayload({ first_name, last_name, email, password });
        const context = this;

        // Notify Redux Regular Auth initiated
        initRegularAuth();

        getRegularAuthUser(payload, context);

    }

    handleSocialAuth = () => {
        const { initSocialAuth } = this.props;

        this.setState({
            authError: ''
        }, () => initSocialAuth())
    }

    checkSocialAuth = () => {
        const { SocialAuthInProgress, location, getSocialAuthUser, resetSocialAuth } = this.props;
        const context = this;

        //If we've kicked off social auth, look for the token
        if (SocialAuthInProgress) {

            if (location.search && location.search.includes('token')) {
                const token = location.search.slice(7);

                // Save token in localStorage
                localStorage.setItem('token', token);

                tokenSet(); // Fire off tokenSet Action

                getSocialAuthUser(token, context);

                //We didn't get the token, reset Redux Auth state
            } else {
                this.setState({
                    authError: "We couldn\'t verify your credentials. Please try again."
                }, () => resetSocialAuth())
            }
        }
    }

    componentDidMount = () => {
        this.checkSocialAuth()
    }

    render() {
        const { first_name, last_name, email, password, redirect, redirectTarget } = this.state;

        if (redirect && redirectTarget) {
            return <Redirect to={`/${redirectTarget}`} />
        }

        return (
            <div className='sign-up'>
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-child'>
                        <label htmlFor='first-name'>First Name</label>
                        <input onFocus={() => this.handleOnFocus('first_name')} value={first_name} onChange={this.handleFirstName} type='text' />
                    </div>
                    <div className='form-child'>
                        <label htmlFor='last-name'>Last Name</label>
                        <input onFocus={() => this.handleOnFocus('last_name')} value={last_name} onChange={this.handleLastName} type='text' />
                    </div>
                    <div className='form-child'>
                        <label htmlFor='email'>Email</label>
                        <input onFocus={() => this.handleOnFocus('email')} value={email} onChange={this.handleEmail} type='text' />
                    </div>
                    <div className='form-child'>
                        <label htmlFor='password'>Password</label>
                        <input value={password} onChange={this.handlePassword} type='password' />
                    </div>
                    <button>Submit</button>
                </form>
                <div onClick={this.handleSocialAuth} className='googleSignUp'>
                    <a href="http://localhost:3000/api/auth/google">Sign In with Google</a>
                </div>
                <div>
                    {this.displayError()}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authStatus }) {
    return {
        SocialAuthInProgress: authStatus.SocialAuthInProgress,
        RegularAuthInProgress: authStatus.RegularAuthInProgress,
    }
}

export default connect(mapStateToProps, { initSocialAuth, initRegularAuth, getSocialAuthUser, getRegularAuthUser, resetSocialAuth, tokenSet })(SignIn);




