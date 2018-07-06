import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ProtectedRoute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            haveToken: false
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

    componentDidMount() {

        const token = localStorage.getItem('token');

        console.log('token inside ProtectRoute Homepage CDM ', token);

        if (token) {
            this.setState({
                haveToken: true
            })
        }



    }

    render() {
        console.log('inside ProtectedRoute render')
        const { authInProgress } = this.props;
        console.log('props inside protected route ', this.props)

        const { haveToken } = this.state;

        if (authInProgress === false) {
            this.props.history.push('/homepage');
        }

        if (haveToken) {
            return this.handleProtectedRoute();
        }

        else {
            return <h3>Waiting for authentication...</h3>
        }







    }
}


function mapStateToProps({ authStatus }) {
    return {
        authInProgress: authStatus.authInProgress,
        tokenSet: authStatus.tokenSet,
    }
}
export default connect(mapStateToProps, null)(ProtectedRoute);