var key = require('../config/keys.json');

var MixinsLike = {
    getInitialState: function() {
		return {myLikes: []};
	},
    loadDataApiService: function() {
        var data = {
            "postId" :{
                "__type" : "Pointer",
                "className" : "post",
                "objectId" : this.props.tweetId
            }};

		$.ajax({
            type: 'GET',
			url: 'https://api.parse.com/1/classes/like?include=usersId&where=' + JSON.stringify(data),
			dataType: 'json',
            contentType: "application/json",
            headers: { 'X-Parse-Application-Id': key.applicationid, 'X-Parse-REST-API-Key': key.restapi },
			cache: false,
			success: function(data) {
				this.setState({myLikes: data.results });
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.url, status, err.toString());
			}.bind(this)
		});
	},
    componentDidMount: function() {
        this.loadDataApiService();
	},
};

module.exports = MixinsLike;
