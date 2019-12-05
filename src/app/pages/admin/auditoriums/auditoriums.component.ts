import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "../../../_services";
import { MatSnackBar } from "@angular/material";
import { SnackBarComponent } from "../../../_layouts/snack-bar/snack-bar.component";
@Component({
  selector: "app-auditoriums",
  templateUrl: "./auditoriums.component.html",
  styleUrls: ["./auditoriums.component.css"]
})
export class AuditoriumsComponent implements OnInit {
  loading = false;
  createAuditoriumForm: FormGroup;
  listAuditoriums;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    public snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.createAuditoriumForm = this.formBuilder.group({
      title: ["", Validators.required]
    });
    this.getListAudit();
  }

  getListAudit() {
    this.loading = true;
    const id = +this.activeRoute.snapshot.paramMap.get("theaterID");
    this.dataService.getAuditoriumList(id).subscribe(
      data => {
        this.listAuditoriums = data;
        this.loading = false;
      },
      error => {}
    );
  }

  get f() {
    return this.createAuditoriumForm.controls;
  }
  onSubmit() {
    const id = +this.activeRoute.snapshot.paramMap.get("theaterID");
    // stop here if form is invalid
    if (this.createAuditoriumForm.invalid) {
      return;
    }
    this.loading = true;
    this.dataService
      .createAuditoriumByTheaterID(
        { theaterID: id },
        { title: this.f.title.value }
      )
      .subscribe(
        data => {
          this.openSnackBar("Success", "createAuditorium");
          this.createAuditoriumForm.reset();
          this.getListAudit();
          this.loading = false;
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
