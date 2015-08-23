'use strict';

import Reflux               from 'reflux';
import TimelineActions    from '../actions/TimelineActions';

var key = require('../config/keys.json');

var TimelineStore = Reflux.createStore({

    init() {
        this.tweets = null;
        this.likes = null;
        this.listenTo(TimelineActions.ListAllMyTimeline, this.onListAllMyTimeline);
        this.listenTo(TimelineActions.LikeClick, this.onLikeClick);
        this.listenTo(TimelineActions.PostLikes, this.onPostLikes);
    },

    setMyTweets( tweets, cb = function(){} ) {
        this.tweets = tweets;
        cb(null, this.tweets);
        this.trigger(null, this.tweets);
    },

    setMyLikes( likes, cb = function(){} ) {
        this.likes = likes;
        cb(null, this.likes);
        this.trigger(null, this.likes);
    },

    throwError(err, cb) {
        cb(err);
        this.trigger(err);
    },

    onListAllMyTimeline(cb = function(){}){
        $.ajax({
            url: 'https://api.parse.com/1/classes/post?include=usersId&order=-createdAt&limit=30',
            dataType: 'json',
            contentType: "application/json",
            type: 'GET',
            headers: { 'X-Parse-Application-Id': key.applicationid, 'X-Parse-REST-API-Key': key.restapi }
        })
        .done((data) => {
            this.setMyTweets(data.results, cb);
        });
    },

    onLikeClick(objectId){
        var data = {
            "postId" :{
                "__type" : "Pointer",
                "className" : "post",
                "objectId" : objectId
            },
            "usersId" :{
                "__type" : "Pointer",
                "className" : "users",
                "objectId" : localStorage.getItem('key')
            }
        };

        $.ajax({
            dataType: 'json',
            contentType: "application/json",
            type: 'POST',
            url: 'https://api.parse.com/1/classes/like',
            data: JSON.stringify(data),
            headers: { 'X-Parse-Application-Id': key.applicationid, 'X-Parse-REST-API-Key': key.restapi },
            success: function(data) {
                toastr.success('Tweet Like', 'Success');
            },
            error: function(data){
                toastr.error(data.responseJSON.error, 'Error');
            }
        })
        .done((data) => {
            this.onListAllMyTimeline();
        });
    },

    onPostLikes(tweetId, cb = function(){} ){
        var data = {
            "postId" :{
                "__type" : "Pointer",
                "className" : "post",
                "objectId" : tweetId
            }};

        $.ajax({
            dataType: 'json',
            contentType: "application/json",
            type: 'GET',
            url: 'https://api.parse.com/1/classes/like?where=' + JSON.stringify(data),
            headers: { 'X-Parse-Application-Id': key.applicationid, 'X-Parse-REST-API-Key': key.restapi }
        })
        .done((data) => {
            this.setMyLikes(data.results, cb);
        });
    }

});

export default TimelineStore;
