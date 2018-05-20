/*
A simple HOC to allow a component to check out authentication before being mounted.
If the user is not authenticated, the component will redirect to the specified path.
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bool } from 'prop-types';

const AuthenticatedRoute = (WrappedComponent, redirectTo, requireAuth = true) => {
  class AuthenticatedRoute extends Component {
    static propTypes = {
      initialized: bool.isRequired,
      loggedIn: bool.isRequired,
    };

    get content() {
      if (this.props.initialized) {
        const shouldRedirect = requireAuth
          ? !this.props.loggedIn
          : this.props.loggedIn;

        return shouldRedirect
          ? <Redirect to={redirectTo} />
          : <WrappedComponent {...this.props} />;
      } else {
        return <p>Loading...</p>;
      }
    }

    render() {
      return this.content;
    }
  }

  const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    loggedIn: !!(state.auth.token && state.auth.userData),
  });

  return connect(mapStateToProps)(AuthenticatedRoute);
};

export default AuthenticatedRoute;
