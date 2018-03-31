import React from 'react';
import { Route, Switch } from 'react-router-dom';

const customizedApp = (siteConfig) => {
    import { dynamicImport } from './utils/dynamicImport';
    console.log(siteConfig);
    const HomePage = dynamicImport('pages/HomePage', siteConfig);
    const AboutPage = dynamicImport('pages/AboutPage', siteConfig);
    import LoginPage from './pages/LoginPage';
    import ShowPage from './pages/ShowPage';
    import FourOhFourPage from './containers/FourOhFourPage';

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
