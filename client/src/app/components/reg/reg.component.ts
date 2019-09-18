import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {UserRegistration } from '../../models/reg.model';
import { AppSettings } from './../../common/config';

@Component({
    templateUrl:'./reg.component.html'
})

export class RegComponent implements OnDestroy{
    @Input() user: UserRegistration;
    errorMessage = '';
    
    constructor(private http:HttpClient){
        this.user = new UserRegistration();
    }

    registeration: {
        
    }
    reg :Subscription

    // ngOnInit(): void {
    //     this.registeration = new FormGroup({
    //         'username': new FormControl(this.user.username, [
    //             Validators.required,
                
    //         ])
    //     })
    // }

    onSubmit(form:NgForm){
        this.reg = this.http.post(AppSettings.API_SERVER + '/api/users/register', this.user).subscribe((res) => {
            // success status code 2xx
            this.errorMessage = '';
            form.reset();
        }, (error) => {
            // non success status code
            this.errorMessage = error.json().message;
        });

    }
    ngOnDestroy(){
        if(this.reg != undefined){
            this.reg.unsubscribe()
        }
    }
    
}