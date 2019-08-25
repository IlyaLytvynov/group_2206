import { ApiRequest } from "../../common/scripts/ApiRequest";

const DEFAULT_TARGET = document.querySelector('body');

export class List {
    constructor(target = DEFAULT_TARGET) {
        this.target = target;
        this.render();
    }

    onSuccess = (resp) => {
        console.log(resp);
    }

    onError = (resp) => {
        console.log(resp);
    }


    render() {
        const button = document.createElement('button');
        button.addEventListener('click', () => {
            ApiRequest
                .create('https://bloggers-crm-dev.herokuapp.com/bloggers?order=asc')
                .get(this.onSuccess, this.onError);
        
        });
        this.target.appendChild(button);
    }
}