import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PostService } from "./../post.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  public categories$: Observable<any>;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private postSrvc: PostService) {}


  ngOnInit() {
    this.categories$ = this.postSrvc.fetchPostCategories();
  }

}
