import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../_services";
import { MatSnackBar } from "@angular/material";
import { SnackBarComponent } from "../../../_layouts/snack-bar/snack-bar.component";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.css"]
})
export class AddMovieComponent implements OnInit {
  createMovieForm: FormGroup;
  loading = false;
  errors;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}

  ngOnInit() {
    this.createMovieForm = this.formBuilder.group({
      title: ["", Validators.required],
      duration: ["", Validators.required],
      cast: ["", Validators.required],
      description: ["", Validators.required],
      image: ["", Validators.required],
      director: ["", Validators.required],
      premiereAt: ["", Validators.required],
      trailer: ["", Validators.required],
      imdbScore: ["", Validators.required]
    });
  }
  get f() {
    return this.createMovieForm.controls;
  }
  onSubmit() {
    // stop here if form is invalid
    if (this.createMovieForm.invalid) {
      return;
    }
    // console.log(this.f);

    this.loading = true;
    // console.log("form value", this.adminLoginForm.value);
    this.dataService
      .postCreateMovie({
        title: this.f.title.value,
        durationMin: this.f.duration.value,
        cast: this.f.cast.value,
        description: this.f.description.value,
        director: this.f.director.value,
        image: this.f.image.value,
        premiereAt: this.f.premiereAt.value,
        trailer: this.f.trailer.value,
        imdbScore: this.f.imdbScore.value
      })
      .subscribe(
        data => {
          this.openSnackBar("Success", "createMovie");
          this.createMovieForm.reset();
          this.loading = false;
          this.router.navigate(["/admin/movies"]);
          // console.log(data);
        },
        error => {
          this.errors = error.errors;
          this.loading = false;
        }
      );
  }
  backToMovie() {
    this.router.navigate(["/admin/movie"]);
  }
  openSnackBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: message,
      panelClass: panelClass,
      duration: 1500
    });
  }
}
