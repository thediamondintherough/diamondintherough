import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { profileModel} from '../../models/profile.model';

@Component({
    templateUrl:'./profile.component.html'
})

export class ProfileComponent {
    
    profile:profileModel;

    constructor() { 
        this.profile = new profileModel();
    }  
}