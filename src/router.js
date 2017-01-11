import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from "./routes/UserManager";

import Login from "./routes/Login";




import ProjectManager from "./routes/ProjectManager";




function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Login} />
      <Route path="/pm" component={ProjectManager} />
    </Router>
  );
}

export default RouterConfig;
