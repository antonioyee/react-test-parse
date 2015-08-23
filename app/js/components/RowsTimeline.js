'use strict';

import React            from 'react/addons';
import {ListenerMixin}  from 'reflux';
import TimelineActions  from '../actions/TimelineActions';
import TimelineStore    from '../stores/TimelineStore';

var AuthenticatedRouteMixin = require('../mixins/AuthenticatedRouteMixin');
var MixinsLike = require('../mixins/MixinsLike');

var RowsTimeline = React.createClass({

    mixins: [AuthenticatedRouteMixin, MixinsLike],

    propTypes: {
        tweetId: React.PropTypes.string.isRequired,
        data: React.PropTypes.object
    },

    getInitialState: function () {
        return ({
            data : this.props.data
        });
    },

    onLikeClick(){
        TimelineActions.LikeClick(this.props.data.objectId);
        this.transitionTo('/');
    },

    render: function () {
        var likes = this.state.myLikes;

        var option, usersLikes, msgLikes;
        if ( this.props.data.usersId.objectId == localStorage.getItem('key') ) {
            if ( likes.length == 0 ) { // no tienen LIKE -> EDITAR
                option = <button type="button" className="btn btn-xs btn-warning pull-right"><span className="glyphicon glyphicon-edit"></span> Edit</button>
            }else{
                msgLikes = <span>users like</span>
                var usersLikes = <ul>
                                    {likes.map(function(lk, index) {
                                        return <li>{lk.usersId.name}</li>
                                    })}
                                </ul>
            }
        }else{



            if ( likes.length == 0 ) {
                option = <button onClick={this.onLikeClick} type="button" className="btn btn-xs btn-success pull-right"><span className="glyphicon glyphicon-thumbs-up"></span> Like</button>
            }else{
                var countLikes = likes.length;
                var count = 0;
                likes.map(function(lk, index) {
                    if ( lk.usersId.objectId != localStorage.getItem('key') ) {
                        count++;
                    }
                });

                if ( count == countLikes ) {
                    option = <button onClick={this.onLikeClick} type="button" className="btn btn-xs btn-success pull-right"><span className="glyphicon glyphicon-thumbs-up"></span> Like</button>
                }

                msgLikes = <span>users like</span>
                var usersLikes = <ul>
                                    {likes.map(function(lk, index) {
                                        return <li>{lk.usersId.name}</li>
                                    })}
                                </ul>
            }
            //
        }

        return (
            <div className="col-sm-12">
                <div className="thumbnail">
                    <div className="caption">
                        <h3>
                            <span className="glyphicon glyphicon-user"></span> {this.props.data.usersId.name}
                        </h3>

                        {option}

                        <p>{this.props.data.tweet}</p>

                        <hr></hr>
                        {msgLikes}
                        {usersLikes}
                    </div>
                </div>
            </div>
        );
    }

});

export default RowsTimeline;
