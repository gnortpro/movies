import { Component, OnInit } from "@angular/core";
import { User } from "../../../models";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../../../_services";
import { MatSnackBar } from "@angular/material";
import { SnackBarComponent } from "../../../shared/layouts/snack-bar/snack-bar.component";
const user: User[] = [
  {
    id: 1,
    firstName: "Hydrogen",
    lastName: "ABc",
    email: "abc@gmail.com"
  },

  {
    id: 2,
    firstName: "Hydrogen",
    lastName: "ABc",
    email: "abc@gmail.com"
  },
  {
    id: 3,
    firstName: "Hydrogen",
    lastName: "ABc",
    email: "abc@gmail.com"
  }
];
@Component({
  selector: "app-listuser",
  templateUrl: "./listuser.component.html",
  styleUrls: ["./listuser.component.css"]
})
export class ListuserComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "firstName",
    "lastName",
    "email",
    "action"
  ];
  dataSource = user;
  showForm = false;
  addUserForm: FormGroup;
  displayFormAddUser(): void {
    this.showForm = !this.showForm;
  }
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    public snackBar: MatSnackBar
  ) {}
  get f() {
    return this.addUserForm.controls;
  }
  editUser(id: number) {}

  deleteUser(id: number) {}

  cancelFormAddUser(): void {
    this.showForm = false;
    this.addUserForm.reset(); // reset form
  }
  onSubmit() {
    if (this.addUserForm.invalid) {
      return;
    }

    // this.loading = true;
    // console.log("form value", this.adminLoginForm.value);
    this.userService
      .postCreateUser({
        email: this.f.email.value,
        password: this.f.password.value,
        firstName: this.f.firstName.value,
        lastName: this.f.lastName.value,
        avata: this.f.avata.value
      })
      .subscribe(
        data => {
          this.openSnackBar("Successully!", "add-user-success");
          // console.log("add User", data);
        },
        error => {
          this.openSnackBar("Fail!", "add-user-fail");
        }
      );
  }
  openSnackBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: message,
      panelClass: panelClass,
      duration: 1500
    });
  }
  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      avata: ["", Validators.required]
    });
  }
}
