import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../../_services";
@Component({
  selector: "app-ticket-bought",
  templateUrl: "./ticket-bought.component.html",
  styleUrls: ["./ticket-bought.component.css"]
})
export class TicketBoughtComponent implements OnInit {
  historys;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllReservations().subscribe(
      (data: any) => {
        this.historys = data;
      },
      error => {}
    );
  }
}
