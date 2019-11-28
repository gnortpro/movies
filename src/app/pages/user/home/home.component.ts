import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../data.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  movies;
  events;
  posters = [
    "assets/poster/m1.jpg",
    "assets/poster/m2.jpg",
    "assets/poster/m3.jpg",
    "assets/poster/m4.jpg"
  ];
  carouselOptions = {
    margin: 25,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    // stagePadding: 50,
    loop: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    navContainer: ".showing-movie .custom-nav",
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      },
      1500: {
        items: 5,
        nav: true,
        loop: false
      }
    }
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getListMovies().subscribe((data: { data: {} }) => {
      this.movies = data.data;
    });

    this.dataService.getEvents().subscribe((data: { data: {} }) => {
      this.events = data.data;
      console.log(data.data);
    });
  }
}
