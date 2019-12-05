import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService } from "../../../_services";
import { MatSnackBar } from "@angular/material";
import { SnackBarComponent } from "../../../_layouts/snack-bar/snack-bar.component";
@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  loading = false;
  createMovieForm: FormGroup;
  displayedColumns: string[] = [
    "ID",
    "Name",
    "Image",
    "Duration",
    "Director",
    "Cast",
    "Description",
    "IMDB",
    "Trailer",
    "PremierAt",
    "action"
  ];
  listMovies;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    public snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.loading = false;
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
    this.getListMovies();
  }
  getListMovies() {
    this.loading = true;
    this.dataService.getListMovies().subscribe(
      (data: { movies: {} }) => {
        this.loading = false;
        this.listMovies = data.movies;
      },
      error => {}
    );
  }
  deleteMovie(id) {
    if (confirm("Bạn muốn xóa phim này?")) {
      this.dataService.deleteMovie(id).subscribe(
        data => {
          this.openSnackBar("Delete Movie Successfully", "createMovie");
          this.getListMovies();
        },
        error => {}
      );
    }
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
          this.getListMovies();
          this.loading = false;
          // console.log(data);
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
