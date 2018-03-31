import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { dynamicImport } from './utils/dynamicImport';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import LoginPage from './pages/LoginPage';
// import ShowPage from './pages/ShowPage';
// import FourOhFourPage from './containers/FourOhFourPage';

const customizedApp = (siteConfig) => {
    console.log(siteConfig);
    const HomePage = dynamicImport('pages/HomePage', siteConfig);
    const AboutPage = dynamicImport('pages/AboutPage', siteConfig);
    const LoginPage = dynamicImport('pages/LoginPage', siteConfig);
    const ShowPage = dynamicImport('pages/ShowPage', siteConfig);
    const FourOhFourPage = dynamicImport('pages/FourOhFourPage', siteConfig);

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
