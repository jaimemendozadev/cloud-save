import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../services/redux/actions/Auth';

class ProtectedRoute extends Component {
    constructor(props) {
        super(props);
        const { RegularAuthInProgress, SocialAuthInProgress, logOutUser } = this.props;

        this.state = {
            haveToken: false,
            RegularAuthInProgress,
            SocialAuthInProgress,
            logOutUser,
        }
    }

    handleProtectedRoute = () => {
        const token = localStorage.getItem('token');

        console.log('token inside handleProtectedRoute ', token)

        if (token) {
            const { component: Component, ...rest } = this.props;
            return (
                <Route {...rest} render={props => (
                    <Component {...props} />
                )} />
            )
        } else {
            // When 'START_LOG_OUT fires, we eventually reach this point
            return <Redirect to='/signin' />
        }
    }

    handleLogOut = () => {
        const { logOut } = this.props;

        // localStorage.clear();

        logOut();

        this.props.history.push('/signin');
    }

    componentDidMount = () => {
        const token = localStorage.getItem('token');

        console.log("inside CDM for ProtectedRoute and token is ", token)

        // If we get the token from localStorage, rerender component
        if (token) {
            this.setState({
                haveToken: true
            });
        }
    }

    /*
    componentDidUpdate = (_prevProps, prevState, _snapshot) => {
        const { logOutUser } = this.state;

        if (prevState.logOutUser != logOutUser) {
            this.handleLogOut();
        }
    }
    */

    render() {
        console.log('protected route rendering')
        console.log('this.props inside ProtectedRoute ', this.props)
        console.log('this.state inside ProtectedRoute ', this.state)

        const { RegularAuthInProgress, SocialAuthInProgress, logOutUser } = this.state;

        const { haveToken } = this.state;

        if (logOutUser === true) {
            console.log('inside logOutUser conditional')
            const { logOut } = this.props;

            // localStorage.clear();

            logOut();

            return <Redirect to='/signin' />
        }

        // If neither Auth process has started, redirect to Homepage
        if (RegularAuthInProgress === false && SocialAuthInProgress === false) {
            console.log('inside if RegularAuthInProgress === false && SocialAuthInProgress === false')
            return <Redirect to='/signin' />
        }

        // If we have the token, handleProtectedRoute
        if (haveToken) {
            console.log('inside if haveToken and haveToken is ', haveToken)
            return this.handleProtectedRoute();
        }

        // Otherwise, render placeholder text and go to CDM
        else {
            return <h3>Waiting for authentication...</h3>
        }
    }
}


function mapStateToProps({ authStatus: { SocialAuthInProgress, RegularAuthInProgress, tokenSet, logOutUser } }) {
    return {
        SocialAuthInProgress,
        RegularAuthInProgress,
        tokenSet,
        logOutUser,
    }
}
export default connect(mapStateToProps, { logOut })(ProtectedRoute);