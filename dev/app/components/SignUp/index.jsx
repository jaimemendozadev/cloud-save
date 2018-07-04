import React, { Component } from 'react';
import { prepPayload, escapeHtml } from './utils';
const API_URL = 'http://localhost:3000/api/auth/signup'
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Enter an Email',
            password: '',
        }
    }

    handleOnFocus = formField => {
        const formPlaceholder = {
            firstName: 'First Name',
            lastName: 'Last Name',
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
        const firstName = escapeHtml(event.target.value);
        this.setState({
            firstName,
        })
    }

    handleLastName = event => {
        const lastName = escapeHtml(event.target.value);
        this.setState({
            lastName,
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
        const { email, password } = this.state;

        const payload = prepPayload({ email, password })

        let result = await fetch(API_URL, payload)
            .then(res => res.json())
            .catch(error => console.log('the error is ', error));


        console.log('await result inside handleSubmit is ', result)
    }

    render() {
        const { firstName, lastName, email, password } = this.state;
        return (
            <div className='sign-up'>
                <h1>Sign Up</h1>

                <form onSubmit={this.handleSubmit}>

                    <div className='form-child'>
                        <label htmlFor='first-name'>First Name</label>
                        <input onFocus={() => this.handleOnFocus('firstName')} value={firstName} onChange={this.handleFirstName} type='text' />
                    </div>
                    <div className='form-child'>
                        <label htmlFor='last-name'>Last Name</label>
                        <input onFocus={() => this.handleOnFocus('lastName')} value={lastName} onChange={this.handleLastName} type='text' />
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
                <div className='googleSignUp'>
                    <a href="http://localhost:3000/api/auth/google">Sign Up with Google</a>
                </div>

            </div>
        )
    }
}


export default SignUp;




