import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
@Component({
  selector: "app-buy-ticket",
  templateUrl: "./buy-ticket.component.html",
  styleUrls: ["./buy-ticket.component.css"]
})
export class BuyTicketDialogComponent implements OnInit {
  id: number;
  seatName: string;
  constructor(
    private dialogRef: MatDialogRef<BuyTicketDialogComponent>,
    private sanitizer: DomSanitizer,
    public router: Router,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.id = data.id;
    this.seatName = data.seatName;
  }
  ngOnInit() {}
  redirect() {
    this.router.navigate(["/user/checkout/" + this.id]);
    this.close();
  }
  close() {
    this.dialogRef.close();
  }
}
