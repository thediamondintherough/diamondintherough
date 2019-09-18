import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/authservice/authentication.service';

@Injectable()
export class EditorService implements OnInit, OnDestroy {

  article: {
    title: string;
    author: string;
    content: string;
    published: Date;
  };

  newArticleData: object;
  editArticleData: object;

  constructor(
    private auth: AuthService,
    private http: HttpClient
  ) {

  }


  // saveArticle() {
  //   this.http.get(`blogGet`).subscribe(res => {
  //     console.log(res)
  //   }, err => {
  //     console.log(err);
  //   })
  // }

  // this.articleTaskRunner(this.article)

  articleTaskRunner(articleData: object) {
    let articleSchema = {
      title: this.article.title,
      author: this.auth.getUsername(),
      // authorId: this.auth
      content: this.article.content,
      published: new Date()
    }

    // if () {
    //   this.newArticleData = articleSchema;
    // } else {
    //   this.editArticleData = articleSchema;
    // }

    // if () {
    //   articleData = this.newArticleData;
    // } else {
    //   articleData = this.editArticleData;
    // }

    // return articleData;
  }

  ngOnInit(){

  }
  ngOnDestroy(){

  }
}
