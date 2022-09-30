import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/_services';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberme: new FormControl(''),
  });
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private _Toastr: ToastrService
  ) {
    //redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboards']);
    }
  }

  ngOnInit(): void {

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm?.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value || '', this.f.password.value || '')
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from route parameters or default to '/'
          const returnUrl = this.route?.snapshot.queryParams['returnUrl'] || '/dashboards';
          this.router?.navigate([returnUrl]);
        },
        error: error => {
          this.error = error;
          this._Toastr.error(error);
          this.loading = false;
        }
      });
  }
}
