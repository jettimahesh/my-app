import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
blogdata:any=[];

constructor(private blogData:BlogService){
this.blogData.getBlog().subscribe(
  (data:any)=>{
    this.blogdata = data;
  },
  (err:any)=>{
    alert("internal error")
  }
)
}
}
