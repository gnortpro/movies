import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../../../_services/data.service";
@Component({
  selector: "app-book-history",
  templateUrl: "./book-history.component.html",
  styleUrls: ["./book-history.component.css"]
})
export class BookHistoryComponent implements OnInit {
  detail;
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.dataService.getBookedLastReservation(id).subscribe(
      data => {
        this.detail = data;
        console.log(data);
      },
      error => {}
    );
  }
  // theaterMap(lat, long) {
  //   console.log(lat + long);

  // }
}
