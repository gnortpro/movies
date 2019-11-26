import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
@Component({
  selector: "app-detailmovie",
  templateUrl: "./detailmovie.component.html",
  styleUrls: ["./detailmovie.component.css"]
})
export class DetailmovieComponent implements OnInit {
  detail;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  getMovieDetails() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.dataService.getMovieDetail(id).subscribe(data => {
      this.detail = data;
      console.log(this.detail);
    });
  }
  // getHero() {
  //   this.dataService.getMovieDetail().subscribe(data => {
  //     this.details = data;
  //     console.log(data);
  //   });
  // }
  ngOnInit() {
    this.getMovieDetails();
  }
}
