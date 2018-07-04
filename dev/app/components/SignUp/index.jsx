import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'Enter an Email',
            password: '',
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleEmail(event) {
        console.log('event is ', event.target.value)
        const email = event.target.value;

        this.setState({
            email,
        })
    }

    handlePassword(event) {
        console.log('event is ', event.target.value)
        const password = event.target.value;
        this.setState({
            password,
        })
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <h1>Sign Up</h1>
                <div>
                    <form>
                        <label htmlFor='email'>Email</label>
                        <input value={email} onChange={this.handleEmail} type='text' />

                        <label htmlFor='password'>Password</label>
                        <input value={password} onChange={this.handlePassword} type='password' />

                        <a href="http://localhost:3000/api/auth/google">Sign Up with Google</a>
                    </form>
                </div>
            </div>
        )
    }
}


export default SignUp;




