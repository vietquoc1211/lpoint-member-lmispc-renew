import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/_services';
import { User } from './core/_models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'LMIS';
  currentUser?: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
    
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
