import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../../_services/data.service";
import { BuyTicketDialogComponent } from "src/app/_layouts/dialog/buy-ticket/buy-ticket.component";
import { MatDialog } from "@angular/material";
@Component({
  selector: "app-detailmovie",
  templateUrl: "./detailmovie.component.html",
  styleUrls: ["./detailmovie.component.css"]
})
export class DetailmovieComponent implements OnInit {
  detail;
  theaterLists;
  movieID: number;
  movieInfo;
  selectSeat = false;
  loading = false;
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
    private dataService: DataService,
    private buyTicketDialog: MatDialog
  ) {}
  handleBookTheater(movieID: number, theaterID: number) {
    this.movieID = movieID; // xử lý ẩn hiện bảng chọn time
  }
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.dataService.getMovieDetail(id).subscribe(
      data => {
        this.detail = data;
      },
      error => {}
    );
    this.loading = true;
    this.dataService.getTheaterList().subscribe(
      data => {
        this.loading = false;
        this.theaterLists = data;
      },
      error => {}
    );
  }
  handleBookTime(
    movieID: number
    // theaterID: number,
    // time: string,
    // date: string
  ) {}

  selectSeatStep() {
    this.selectSeat = !this.selectSeat;
  }
  openBuyTicketDialog(id: number): void {
    const diaglogRef = this.buyTicketDialog.open(BuyTicketDialogComponent, {
      width: "500px",
      data: {
        id: id
      }
    });
    diaglogRef.afterClosed().subscribe(result => {
      console.log("dialog result", result);
    });
  }
}
