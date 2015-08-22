'use strict';

import React            from 'react/addons';
import {Link}           from 'react-router';
import DocumentTitle    from 'react-document-title';
import {ListenerMixin}  from 'reflux';
import TimelineActions    from '../actions/TimelineActions';
import TimelineStore      from '../stores/TimelineStore';
import RowsTimeline         from './RowsTimeline';

var AuthenticatedRouteMixin = require('../mixins/AuthenticatedRouteMixin');

var Content = React.createClass({

    mixins: [AuthenticatedRouteMixin, ListenerMixin],

    propTypes: {
        currentUser: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            myTimeline: {}
        };
    },

    _onTimelineChange(err, tweets) {
        if ( err ) {
            this.setState({ error: err });
        } else {
            this.setState({ myTimeline: tweets || {}, error: null });
        }
    },

    componentDidMount() {
        this.listenTo(TimelineStore, this._onTimelineChange);
        TimelineActions.ListAllMyTimeline();
    },

    render() {

        if ( this.state.myTimeline.length > 0 ) {
            var mytimeline = this.state.myTimeline.map(function(item, index) {
                return <RowsTimeline key={item.objectId} data={item} />
            });
        }else{
            var mytimeline = <div className="col-sm-12">
                                    <div className="well">
                                        <p>You have an empty timeline</p>
                                    </div>
                                </div>
        }

        return (
            <DocumentTitle title="Home">
                <section className="home-page">
                    <div className="container">
                        <h2>Timeline</h2>
                        {mytimeline}
                    </div>
                </section>
            </DocumentTitle>
        );
    }

});

export default Content;
