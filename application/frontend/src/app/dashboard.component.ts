import { Component,} from '@angular/core';

import {User} from './authentication/User';
import {UserService} from './authentication/user.service'

@Component({

  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent{

  model = new User();

  private userService = new UserService(null);

  onLoginClick() {
    console.log(this.model.username + " " + this.model.password);
    console.log(this.userService.login(this.model.username, this.model.password));
  }
}
