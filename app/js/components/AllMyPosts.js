'use strict';

import React                from 'react/addons';
import {ListenerMixin}      from 'reflux';
import DocumentTitle        from 'react-document-title';
import AllMyPostsActions    from '../actions/AllMyPostsActions';
import AllMyPostsStore      from '../stores/AllMyPostsStore';
import ItemTweet            from './ItemTweet';

var AuthenticatedRouteMixin = require('../mixins/AuthenticatedRouteMixin');

var AllMyPosts = React.createClass({

    mixins: [AuthenticatedRouteMixin, ListenerMixin],

    getInitialState() {
        return {
            myTweets: {}
        };
    },

    _onTweetsChange(err, tweets) {
        if ( err ) {
            this.setState({ error: err });
        } else {
            this.setState({ myTweets: tweets || {}, error: null });
        }
    },

    componentDidMount() {
        this.listenTo(AllMyPostsStore, this._onTweetsChange);
        AllMyPostsActions.ListAllMyPosts();
    },

    render: function () {
        if ( this.state.myTweets.length > 0 ) {
            var listAllMyPosts = this.state.myTweets.map(function(item, index) {
                return <ItemTweet key={item.objectId} data={item} />
            });
        }else{
            var listAllMyPosts = <div className="col-sm-12">
                                    <div className="well">
                                        <p>You have an empty timeline</p>
                                    </div>
                                </div>
        }

        return (
            <DocumentTitle title="All My Posts">
                <section className="search-page">
                    <div className="container">
                        <div className="row">
                            {listAllMyPosts}
                        </div>
                    </div>
                </section>
            </DocumentTitle>
        );
    }

});

export default AllMyPosts;
