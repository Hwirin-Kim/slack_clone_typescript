import React from 'react';
import loadable from '@loadable/component'; //코드 스플릿
import { Redirect, Route, Switch } from 'react-router';
const LogIn = loadable(() => import('@pages/Login')); // 코드스플릿 이렇게 사용함
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default App;
