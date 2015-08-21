'use strict';

import Reflux from 'reflux';

var TweetActions = Reflux.createActions([
    'postTweetUser',
    'tweetPostSuccess',
    'tweetPostFail'
]);

export default TweetActions;
