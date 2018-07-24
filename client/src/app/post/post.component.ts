import { Component, OnInit } from '@angular/core';

import { PostService } from '../shared/post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.postService.selectedPost = {
      _id: '',
      title: ''
    };
  }
}
