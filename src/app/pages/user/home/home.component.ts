import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../services/data.service";
import { MatDialog } from "@angular/material";
import { DialogComponent } from "src/app/shared/layouts/dialog/dialog.component";
import { PageEvent } from "@angular/material/paginator";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
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
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(",").map(str => +str);
  }
  showtime(): void {
    this.showTimeBtn = !this.showTimeBtn;
  }
  openDialog(): void {
    const diaglogRef = this.diaglog.open(DialogComponent, {
      width: "500px",
      data: {
        trailerCode: "KKi-dYsWTrQ"
      }
    });
    diaglogRef.afterClosed().subscribe(result => {
      console.log("abc");
    });
  }

  constructor(private dataService: DataService, private diaglog: MatDialog) {}

  ngOnInit() {
    this.dataService.getListMovies().subscribe((data: { data: {} }) => {
      this.movies = data.data;
      console.log("new data", data);
    });

    this.dataService.getEvents().subscribe((data: { data: {} }) => {
      this.events = data.data;
      console.log("events", data.data);
    });
  }
}
