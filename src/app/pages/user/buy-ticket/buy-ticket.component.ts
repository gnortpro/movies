import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../data.service";
import { ActivatedRoute } from "@angular/router";
// import { formatDate } from "@angular/common";

@Component({
  selector: "app-buy-ticket",
  templateUrl: "./buy-ticket.component.html",
  styleUrls: ["./buy-ticket.component.css"]
})
export class BuyTicketComponent implements OnInit {
  ticketLists;
  ticketCities;
  defaultMovieID;
  public today = new Date().getTime();
  // public timestampToday = formatDate(this.today, "U", "en-US", "+7");
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {
    this.defaultMovieID = +this.activatedRoute.snapshot.paramMap.get("id");
  }
  getSelectDay(day: number) {
    // this.heroService.getHero(id)
    // .subscribe(hero => this.hero = hero);
    this.dataService
      .getMovieShedule(this.defaultMovieID, day)
      .subscribe((data: { data: {} }) => {
        this.ticketLists = data.data;
        console.log(this.ticketLists);

        this.ticketCities = this.ticketLists.map(t => {
          return t.place;
        });
        console.log(this.ticketCities);
      });
  }
  // goBack(): void {
  //   this.location.back();
  // }
  ngOnInit() {
    this.getSelectDay(this.today);
  }
}
