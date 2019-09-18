import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl:'./blogpost.component.html'
})
export class BlogPostComponent implements OnInit{
    items: {};
    constructor(private http:HttpClient) {

     }

     getPostItems(){

     }
    ngOnInit(): void {
        this.getPostItems();
    }
    
}