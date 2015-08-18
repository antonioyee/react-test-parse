import alt from '../alt';
import LoginActions from '../actions/LoginActions';

class LoginStore {

    getInitialState() {
        this.bindActions(LoginActions);
        this.email = '';
        this.helpBlock = '';
        this.emailValidationState = '';
    }

    onloginUserSuccess(successMessage){
        this.emailValidationState = 'has-success';
        this.helpBlock = successMessage;
    }

    onloginUserFail(errorMessage){
        this.emailValidationState = 'has-error';
        this.helpBlock = errorMessage;
    }

    onUpdateEmail(event){
        this.email = event.target.value;
        this.emailValidationState = '';
    }

    onInvalidEmail(){
        this.emailValidationState = 'has-error';
    }

}

export default alt.createStore(LoginStore);
