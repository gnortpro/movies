import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  movies = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getListMovies().subscribe((data: any[]) => {
      this.movies = data;
      // console.log(this.movies);
    });
  }
}
