import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';
import LoginPage  from './LoginPage';
import { NotFoundPage } from './NotFoundPage';  

const renderIndex = () => <LoginPage/>;

export const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
);

export default App;
