import { Component, OnInit } from "@angular/core";

import { DataService } from "../../../_services";
import { MatSnackBar } from "@angular/material";
import { SnackBarComponent } from "../../../_layouts/snack-bar/snack-bar.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  loading = false;

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
    private dataService: DataService,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}
  ngOnInit() {
    this.loading = false;

    this.getListMovies(10, 1);
  }
  getListMovies(limit: number, page: number) {
    this.loading = true;
    this.dataService.getListMovies(limit, page).subscribe(
      (data: { movies: {} }) => {
        this.loading = false;
        this.listMovies = data.movies;
      },
      error => {}
    );
  }
  addNewMovie() {
    this.router.navigate(["/admin/new-movie"]);
  }
  deleteMovie(id) {
    if (confirm("Bạn muốn xóa phim này?")) {
      this.dataService.deleteMovie(id).subscribe(
        data => {
          this.openSnackBar("Delete Movie Successfully", "createMovie");
          this.getListMovies(5, 1);
        },
        error => {}
      );
    }
  }

  openSnackBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: message,
      panelClass: panelClass,
      duration: 1500
    });
  }
}
