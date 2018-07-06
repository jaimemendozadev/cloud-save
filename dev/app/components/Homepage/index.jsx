import React, { Component } from 'react';
import { connect } from 'react-redux';

class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser } = this.props
        console.log('currentUser is ', currentUser);

        return (
            <div>
                <h1>Welcome to the CloudSave Homepage</h1>
            </div>
        )
    }
}

function mapStateToProps({ currentUser }) {
    return {
        currentUser
    }
}

export default connect(mapStateToProps, null)(Homepage);