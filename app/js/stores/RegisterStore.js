import alt from '../alt';
import RegisterActions from '../actions/RegisterActions';

class RegisterStore {

    getInitialState() {
        this.bindActions(RegisterActions);
        this.email = '';
        this.helpBlock = '';
        this.emailValidationState = '';
    }

    onAddCharacterSuccess(successMessage){
        toastr.error(successMessage);
        /*this.emailValidationState = 'has-success';
        this.helpBlock = successMessage;*/
    }

    onAddCharacterFail(errorMessage){
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

export default alt.createStore(RegisterStore);
