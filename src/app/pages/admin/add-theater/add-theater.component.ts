import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../../_services";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-add-theater",
  templateUrl: "./add-theater.component.html",
  styleUrls: ["./add-theater.component.css"]
})
export class AddTheaterComponent implements OnInit {
  createTheaterForm: FormGroup;
  loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    public router: Router
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

    this.loading = true;
    // console.log("form value", this.adminLoginForm.value);
    this.dataService
      .createTheater({
        title: this.f.title.value,
        latitude: this.f.latitude.value,
        longtitude: this.f.longtitude.value
      })
      .subscribe(
        data => {
          this.loading = false;
          this.createTheaterForm.reset();
          this.router.navigate(["/admin/theaters/"]);
        },
        error => {}
      );
  }
}
