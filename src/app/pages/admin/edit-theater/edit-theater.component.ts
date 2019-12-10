import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "../../../_services";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-edit-theater",
  templateUrl: "./edit-theater.component.html",
  styleUrls: ["./edit-theater.component.css"]
})
export class EditTheaterComponent implements OnInit {
  editTheaterForm: FormGroup;
  loading = false;
  detail;
  id;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    public router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = +this.activeRoute.snapshot.paramMap.get("id");
    this.dataService.getTheaterDetail(this.id).subscribe(
      data => {
        this.detail = data;
        // console.log(data);
      },
      error => {
        console.log("error", error);
      }
    );
    this.editTheaterForm = this.formBuilder.group({
      title: ["", Validators.required],
      latitude: ["", Validators.required],
      longtitude: ["", Validators.required]
    });
  }

  get f() {
    return this.editTheaterForm.controls;
  }
  onSubmit() {
    // stop here if form is invalid
    if (this.editTheaterForm.invalid) {
      return;
    }
    // console.log(this.f);

    this.loading = true;
    // console.log("form value", this.adminLoginForm.value);
    this.dataService
      .putUpdateTheater(this.id, {
        title: this.f.title.value,
        latitude: this.f.latitude.value,
        longtitude: this.f.longtitude.value
      })
      .subscribe(
        data => {
          this.loading = false;
          this.editTheaterForm.reset();
          this.router.navigate(["/admin/theaters/"]);
        },
        error => {}
      );
  }
}
