import { Component, OnInit } from '@angular/core';
import { PostList } from 'src/app/module/post-list';
import { PostListService } from './post-list.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public lista_de_Post: Array<PostList> = [];


  constructor(private postList: PostListService) { }

  ngOnInit(): void {
    this.postList.retornaLista().subscribe(
      res => this.lista_de_Post = res, error => console.log(error)
    );
  }

}
