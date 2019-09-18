import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';



@Component({
    templateUrl: './write.component.html'
})

export class WriteComponent implements OnDestroy {
    blogPostSub: Subscription;
    subject = '';
    post = ''; // our post that we want to edit

    editorOptions = {
        placeholderText: "Type your blog post here ",
        heightMin: 200
    };

    constructor(private http: HttpClient) { }

    ngOnDestroy() {
        if (this.blogPostSub != undefined) {
            this.blogPostSub.unsubscribe();
        }
    }

    handlePostChange(post) {
        console.log(post);
        this.post = post;
    }

}