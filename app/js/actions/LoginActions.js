import alt from '../alt';
var key =  require('../config/keys.json');

class LoginActions {

    getInitialState() {
        return { generateActions: ['loginUserSuccess','loginUserFail','updateEmail','invalidEmail'] };
    }

    loginUser(email){
        var data = {};
            data.email = email;

        $.ajax({
            dataType: 'json',
            contentType: "application/json",
            type: 'GET',
            url: 'https://api.parse.com/1/classes/users?where=' + JSON.stringify(data),
            headers: { 'X-Parse-Application-Id': key.applicationid, 'X-Parse-REST-API-Key': key.restapi }
        })
        .done((data) => {
            if ( data.results.length > 0 ) {

                localStorage.setItem('key', data.results[0].objectId);
                localStorage.setItem('user', data.results[0].email);
                localStorage.setItem('email', data.results[0].email);
                localStorage.setItem('createdAt', data.results[0].createdAt);
                localStorage.setItem('updatedAt', data.results[0].updatedAt);

                toastr.success('Logged On', 'Welcome');
            }else{
                toastr.error('error: No results found', 'Error');
            }
        });
    }

}

export default alt.createActions(LoginActions);
