import React from 'react';

const ProtectedRoute = (props) => {
    console.log('props inside ProtectedRoute ', props)
    const { Component } = props;

    return (
        <Component {...props} />
    )
}

export default ProtectedRoute;