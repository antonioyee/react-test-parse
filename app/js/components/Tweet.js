'use strict';

import React         from 'react/addons';

var Tweet = React.createClass({

    getInitialState: function() {
        return {
            text: ""
        };
    },

    handleChange: function(event) {
        if ( this.state.text.length <= 139) {
            this.setState({ text: event.target.value });
        }
    },

    remainingCharacters: function() {
        return 140 - this.state.text.length;
    },

    render: function() {
        return (
            <div className="well clearfix">
                <textarea className="form-control" onChange={this.handleChange} maxLength={140}></textarea>

                <br/>
                <span>{ this.remainingCharacters() }</span>

                <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0 }>Tweet</button>
            </div>
        );
    }

});

export default Tweet;
