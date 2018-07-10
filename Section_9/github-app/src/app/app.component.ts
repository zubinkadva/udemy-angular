import { Component, OnInit } from '@angular/core';
import { FollowersService } from './services/followers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  followers: any[];

  constructor(private service: FollowersService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }

}
