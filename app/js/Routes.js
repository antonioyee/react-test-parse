'use strict';

import React                                from 'react/addons';
import {Route, NotFoundRoute, DefaultRoute} from 'react-router';

import App          from './App';
import Content      from './components/Content';
import NotFound     from './components/NotFound';

export default (
    <Route handler={App} path='/'>

        <DefaultRoute handler={Content} />

        <Route name='Home' path='/' handler={Content} />

        <NotFoundRoute handler={NotFound} />

    </Route>
);
