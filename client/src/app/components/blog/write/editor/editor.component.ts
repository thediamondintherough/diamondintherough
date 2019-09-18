import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../services/authservice/authentication.service';

@Component({
    selector: 'sg-editor',
    templateUrl: './editor.component.html'
})

export class EditorComponent implements OnInit, OnDestroy {


    constructor() {
    }

    blogs = []


    ngOnInit():void {
        
    }

    ngOnDestroy(){

    }

}