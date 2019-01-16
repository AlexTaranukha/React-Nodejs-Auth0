import React from 'react';
import {Route} from 'react-router-dom';
import auth0Client from '../Auth';

function SecuredRoute(props) {
  const {component: Component, path, checkingSession} = props;
  return (
    <Route path={path} render={ () => {
      // if session is being checked
      if (checkingSession) return <h3 classNmae="text-center">Validating session...</h3>
      // otherwise
      if (!auth0Client.isAuthenticated()) {
        auth0Client.signIn();
        return <div></div>;
      }
      return <Component />
    }} />
  );
}

export default SecuredRoute;
