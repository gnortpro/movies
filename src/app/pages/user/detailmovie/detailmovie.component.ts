import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../../../_services/data.service";
import { BuyTicketDialogComponent } from "src/app/_layouts/dialog/buy-ticket/buy-ticket.component";
import { MatDialog } from "@angular/material";
import { DatePipe } from "@angular/common";
import { TooltipPosition } from "@angular/material/tooltip";
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
  scheduleLoading = false;
  getSeatsByScheduleIDLoading = false;
  chonsuatchieu = false;
  ticketIDArray = [];
  reservationID;
  dataCheckout = [];
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
    slidesToScroll: 10,
    autoplay: false,
    arrows: true,
    loop: false,
    infinite: false,
    responsive: [
      { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 979, settings: { slidesToShow: 3, slidesToScroll: 3 } }
    ],
    dots: false
  };

  days = [];
  todayDay = new Date().getDate();
  todayMonth = new Date().getMonth();
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private buyTicketDialog: MatDialog,
    private router: Router
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
    for (let i = this.todayDay; i <= 20; i++) {
      this.days.push(new Date(2019, this.todayMonth, i));
    }
    this.getSelectDaySchedules(new Date());
  }
  cancelSeat(seat: number) {
    let index = this.ticketIDArray.findIndex(x => x === seat);
    this.ticketIDArray.splice(index, 1);
  }
  submitBuyTicket(ticketID: number, seatName: string) {
    // let index = this.ticketIDArray.findIndex(x => (x = ticketID));
    if (!this.ticketIDArray.includes(ticketID)) {
      if (this.ticketIDArray.length >= 3) {
        alert("Bạn chỉ được chọn tối đa 3 ghế");
      } else {
        this.ticketIDArray.push(ticketID);
      }
    }
  }
  continueCheckout() {
    this.ticketIDArray.forEach(element => {
      this.dataCheckout[0].seatIds.push(element);
    });
    this.dataService.postNewReservation(this.dataCheckout[0]).subscribe(
      (data: { id: number }) => {
        this.reservationID = data.id;
        this.router.navigate(["/user/checkout/" + this.reservationID]);
      },
      error => {}
    );
  }
  getSeatsByScheduleID(scheduleID: number) {
    this.selectSeat = false;
    this.getSeatsByScheduleIDLoading = true;
    this.dataService.getSeatsByScheduleID(this.movieID, scheduleID).subscribe(
      data => {
        this.dataCheckout.push({ scheduleId: scheduleID, seatIds: [] });
        this.getSeatsBySchedule = data;

        this.selectSeat = true;

        this.getSeatsByScheduleIDLoading = false;
      },
      error => {
        this.getSeatsByScheduleIDLoading = false;
      }
    );
  }
  getSelectDaySchedules(day: any) {
    this.selectSeat = false;
    this.scheduleLoading = true;
    this.chonsuatchieu = false;

    const convertDay = new DatePipe("en-US").transform(day, "yyyy/MM/dd");
    this.dataService.postScheduleByDay(this.movieID, convertDay).subscribe(
      data => {
        this.scheduleLists = data;
        this.scheduleLoading = false;
        this.chonsuatchieu = true;
      },
      error => {
        this.scheduleLoading = false;
        this.chonsuatchieu = true;
      }
    );
  }
  openBuyTicketDialog(data: object): void {
    const diaglogRef = this.buyTicketDialog.open(BuyTicketDialogComponent, {
      width: "500px",
      data: data,
      panelClass: "buy-ticket-dialog"
    });
    diaglogRef.afterClosed().subscribe(result => {
      // console.log("dialog result", result);
    });
  }
}
