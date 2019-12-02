import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../../services/data.service";

@Component({
  selector: "app-detailmovie",
  templateUrl: "./detailmovie.component.html",
  styleUrls: ["./detailmovie.component.css"]
})
export class DetailmovieComponent implements OnInit {
  detail;

  slides = [
    { img: "assets/slider/s1.jpg" },
    { img: "assets/slider/s2.jpg" },
    { img: "assets/slider/s3.jpg" },
    { img: "assets/slider/s4.jpg" },
    { img: "assets/slider/s5.jpg" }
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
    responsive: [
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 979, settings: { slidesToShow: 3, slidesToScroll: 3 } }
    ],
    dots: false
  };
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  getMovieDetails() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.dataService.getMovieDetail(id).subscribe((data: { data: {} }) => {
      this.detail = data.data;
      console.log(this.detail);
    });
  }
  ngOnInit() {
    this.getMovieDetails();
  }
}
