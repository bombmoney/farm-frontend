import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { hot, setConfig } from 'react-hot-loader';
import store from './common/store';
import routeConfig from './common/routeConfig';
import { initializePriceCache } from './features/web3/fetchPrice';
import { Helmet } from 'react-helmet';
import { usePageMeta } from './features/common/getPageMeta';

setConfig({
  logLevel: 'debug',
});

function renderRouteConfigV3(routes, contextPath) {
  // Resolve route config object in React Router v3.
  const children = []; // children component list

  const renderRoute = (item, routeContextPath) => {
    let newContextPath;
    if (/^\//.test(item.path)) {
      newContextPath = item.path;
    } else {
      newContextPath = `${routeContextPath}/${item.path}`;
    }
    newContextPath = newContextPath.replace(/\/+/g, '/');
    if (item.component && item.childRoutes) {
      const childRoutes = renderRouteConfigV3(item.childRoutes, newContextPath);
      children.push(
        <Route
          key={newContextPath}
          render={props => <item.component {...props}>{childRoutes}</item.component>}
          path={newContextPath}
        />
      );
    } else if (item.component) {
      children.push(
        <Route key={newContextPath} component={item.component} path={newContextPath} exact />
      );
    } else if (item.childRoutes) {
      item.childRoutes.forEach(r => renderRoute(r, newContextPath));
    }
  };

  routes.forEach(item => renderRoute(item, contextPath));

  // Use Switch so that only the first matched route is rendered.
  return <Switch>{children}</Switch>;
}

function Root() {
  const children = renderRouteConfigV3(routeConfig, '/');
  const { getPageMeta } = usePageMeta();

  initializePriceCache();

  return (
    <Provider store={store}>
      <Helmet>
        <title>{getPageMeta('App-Meta-Title')}</title>
        <meta name="description" content={getPageMeta('App-Meta-Description')} />
        <meta property="og:title" content={getPageMeta('App-Meta-Title')} />
        <meta property="og:description" content={getPageMeta('App-Meta-Description')} />
        <meta property="og:url" content={process.env.PUBLIC_URL || 'https://vaults.peghub.com'} />
      </Helmet>
      <HashRouter>{children}</HashRouter>
    </Provider>
  );
}

export default hot(module)(Root);
