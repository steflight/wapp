import { Component } from '@angular/core';
import { PostService } from "./../post.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor( private postSrvc: PostService,
    private router: Router,
    private route: ActivatedRoute){}

    post$ : Observable<any>;

    loadPost(post : any){
      this.router.navigate(["/post",post.id]);
    }

    ngOnInit() {
      this.post$ = this.route.paramMap.pipe(
        switchMap(
          (params: ParamMap) =>
            params.get("category")
              ? this.postSrvc.fetchPostsByCategory(params.get("category"))
              : this.postSrvc.fetchPosts()
        )
      );
    }

}
