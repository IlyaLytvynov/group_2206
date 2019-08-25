export class ApiRequest {
    static create(url, options = {}) {
       return new ApiRequest(url, options);
    }

    constructor(url, options) {
        this.url = url;
        this.options = options
    }

    get(onSuccess, onError) {
        const token = this.options.token;

        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.url);
        if (token) {
            xhr.setRequestHeader('Authorization', `Bearer ${token}`);
        }
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    onSuccess(JSON.parse(xhr.response));
                } else {
                    onError(xhr);
                }
            }
        }
    }

    post(data, onSuccess, onError) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', this.url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    onSuccess(JSON.parse(xhr.response));
                } else {
                    onError(xhr);
                }
            }
        }
    }
}