import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            waitingAuth: true,
            userAuthenticated: false,
        }

    }

    handleProtectedRoute = () => {
        const { userAuthenticated } = this.state;
        if (userAuthenticated) {
            const { component: Component, ...rest } = this.props;
            return (
                <Route {...rest} render={props => (
                    <Component {...props} />
                )} />
            )
        } else {
            return <Redirect to='/signin' />
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');

        console.log('token inside ProtectRoute Homepage CDM ', token);
        if (token) {
            this.setState({
                waitingAuth: false,
                userAuthenticated: true,
            });
        } else {
            this.setState({
                waitingAuth: false,
                userAuthenticated: false,
            });
        }
    }

    render() {
        console.log('inside ProtectedRoute')
        console.log('this.state inside ProtectedRoute ', this.state)
        const { waitingAuth } = this.state;

        if (waitingAuth) {
            return <h3>Waiting for Authentication to finish...</h3>
        } else {
            this.handleProtectedRoute();
        }


    }
}
export default ProtectedRoute;