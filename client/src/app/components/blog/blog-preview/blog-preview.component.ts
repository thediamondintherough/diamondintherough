import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './../../../common/config';


@Component({
    templateUrl:'./blog-preview.component.html'
})
export class BlogPreviewComponent implements OnInit{
    

    items: {};
    constructor(private http:HttpClient) {

     }

     getBlogItems(){
        this.http.get( AppSettings.API_SERVER + '/api/blogGet/listings')
        .subscribe(res => {
            console.log(res)
        }, err => {
            console.log(err);
        })
     }
    ngOnInit(): void {
        this.getBlogItems();
    }
    
}