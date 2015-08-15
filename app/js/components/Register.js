'use strict';

import React         from 'react/addons';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

import RegisterStore from '../stores/RegisterStore';
import RegisterActions from '../actions/RegisterActions';

var Register = React.createClass({

    getInitialState() {
        return (
            { value : '', setState : RegisterStore.getState() }
        );
    },

    componentDidMount(){
        RegisterStore.listen(this.onChange);
    },

    componentWillUnmount(){
        RegisterStore.unlisten(this.onChange);
    },

    _onChange(e) {
        this.setState({
            value: e.target.value
        });
        console.log(this.state.value);
    },

    handleSubmit(event){
        event.preventDefault();
        var email = this.state.value;
        if ( email ) {
            RegisterActions.addCharacter(email);
        }
    },

    render() {
        return (
            <DocumentTitle title="Register">
                <section className="search-page">
                    <div className="container">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <input type="text" placeholder="Email" className="form-control" value={this.state.value} onChange={this._onChange} autoFocus />
                            </div>
                            <button type="submit" className="btn btn-success">Register</button>
                        </form>
                    </div>
                </section>
            </DocumentTitle>
        );
    }
});

export default Register;
