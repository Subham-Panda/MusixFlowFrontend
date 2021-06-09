import React from "react";
import { Switch, Route } from "react-router-dom";
import History from "./History";
import Mydashboard from "../page/Mydashboard";
import Inflowmusic from "../page/Inflowmmusic";
import DemoPage from "../page/DemoPage";
import News from "../page/News";
import Leaderboard from "../page/Leaderboard";
import Accountsettings from "../page/Accountsettings";
import Login from "../page/Login";
import Labels from "../page/Labels";
import Rocnations from "../page/Rocnations";
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import Artistpic from "../component/Artistpic";
import Artist from "../component/Artist";


export const AppRoutes = () => {
  return (
    <Switch>
      <PublicRoutes path="/login" component={Login} exact/>
       <PrivateRoutes    path="/" component={Mydashboard} exact />
       <PrivateRoutes path="/inflowmusic" component={Inflowmusic} exact />
       <PrivateRoutes path="/news" component={News} exact />
       <PrivateRoutes path="/leaderboard" component={Leaderboard} exact />
       <PrivateRoutes path="/accountsettings" component={Accountsettings} exact />
       <PrivateRoutes path='/lebels' component={Labels} exact />
       <PrivateRoutes path='/rocnations' component={Rocnations} exact />
       <PrivateRoutes path='/artist' component={Artist} exact />
       <PrivateRoutes path="/demo" component={DemoPage} exact />
       <PrivateRoutes path="/login" component={Login} exact />
    </Switch>
  );
};

// <Route path="/" component={Mydashboard} exact />
//       <Route path="/inflowmusic" component={Inflowmusic} exact />
//       <Route path="/news" component={News} exact />
//       <Route path="/leaderboard" component={Leaderboard} exact />
//       <Route path="/accountsettings" component={Accountsettings} exact />
//       <Route path='/lebels' component={Labels} exact />
//       <Route path='/rocnations' component={Rocnations} exact />
//       <Route path="/demo" component={DemoPage} exact />
//       <Route path="/login" component={Login} exact />
