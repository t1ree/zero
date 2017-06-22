import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
// import RouteDemo from './components/RouteDemo';
// import About from './components/About';
// import {Router, Route, hashHistory} from 'react-router';

render(<App />, document.getElementById('root'));
// render((
    {/*<Router history={hashHistory}>*/}
        {/*<Route path="/" component={App}/>*/}
        {/*<Route path="/route-demo" component={RouteDemo}/>*/}
        {/*<Route path="/about" component={About}/>*/}
    // </Router>
// ), document.getElementById('root'));