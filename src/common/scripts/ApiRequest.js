export class ApiRequest {
    static create(url) {
       return new ApiRequest(url);
    }

    constructor(url) {
        this.url = url;
    }

    get(onSuccess, onError) {
        const tokenStr = localStorage.getItem('TOKEN');
        const token = tokenStr ? JSON.parse(tokenStr) : "";

        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.url);
        xhr.setRequestHeader('Authorization', `Bearer ${token.accessToken}`);
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