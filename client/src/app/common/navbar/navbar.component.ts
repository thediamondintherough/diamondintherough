import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
// import { TranslateService } from '@ngx-translate/core';

import { AuthService } from '../../services/authservice/authentication.service';
 import { TranslationService } from '../../services/translation/translation.service';


export function services(): any {

    return [
        AuthService
    ]
}

@Component({
    selector:'navbar',
    templateUrl:'./navbar.component.html', //template: navbarComponent,
    providers: services()
})

export class NavbarComponent implements OnInit, OnDestroy {
    logoutSubscription:Subscription;
    data: any = {};

    constructor(private http:HttpClient, private authService: AuthService, private translateService: TranslationService){

    }

    ngOnInit(){
        this.translateService.getJSON().subscribe(data => {
             this.data = data;
         });
    }
    
    isUserLoggedIn = () =>{
        return this.authService.getIsLoggedIn();   
    }

    logout = () => {
        this.authService.logout();
    }
    ngOnDestroy() {
        if (this.logoutSubscription != undefined) {
            this.logoutSubscription.unsubscribe();
        }
    }
}