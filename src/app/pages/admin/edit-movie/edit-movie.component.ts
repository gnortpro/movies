import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../_services";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { SnackBarComponent } from "src/app/_layouts/snack-bar/snack-bar.component";
@Component({
  selector: "app-edit-movie",
  templateUrl: "./edit-movie.component.html",
  styleUrls: ["./edit-movie.component.css"]
})
export class EditMovieComponent implements OnInit {
  editMovieForm: FormGroup;
  loading = false;
  errors;
  detail;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    public router: Router,
    public snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get("id");
    this.dataService.getMovieDetail(id).subscribe(
      data => {
        this.detail = data;
        // console.log(data);
      },
      error => {
        console.log("error", error);
      }
    );
    this.editMovieForm = this.formBuilder.group({
      title: ["", Validators.required],
      duration: ["", Validators.required],
      cast: ["", Validators.required],
      description: ["", Validators.required],
      image: ["", Validators.required],
      director: ["", Validators.required],
      premiereAt: ["", Validators.required],
      trailer: ["", Validators.required],
      imdbScore: ["", Validators.required],
      type: ["", Validators.required]
    });
  }
  get f() {
    return this.editMovieForm.controls;
  }
  onSubmit() {
    const id = +this.activeRoute.snapshot.paramMap.get("id");
    // stop here if form is invalid
    if (this.editMovieForm.invalid) {
      return;
    }
    // console.log(this.f);

    this.loading = true;
    // console.log("form value", this.adminLoginForm.value);
    this.dataService
      .putUpdateMovie(id, {
        title: this.f.title.value,
        durationMin: this.f.duration.value,
        cast: this.f.cast.value,
        description: this.f.description.value,
        director: this.f.director.value,
        image: this.f.image.value,
        premiereAt: this.f.premiereAt.value,
        trailer: this.f.trailer.value,
        imdbScore: this.f.imdbScore.value,
        type: this.f.imdbScore.value
      })
      .subscribe(
        data => {
          this.openSnackBar("Success", "createMovie");
          this.editMovieForm.reset();
          this.loading = false;
          this.router.navigate(["/admin/movie"]);
          // console.log(data);
        },
        error => {
          console.log("error", error);

          this.errors = error.errors;
          this.loading = false;
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
}
