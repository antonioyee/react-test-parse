'use strict';

import Reflux               from 'reflux';
import AllMyPostsActions    from '../actions/AllMyPostsActions';

var key = require('../config/keys.json');

var AllMyPostsStore = Reflux.createStore({

    init() {
        this.tweets = null;
        this.listenTo(AllMyPostsActions.ListAllMyPosts, this.ListAllMyPosts);
    },

    setMyTweets( tweets, cb = function(){} ) {
        this.tweets = tweets;
        cb(null, this.tweets);
        this.trigger(null, this.tweets);
    },

    throwError(err, cb) {
        cb(err);
        this.trigger(err);
    },

    ListAllMyPosts(cb = function(){}){
        if ( this.tweets ) {
            this.setMyTweets(this.tweets, cb);
        }else{
            var data = {};
                data.usersId = localStorage.getItem('key');

            $.ajax({
                url: 'https://api.parse.com/1/classes/post?where=' + JSON.stringify(data),
                dataType: 'json',
                contentType: "application/json",
                type: 'GET',
                headers: { 'X-Parse-Application-Id': key.applicationid, 'X-Parse-REST-API-Key': key.restapi }
            })
            .done((data) => {
                this.setMyTweets(data.results, cb);
            })
            .fail((jqXhr) => {
                this.throwError(data, cb);
            });
        }
    },

});

export default AllMyPostsStore;
