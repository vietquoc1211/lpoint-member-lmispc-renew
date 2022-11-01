import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/_services';
import { User } from './core/_models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'LMIS';
  currentUser?: User| null;

  constructor(
    private authService: AuthenticationService
  ) {
    this.authService.currentUser.subscribe(x => 
      this.currentUser = x
    );
   }

  ngOnInit(): void {

  }

}
