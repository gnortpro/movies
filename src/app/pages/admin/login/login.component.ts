import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "../../../services";
import { first } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  adminLoginForm: FormGroup;
  returnUrl: string;
  loading = false;
  error = "";
  constructor(
    private formBuilder: FormBuilder,
    // private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/admin"]);
    }
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.adminLoginForm.controls;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.adminLoginForm.invalid) {
      return;
    }
    this.loading = true;
    // console.log("form value", this.adminLoginForm.value);
    this.authenticationService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
  }
  ngOnInit() {
    this.adminLoginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/admin";
  }
}
