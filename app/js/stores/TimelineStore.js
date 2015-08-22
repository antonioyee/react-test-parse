'use strict';

import Reflux               from 'reflux';
import TimelineActions    from '../actions/TimelineActions';

var key = require('../config/keys.json');

var TimelineStore = Reflux.createStore({

    init() {
        this.tweets = null;
        this.listenTo(TimelineActions.ListAllMyTimeline, this.onListAllMyTimeline);
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

    onListAllMyTimeline(cb = function(){}){
        var data = {
            "usersId" :
                {
                    "__type" : "Pointer",
                    "className" : "users",
                    "Pointer" : "name"
                }
            };


        $.ajax({
            url: 'https://api.parse.com/1/classes/post?include=usersId&order=-createdAt&limit=30',
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
    },

});

export default TimelineStore;
