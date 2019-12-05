import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../../_services/data.service";
import { BuyTicketDialogComponent } from "src/app/_layouts/dialog/buy-ticket/buy-ticket.component";
import { MatDialog } from "@angular/material";
import { DatePipe } from "@angular/common";
@Component({
  selector: "app-detailmovie",
  templateUrl: "./detailmovie.component.html",
  styleUrls: ["./detailmovie.component.css"]
})
export class DetailmovieComponent implements OnInit {
  detail;
  theaterLists;
  scheduleLists;
  movieID: number;
  movieInfo;
  getSeatsBySchedule;
  selectSeat = false;
  loading = false;
  scheduleLoading = false;
  getSeatsByScheduleIDLoading = false;
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

  slideDayConfig = {
    slidesToShow: 10,
    slidesToScroll: 4,
    autoplay: false,
    arrows: true,
    infinite: true,
    responsive: [
      { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 979, settings: { slidesToShow: 3, slidesToScroll: 3 } }
    ],
    dots: false
  };

  days = [];
  today_day = new Date().getDate();
  today_month = new Date().getMonth();
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private buyTicketDialog: MatDialog
  ) {}

  ngOnInit() {
    this.movieID = +this.route.snapshot.paramMap.get("id");
    this.dataService.getMovieDetail(this.movieID).subscribe(
      data => {
        this.detail = data;
      },
      error => {}
    );
    // get list 20 day from now
    for (let i = this.today_day; i <= 20; i++) {
      this.days.push(new Date(2019, this.today_month, i));
    }
  }
  getSeatsByScheduleID(scheduleID: number) {
    this.getSeatsByScheduleIDLoading = true;
    this.dataService.getSeatsByScheduleID(this.movieID, scheduleID).subscribe(
      data => {
        this.getSeatsBySchedule = data;
        console.log(data);

        this.getSeatsByScheduleIDLoading = false;
      },
      error => {
        this.getSeatsByScheduleIDLoading = false;
      }
    );
  }
  getSelectDaySchedules(day: string) {
    this.scheduleLoading = true;
    let convertDay = new DatePipe("en-US").transform(day, "yyyy/MM/dd");
    this.dataService.postScheduleByDay(this.movieID, convertDay).subscribe(
      data => {
        this.scheduleLists = data;
        this.scheduleLoading = false;
      },
      error => {
        this.scheduleLoading = false;
      }
    );
  }
  // handleBookTheater(theaterID: number) {
  //   this.scheduleLoading = true;
  //   this.dataService.getSchedule(this.movieID).subscribe(
  //     data => {
  //       this.scheduleLists = data;
  //       this.scheduleLoading = false;
  //       console.log(this.scheduleLists);
  //     },
  //     error => {}
  //   );
  //   // this.movieID = movieID; // xử lý ẩn hiện bảng chọn time
  // }
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
