import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/home';
import Signin from './Components/signin'

import Dashboard from './Components/admin/Dashboard';

const Routes = (props) => {
  return (
    <Layout>
        <Switch>
          <Route exact component={Dashboard} path="/dashboard" />
          <Route exact component={Signin} path="/signin" />
          <Route exact component={Home} path="/" />

        </Switch>
    </Layout>
  )
}

export default Routes;
