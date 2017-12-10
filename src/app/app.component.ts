import { Component } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  confirm = null;
  confirmname = null;

  title = "Account Info"
  users = [];
  user = new User()

  onSubmit() {
    this.confirm = "Thank you for registering with us ";
    this.confirmname = this.user.fName + '.';
    this.users.push(this.user);
    this.user = new User();
    console.log(this.users);
  }
}
