import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppSettings } from '../../common/config';

@Component({
    templateUrl: './contact.component.html'
})

export class ContactComponent implements OnDestroy {

    subscribe: Subscription;
    showForm = true;
    showSuccessMsg = false;
    showErrorMsg = false;

    constructor(private http: HttpClient) { }

    onSubmit(contactForm: NgForm) {
        console.log(contactForm);
        this.subscribe = this.http.post(AppSettings.API_SERVER + '/api/contact', contactForm.value, {observe: "response"})
            .subscribe(res => {
                if (res.status === 200) {
                    contactForm.reset();
                    this.showForm = false;
                    this.showSuccessMsg = true;
                };
            },
                err => {
                    if(err.message) {
                        this.showForm = false;
                        this.showErrorMsg = true;
                    }
                    console.log(err);
                })
    }

    ngOnDestroy() {
        if (this.subscribe) {
            this.subscribe.unsubscribe()
        }
    }
}