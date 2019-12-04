import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService } from "../../../_services";
import { MatSnackBar } from "@angular/material";
import { SnackBarComponent } from "../../../_layouts/snack-bar/snack-bar.component";
@Component({
  selector: "app-theaters",
  templateUrl: "./theaters.component.html",
  styleUrls: ["./theaters.component.css"]
})
export class TheatersComponent implements OnInit {
  createTheaterForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.createTheaterForm = this.formBuilder.group({
      title: ["", Validators.required],
      latitude: ["", Validators.required],
      longtitude: ["", Validators.required]
    });
  }
  get f() {
    return this.createTheaterForm.controls;
  }
  onSubmit() {
    // stop here if form is invalid
    if (this.createTheaterForm.invalid) {
      return;
    }
    // console.log(this.f);

    // this.loading = true;
    // console.log("form value", this.adminLoginForm.value);
    this.dataService
      .createTheater({
        title: this.f.title.value,
        latitude: this.f.latitude.value,
        longtitude: this.f.longtitude.value
      })
      .subscribe(
        data => {
          this.openSnackBar("Success", "createTheater");
          console.log(data);
        },
        error => {}
      );
  }
  openSnackBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: message,
      panelClass: panelClass,
      duration: 1500
    });
  }
}
