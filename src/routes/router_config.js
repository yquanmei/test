import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import routes from './index';

export default ({ history, app }) => {
  return (
    <Router history={history}>
      <Switch>
        {
          routes.map(({ path, ...dynamics }, index) => (
            <Route
              key={index}
              path={path}
              exact
              component={dynamic({
                app,
                ...dynamics,
              })}
            />
          ))
        }
      </Switch>
    </Router>
  );
};
