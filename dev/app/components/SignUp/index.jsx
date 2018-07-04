import React, { Component } from 'react';
import { prepPayload } from './utils';
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

    handleFirstName = event => {
        const firstName = event.target.value;
        this.setState({
            firstName,
        })
    }

    handleLastName = event => {
        const lastName = event.target.value;
        this.setState({
            lastName,
        })
    }

    handleEmail = event => {
        const email = event.target.value;

        this.setState({
            email,
        })
    }

    handlePassword = event => {
        const password = event.target.value;
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
            <div>
                <h1>Sign Up</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor='first-name'>First Name</label>
                            <input value={firstName} onChange={this.handleFirstName} type='text' />

                            <label htmlFor='last-name'>Last Name</label>
                            <input value={lastName} onChange={this.handleLastName} type='text' />

                            <label htmlFor='email'>Email</label>
                            <input value={email} onChange={this.handleEmail} type='text' />

                            <label htmlFor='password'>Password</label>
                            <input value={password} onChange={this.handlePassword} type='password' />

                            <button>Submit</button>
                        </div>

                        <a href="http://localhost:3000/api/auth/google">Sign Up with Google</a>
                    </form>
                </div>
            </div>
        )
    }
}


export default SignUp;




