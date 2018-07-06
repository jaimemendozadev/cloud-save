import React, { Component } from 'react';
import { connect } from 'react-redux';
import { prepPayload, escapeHtml } from './utils';
import { initSocialAuth, getSocialAuthUser } from '../../services/redux/actions/Auth'

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
        })
    }
    handleLastName = event => {
        const last_name = escapeHtml(event.target.value);
        this.setState({
            last_name,
        })
    }
    handleEmail = event => {
        const email = escapeHtml(event.target.value);
        this.setState({
            email,
        })
    }
    handlePassword = event => {
        const password = escapeHtml(event.target.value);
        this.setState({
            password,
        })
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { first_name, last_name, email, password } = this.state;
        const payload = prepPayload({ first_name, last_name, email, password })
        let result = await fetch(`${API_URL}/auth/signup`, payload)
            .then(res => res.json())
            .catch(error => {
                console.log('the error is ', error)
            });
        console.log('await result inside handleSubmit is ', result)
    }

    checkSocialAuth = () => {
        const { authStatus, location, getSocialAuthUser } = this.props;
        if (authStatus) {
            if (location.search && location.search.includes('token')) {
                const token = location.search.slice(7);
                getSocialAuthUser(token);

            } else {
                this.setState({
                    authError: "We couldn\'t verify your credentials. Please try again."
                })
            }
        }
    }

    componentDidMount = () => {
        console.log('current props in CDM are ', this.props);
        // this.props.location.search

        this.checkSocialAuth()
    }

    render() {
        const { first_name, last_name, email, password } = this.state;
        const { initSocialAuth } = this.props;

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
                <div onClick={initSocialAuth} className='googleSignUp'>
                    <a href="http://localhost:3000/api/auth/google">Sign In with Google</a>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authStatus }) {
    return {
        authStatus
    }
}

export default connect(mapStateToProps, { initSocialAuth, getSocialAuthUser })(SignIn);




