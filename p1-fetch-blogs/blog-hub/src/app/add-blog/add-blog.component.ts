import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent{

  blog: Blog = {};

  @Output()
  addBlog:EventEmitter<Blog>=new EventEmitter<Blog>();

  constructor(private blogService:BlogService) { }

  saveBlog(){
    if (this.blog.title)
    this.blogService.addBlogs(this.blog).subscribe({
      next:data=>{
        this.addBlog.emit(this.blog);
        alert("Blog Added Successfully");
        this.blog={};
      },
      error:e=>{
        alert("Failed to Fetch Blog due to Network Error");
      }
    });
  }

  
}
