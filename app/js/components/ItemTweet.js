'use strict';

import React                from 'react/addons';
import AllMyPostsActions    from '../actions/AllMyPostsActions';
import AllMyPostsStore      from '../stores/AllMyPostsStore';

var AllMyPosts = React.createClass({

    propTypes: {
        data: React.PropTypes.object
    },

    getInitialState: function () {
        return ({
            data : this.props.data
        });
    },

    onDestroyClick: function() {
        AllMyPostsActions.RemoveTweet(this.props.data.objectId);
    },

    render: function () {
        return (
            <div className="col-sm-12">
                <div className="thumbnail">
                    <div className="caption">
                        <button type="button" onClick={this.onDestroyClick} className="btn btn-xs btn-danger pull-right"><span className="glyphicon glyphicon-trash"></span></button>
                        <p>{this.props.data.tweet}</p>
                    </div>
                </div>
            </div>
        );
    }

});

export default AllMyPosts;
