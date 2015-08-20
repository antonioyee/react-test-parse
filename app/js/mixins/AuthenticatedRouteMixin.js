'use strict';

import _                from 'lodash';
import {Navigation}     from 'react-router';
import CurrentUserStore from '../stores/CurrentUserStore';

var AuthenticatedRouteMixin = {

    mixins: [Navigation],

    _checkIfRedirect() {
        if ( _.isEmpty(localStorage.getItem('key')) ) {
            this.transitionTo('/login');
        }
    },

    componentDidMount() {
        this._checkIfRedirect();
    },

    componentDidUpdate() {
        this._checkIfRedirect();
    }

};

export default AuthenticatedRouteMixin;
