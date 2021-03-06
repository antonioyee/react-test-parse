'use strict';

import React                                from 'react/addons';
import {Route, NotFoundRoute, DefaultRoute} from 'react-router';

import App          from './App';
import Content      from './components/Content';
import Register     from './components/Register';
import Login        from './components/Login';
import Profile      from './components/Profile';
import Tweet        from './components/Tweet';
import AllMyPosts   from './components/AllMyPosts';
import NotFound     from './components/NotFound';

export default (
    <Route handler={App} path='/'>

        <DefaultRoute handler={Content} />

        <Route name='Home' path='/' handler={Content} />
        <Route name='Register' path='/register' handler={Register} />
        <Route name='Login' path='/login' handler={Login} />
        <Route name='Profile' path='/profile' handler={Profile} />
        <Route name='Tweet' path='/tweet' handler={Tweet} />
        <Route name='AllMyPosts' path='/all-my-posts' handler={AllMyPosts} />

        <NotFoundRoute handler={NotFound} />

    </Route>
);
