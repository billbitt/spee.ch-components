import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import ShowPage from './pages/ShowPage';
import FourOhFourPage from './containers/FourOhFourPage';

const App = () => {
  // console.log(siteConfig);
  // import HomePage from './pages/HomePage';
  // import { dynamicImport } from './utils/dynamicImport';
  // const HomePage = dynamicImport('pages/HomePage', config); // || require('./pages/HomePage').default;
  // const AboutPage = dynamicImport('pages/AboutPage', config); // || require('./pages/AboutPage').default;
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/:identifier/:claim' component={ShowPage} />
      <Route exact path='/:claim' component={ShowPage} />
      <Route component={FourOhFourPage} />
    </Switch>
  );
};

export default App;
