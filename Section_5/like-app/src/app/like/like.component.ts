import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('body') body: string;
  @Input('active') isActive: boolean; 
  @Input('count') count: number; 

  errors: string;

  constructor() { }

  ngOnInit() {
    console.log(this.count);
    if(this.isActive && this.count === 0) this.errors = 'Invalid post!';
  }

  onClick() {
    this.count += this.isActive ? -1 : +1;
    this.isActive = !this.isActive;   
  }

}
