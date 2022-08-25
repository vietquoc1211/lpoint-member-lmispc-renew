import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../core/_services';
@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.css']
})
export class AccountUserComponent implements OnInit {

  constructor(private router: Router,private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/users/login']);
  }
}
