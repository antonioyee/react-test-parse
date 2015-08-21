'use strict';

import Reflux       from 'reflux';
import TweetActions from '../actions/TweetActions';

var key             =  require('../config/keys.json');

var TweetStore = Reflux.createStore({

    init() {
        this.listenTo(TweetActions.postTweetUser, this.postTweetUser);
        this.listenTo(TweetActions.tweetPostSuccess, this.tweetPostSuccess);
        this.listenTo(TweetActions.tweetPostFail, this.tweetPostFail);
    },

    postTweetUser(tweet){
        var data = {};
            data.tweet = tweet;
            data.usersId = localStorage.getItem('key');

        $.ajax({
            dataType: 'json',
            contentType: "application/json",
            type: 'POST',
            url: 'https://api.parse.com/1/classes/post',
            data: JSON.stringify(data),
            headers: { 'X-Parse-Application-Id': key.applicationid, 'X-Parse-REST-API-Key': key.restapi }
        })
        .done((data) => {
            return this.tweetPostSuccess(data.objectId, data.createdAt);
        })
        .fail((jqXhr) => {
            this.tweetPostFail(jqXhr.responseJSON.message);
        });
    },

    tweetPostSuccess(objectId, createdAt){
        toastr.success('code user: ' + objectId + ', created ' + createdAt, 'User Register');
        return true;
    },

    tweetPostFail(msj){
        toastr.success(msj, 'Error');
    },

});

export default TweetStore;
