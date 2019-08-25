import { ApiRequest } from "../../common/scripts/ApiRequest";

const DEFAULT_TARGET = document.querySelector('body');

export class SignUpForm {
    constructor(target = DEFAULT_TARGET) {
        this.target = target;
        this.render();
    }

    onSubmit = (e) => {
        e.preventDefault();
        const url = 'https://bloggers-crm-dev.herokuapp.com/signup';
        const data = {
            "email": this.email.value,
            "password": this.password.value,
            "confirmPassword": this.confirmPassword.value
        };
        
        ApiRequest
            .create(url)
            .post(data, this.onSuccess, this.onError);
    }

    onSuccess = (response) => {
        console.log(response);
    }

    onError = (response) => {
        const message = document.createElement('div');
        message.textContent = JSON.stringify(response);
        this.target.appendChild(message);
    }

    render() {
        this.form = document.createElement('form');
        this.form.addEventListener('submit', this.onSubmit);

        this.email = document.createElement('input');
        this.email.required = true;
        this.email.type = 'email';
        this.email.placeholder = 'email@me.com';

        this.password = document.createElement('input');
        this.password.required = true;
        this.password.type = 'password';
        this.password.placeholder = 'password';

        this.confirmPassword = document.createElement('input');
        this.confirmPassword.required = true;
        this.confirmPassword.type = 'password';
        this.confirmPassword.placeholder = 'Confirm password';
        
        this.submitBtn = document.createElement('button');
        this.submitBtn.textContent = 'Sign up';

        this.form.appendChild(this.email);
        this.form.appendChild(this.password);
        this.form.appendChild(this.confirmPassword);
        this.form.appendChild(this.submitBtn);
        this.target.appendChild(this.form);
    }
}