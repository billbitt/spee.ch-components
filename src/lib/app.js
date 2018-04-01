import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { dynamicImport } from './utils/dynamicImport';

const customizedApp = ({customPages}) => {
    console.log('customPages:', customPages);
    // note: update this to only take in a custom page config and not the whole siteConfig,
    // otherwise client might receive sensative data from siteConfig
    const HomePage = dynamicImport('HomePage', customPages) || require('./pages/HomePage').default;
    const AboutPage = dynamicImport('AboutPage', customPages) || require('./pages/AboutPage').default;
    const LoginPage = dynamicImport('LoginPage', customPages) || require('./pages/LoginPage').default;
    const ShowPage = dynamicImport('ShowPage', customPages) || require('./pages/ShowPage').default;
    const FourOhFourPage = dynamicImport('pages/FourOhFourPage', customPages) || require('./pages/FourOhFourPage').default;

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
};

export default customizedApp;
