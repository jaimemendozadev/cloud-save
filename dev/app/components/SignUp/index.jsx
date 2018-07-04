import React, { Component } from 'react';
import { prepPayload } from './utils';
const API_URL = 'http://localhost:3000/api/auth/signup'
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'Enter an Email',
            password: '',
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(event) {
        const email = event.target.value;

        this.setState({
            email,
        })
    }

    handlePassword(event) {
        const password = event.target.value;
        this.setState({
            password,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { email, password } = this.state;

        const payload = prepPayload({ email, password })

        fetch(API_URL, payload)
            .then(res => console.log('the response is ', res))
            .catch(error => console.log('the error is ', error));
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <h1>Sign Up</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
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




