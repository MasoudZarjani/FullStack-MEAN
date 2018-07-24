import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {Post} from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  selectedPost: Post;
  posts: Post[];

  constructor() { }
}
