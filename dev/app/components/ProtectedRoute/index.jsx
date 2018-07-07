import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ProtectedRoute extends Component {
    constructor(props) {
        super(props);
        const { RegularAuthInProgress, SocialAuthInProgress } = this.props;

        this.state = {
            haveToken: false,
            RegularAuthInProgress,
            SocialAuthInProgress,
        }
    }

    handleProtectedRoute = () => {
        const token = localStorage.getItem('token');

        if (token) {
            const { component: Component, ...rest } = this.props;
            return (
                <Route {...rest} render={props => (
                    <Component {...props} />
                )} />
            )
        } else {
            this.props.history.push('/signin');
        }
    }

    componentDidMount = () => {
        const token = localStorage.getItem('token');

        console.log('token inside ProtectRoute Homepage CDM ', token);
        // If we get the token from localStorage, rerender component
        if (token) {
            this.setState({
                haveToken: true
            });
        }
    }

    render() {
        console.log('inside ProtectedRoute render')
        const { RegularAuthInProgress, SocialAuthInProgress } = this.state;
        console.log('props inside protected route ', this.props)

        const { haveToken } = this.state;

        // If neither Auth process has started, redirect to Homepage
        if (RegularAuthInProgress === false && SocialAuthInProgress === false) {
            return <Redirect to='/signin' />
        }

        // If we have the token, handleProtectedRoute
        if (haveToken) {
            return this.handleProtectedRoute();
        }

        // Otherwise, render placeholder text and go to CDM
        else {
            return <h3>Waiting for authentication...</h3>
        }
    }
}


function mapStateToProps({ authStatus }) {
    return {
        SocialAuthInProgress: authStatus.SocialAuthInProgress,
        RegularAuthInProgress: authStatus.RegularAuthInProgress,
        tokenSet: authStatus.tokenSet,
    }
}
export default connect(mapStateToProps, null)(ProtectedRoute);