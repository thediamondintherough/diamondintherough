import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { AppSettings } from './../../common/config';
import { contentHeaders } from './../../common/headers';
import { loginModel } from './../../models/login.model';
import { getSingleError } from '../../common/error';


@Injectable()
export class AuthService {

    public errorText: string;
    public isLoggedIn: boolean;
    public jwtToken: string;
    public username: string;

    public attemptingToLogIn: boolean;
    public redirectUrl: string;


    constructor(
        private router: Router,
        private http: HttpClient,
        private translateService: TranslateService,
    ) {
        /**
     * attempt to load the token and profile from local storage. if either cannot be found, reset both fields.
     * @type {any}
     */

        const clientJWT = localStorage.getItem(AppSettings.JWT_TOKEN_KEY);
        const username = localStorage.getItem(AppSettings.USERNAME);
        const clientProfile = localStorage.getItem(AppSettings.PROFILE_KEY);

        if (clientJWT) {
            this.loginHelper({token: clientJWT, username});
        } else {
            this.reset();
        }
    }



    reset(): void {


        this.isLoggedIn = false;
        this.attemptingToLogIn = false;
        this.jwtToken = null;

        this.errorText = null;

        localStorage.clear();
    }

    loginHelper(response: object): void {
        this.isLoggedIn = true;
        this.jwtToken = response['token'];
        this.username = response['username'];

        // persist to cache
        localStorage.setItem(AppSettings.JWT_TOKEN_KEY, this.jwtToken);
        localStorage.setItem(AppSettings.USERNAME, response['username']);
    }

    getIsLoggedIn() {
        return this.isLoggedIn
    }

    loginUser(user: loginModel) {
        /* prevent simultaneous logins and race conditions */
        if (this.attemptingToLogIn) {
            return;
        }
        this.attemptingToLogIn = true;

        return this.http.post(AppSettings.API_SERVER + '/api/login/authenticate', user, { headers: contentHeaders })
            .subscribe(
                response => {
                    this.reset();

                    this.loginHelper(
                        response
                    );

                    let navigateTarget = '/';

                    if (this.redirectUrl) {
                        navigateTarget = this.redirectUrl;
                        this.redirectUrl = null;
                    }
                    this.router.navigate([navigateTarget]);
                },
                (error) => {
                    this.reset();

                    this.errorText = this.translateService.instant(
                        getSingleError(error),
                      );
                }
            )
    }
    logout() {
        this.reset();

        this.router.navigate(['/']);

    }

    getAuthHeader(headers: HttpHeaders): HttpHeaders {
        // if our current token is expired
        const headersWithAuth = headers.append('Authorization', 'Bearer ' + this.getToken());

        return headersWithAuth;
    }

    getToken(): string {
        return this.jwtToken;
    }

    getUsername(): string {
        return this.username;
    }
}