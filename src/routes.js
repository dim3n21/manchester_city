import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoutes from './Components/authroutes/privateRoutes';

import Home from './Components/home';
import Signin from './Components/signin'

import Dashboard from './Components/admin/Dashboard';

const Routes = (props) => {

  return (
    <Layout>
        <Switch>
          <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard}/> 
          <Route exact component={Signin} path="/signin" />
          <Route exact component={Home} path="/" />

        </Switch>
    </Layout>
  )
}

export default Routes;
