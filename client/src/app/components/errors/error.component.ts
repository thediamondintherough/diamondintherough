import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
    templateUrl:'./error.component.html' //template: loginComponent
})

export class ErrorComponent implements OnInit{

    data: any = {};

    constructor( private translateService: TranslationService ){

    }

    ngOnInit(){
        this.translateService.getJSON().subscribe(data => {
             this.data = data;
         });
    }
    
}
