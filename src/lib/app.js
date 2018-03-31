import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { dynamicImport } from './utils/dynamicImport';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import LoginPage from './pages/LoginPage';
// import ShowPage from './pages/ShowPage';
// import FourOhFourPage from './pages/FourOhFourPage';

const customizedApp = (siteConfig) => {
    console.log(siteConfig);
    const HomePage = dynamicImport('pages/HomePage', siteConfig) || require('./pages/HomePage').default;
    const AboutPage = dynamicImport('pages/AboutPage', siteConfig) || require('./pages/AboutPage').default;
    const LoginPage = dynamicImport('pages/LoginPage', siteConfig) || require('./pages/LoginPage').default;
    const ShowPage = dynamicImport('pages/ShowPage', siteConfig) || require('./pages/ShowPage').default;
    const FourOhFourPage = dynamicImport('pages/FourOhFourPage', siteConfig) || require('./pages/FourOhFourPage').default;

    return () => {
        return (
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/about' component={AboutPage}/>
                <Route exact path='/login' component={LoginPage}/>
                <Route exact path='/:identifier/:claim' component={ShowPage}/>
                <Route exact path='/:claim' component={ShowPage}/>
                <Route component={FourOhFourPage}/>
            </Switch>
        );
    };
}

export default customizedApp;
