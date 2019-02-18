import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './Components/authroutes/privateRoutes';
import PublicRoute from './Components/authroutes/publicRoutes';

import Home from './Components/home';
import Signin from './Components/signin';
import TheTeam from './Components/theTeam';
import TheMatches from './Components/theMatches';

import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/addEditMatch';
import AdminPlayers from './Components/admin/players/';
import AddEditPlayers from './Components/admin/players/addEditPlayers';

const Routes = (props) => {

  return (
    <Layout>
        <Switch>     
          <PrivateRoute {...props} path="/adminplayers/addplayer" exact component={AddEditPlayers}/> 
          <PrivateRoute {...props} path="/adminplayers/addplayer/:id" exact component={AddEditPlayers}/> 
          <PrivateRoute {...props} path="/adminplayers" exact component={AdminPlayers}/> 

          <PrivateRoute {...props} path="/adminmatches/editmatch" exact component={AddEditMatch}/> 
          <PrivateRoute {...props} path="/adminmatches/editmatch/:id" exact component={AddEditMatch}/> 
          <PrivateRoute {...props} path="/adminmatches" exact component={AdminMatches}/> 

          <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/> 
          <PublicRoute {...props} restricted={true} path="/signin" exact component={Signin} />
          <PublicRoute {...props} restricted={false} path="/the_team" exact component={TheTeam} />
          <PublicRoute {...props} restricted={false} path="/the_matches" exact component={TheMatches} />
          <PublicRoute {...props} restricted={false} path="/" exact component={Home} />
          

        </Switch>
    </Layout>
  )
}

export default Routes;
