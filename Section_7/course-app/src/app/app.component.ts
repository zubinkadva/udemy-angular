import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  categories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Languages'}
  ];

  submit(f) {
    let vals = 'Name: ' + f.name + '\nCategory: ' + f.category.name + '\nGuarantee?: ' + (f.hasGuarantee ? 'Y' : 'N');
    alert(vals); 
  }

}
