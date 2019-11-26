import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../data.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  movies = [];
  posters = [
    "assets/poster/m1.jpg",
    "assets/poster/m2.jpg",
    "assets/poster/m3.jpg",
    "assets/poster/m4.jpg"
  ];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getListMovies().subscribe((data: any[]) => {
      this.movies = data;
      // console.log(this.movies);
    });
  }
}
