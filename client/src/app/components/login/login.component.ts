import { HttpClient } from '@angular/common/http';
import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Router} from '@angular/router';
import { Observable ,  Subscription } from 'rxjs';
import { AuthService } from '../../services/authservice/authentication.service';
import { loginModel } from '../../models/login.model'

@Component({
    templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit{
    constructor(
        private http: HttpClient, 
        private authService:AuthService, 
        private router:Router
    ) { 


    }

    @Input() user:loginModel;
    
    loginUser = () => {
        this.authService.loginUser(this.user);
    }
    
    ngOnInit():void{
        this.user = new loginModel();
    }
}