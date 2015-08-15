import alt from '../alt';
var key =  require('../config/keys.json');

class RegisterActions {

    getInitialState() {
        return { generateActions: ['addCharacterSuccess','addCharacterFail','updateEmail','invalidEmail'] };
    }

    addCharacter(email){
        var data = {};
            data.email = email;

        $.ajax({
            dataType: 'json',
            contentType: "application/json",
            type: 'POST',
            url: 'https://api.parse.com/1/classes/users',
            data: JSON.stringify(data),
            headers: { 'X-Parse-Application-Id': key.applicationid, 'X-Parse-REST-API-Key': key.restapi },
        })
        .done((data) => {
            this.actions.addCharacterSuccess(data.message);
        })
        .fail((jqXhr) => {
            this.actions.addCharacterFail(jqXhr.responseJSON.message);
        });
    }

}

export default alt.createActions(RegisterActions);
