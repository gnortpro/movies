import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../_services/data.service";
import { MatDialog } from "@angular/material";
import { TrailerDialogComponent } from "src/app/_layouts/dialog/trailer/dialog.component";
import { PageEvent } from "@angular/material/paginator";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  loading = false;
  movies;
  events;
  showTimeBtn = false;
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

  constructor(private dataService: DataService, private diaglog: MatDialog) {}

  ngOnInit() {
    this.loading = true;
    // limit 5, page 1
    this.dataService.getListMovies(5, 1).subscribe(
      (data: { movies: {} }) => {
        this.movies = data.movies;
        this.loading = false;
      },
      error => {}
    );

    this.dataService.getEvents().subscribe((data: { data: {} }) => {
      this.events = data.data;
      // console.log("events", data.data);
    });
  }
  handlePage(event) {
    this.loading = true;
    this.dataService.getListMovies(event.pageSize, event.pageIndex).subscribe(
      (data: { movies: {} }) => {
        this.movies = data.movies;
        this.loading = false;
      },
      error => {}
    );
  }
  showtime(): void {
    this.showTimeBtn = !this.showTimeBtn;
  }
  openDialog(url: string): void {
    const diaglogRef = this.diaglog.open(TrailerDialogComponent, {
      width: "500px",
      data: {
        url: url
      }
    });
    diaglogRef.afterClosed().subscribe(result => {
      // console.log("abc");
    });
  }
}
