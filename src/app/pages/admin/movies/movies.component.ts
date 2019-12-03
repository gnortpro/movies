import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService } from "../../../services";
@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  createMovieForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}
  get f() {
    return this.createMovieForm.controls;
  }
  onSubmit() {
    // stop here if form is invalid
    if (this.createMovieForm.invalid) {
      return;
    }
    console.log(this.f);

    // this.loading = true;
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
          console.log(data);
        },
        error => {}
      );
  }
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
}
