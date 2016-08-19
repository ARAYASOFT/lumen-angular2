import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
    jwt: string;

    endpoint: string = '/api/';

    private contentHeaders: Headers;

    constructor(private http: Http) {
        this.jwt = localStorage.getItem('auth_token');

        this.contentHeaders = new Headers();
        this.contentHeaders.append('Accept', 'application/json');
        this.contentHeaders.append('Content-Type', 'application/json');
    }

    /**
     * Public GET
     * @param action
     * @returns {Observable<Response>}
     */
    get(action: string) {
        return this.http.get(this.endpoint + action);
    }

    /**
     * Public POST
     * @param action
     * @param data
     * @returns {Promise<any>}
     */
    post(action: string, data: Object): Promise<any> {
        return this.http
            .post(
                this.endpoint + action,
                JSON.stringify(data),
                { headers: this.contentHeaders })
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    /**
     * Token secured GET
     * @param action
     * @returns {Promise<any>}
     */
    secureGet(action: string): Promise<any> {
        // headers.append('Authorization', `Bearer ${this.jwt}`);

        return this.http
            .get(
                this.endpoint + action + "?token=" + this.jwt,
                { headers: this.contentHeaders })
            .toPromise()
            .then((response: Response) => response.json().data)
            .catch(this.handleError);
    }

    /**
     * Token secured POST
     * @param action
     * @param data
     * @returns {Promise<any>}
     */
    securePost(action: string, data: Object): Promise<any> {
        return this.http
            .post(
                this.endpoint + action + "?token=" + this.jwt,
                JSON.stringify(data),
                { headers: this.contentHeaders })
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    /**
     * Token secured PUT
     * @param action
     * @param data
     * @returns {Promise<any>}
     */
    securePut(action: string, data: Object) {
        return this.http
            .put(
                this.endpoint + action + "?token=" + this.jwt,
                JSON.stringify(data),
                { headers: this.contentHeaders })
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    /**
     * Token secured DELETE
     * @param action
     * @returns {Promise<any>}
     */
    secureDelete(action: string) {
        return this.http.delete(this.endpoint + action + "?token=" + this.jwt, this.contentHeaders)
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    handleError(error) {
        const errorType = error.json().error;

        if (errorType === "token_expired") {
            localStorage.removeItem(('auth_token'));
            window.location.href = "/login";
        }

        console.error(error);
        return Promise.reject(error.message || error);
    }
}
