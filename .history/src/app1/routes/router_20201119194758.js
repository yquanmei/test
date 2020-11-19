import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
// import imgPath from 'assets/js/transImg';
import routes from './index';
import ErrorBoundary from "@/exception/ErrorBoundary";
// import './router.less';

export default ({ history, app }) => {
  // func：跳转到首页
  // const toHome = () => {
  //   const userType = sessionStorage.getItem('userType');
  //   if (!userType) return;
  //   // window.location.href = conUserTypeRouter[userType] || '/login'
  // };
  return (
    <Router history={history}>
      <ErrorBoundary>
        {/* <img id="banner-img" className="banner-img" src={imgPath.bannerImg} alt="banner" /> */}
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
      </ErrorBoundary>
    </Router>
  );
};
