import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { }


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
private Posts$: Observable<Post[]> = this.postService.getPost();

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

getPost(){
 this.postService.getPost();
}

}
