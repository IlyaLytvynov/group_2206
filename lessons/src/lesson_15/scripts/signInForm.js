import { ApiRequest } from "../../common/scripts/ApiRequest";
const DEFAULT_TARGET = document.querySelector('body');

export class SignInForm {
    constructor(target = DEFAULT_TARGET) {
        this.target = target;
        this.render();
    }

    onSubmit = (e) => {
        e.preventDefault();
        const url = 'https://bloggers-crm-dev.herokuapp.com/signin';
        const data = {
            "email": this.email.value,
            "password": this.password.value,
        };
        
        ApiRequest
            .create(url)
            .post(data, this.onSuccess, this.onError);
    }

    onSuccess = (response) => {
        console.log(response);
        localStorage.setItem('TOKEN', JSON.stringify(response.data));
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
        
        this.submitBtn = document.createElement('button');
        this.submitBtn.textContent = 'Sign In';

        this.form.appendChild(this.email);
        this.form.appendChild(this.password);
        this.form.appendChild(this.submitBtn);
        this.target.appendChild(this.form);
    }
}