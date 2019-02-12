import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './Components/authroutes/privateRoutes';
import PublicRoute from './Components/authroutes/publicRoutes';

import Home from './Components/home';
import Signin from './Components/signin'

import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';

const Routes = (props) => {

  return (
    <Layout>
        <Switch>
          <PrivateRoute {...props} path="/adminmatches" exact component={AdminMatches}/> 
          <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/> 
          <PublicRoute {...props} restricted={true} path="/signin" exact component={Signin} />
          <PublicRoute {...props} restricted={false} path="/" exact component={Home} />
          

        </Switch>
    </Layout>
  )
}

export default Routes;
