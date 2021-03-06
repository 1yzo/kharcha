import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => {
            return (
                !isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/dashboard" />
                )
            );
        }}/>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);