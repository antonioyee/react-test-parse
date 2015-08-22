'use strict';

import React            from 'react/addons';
import TimelineActions  from '../actions/TimelineActions';
import TimelineStore    from '../stores/TimelineStore';

var RowsTimeline = React.createClass({

    propTypes: {
        data: React.PropTypes.object
    },

    getInitialState: function () {
        return ({
            data : this.props.data
        });
    },

    render: function () {
        return (
            <div className="col-sm-12">
                <div className="thumbnail">
                    <div className="caption">
                        <h3>
                            <span className="glyphicon glyphicon-user"></span> {this.props.data.usersId.name}
                        </h3>
                        <p>{this.props.data.tweet}</p>
                    </div>
                </div>
            </div>
        );
    }

});

export default RowsTimeline;
