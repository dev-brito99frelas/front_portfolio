import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostList } from '../../module/post-list';

@Injectable({
  providedIn: 'root'
})
export class PostListService {
  private url : string = "http://localhost:3333/posts";
  constructor(private http: HttpClient) { }
  public retornaLista(): Observable<Array<PostList>>{
    return this.http.get<Array<PostList>>(this.url).pipe(res => res, error => error);
  }
}
