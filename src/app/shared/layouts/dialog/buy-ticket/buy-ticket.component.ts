import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-buy-ticket",
  templateUrl: "./buy-ticket.component.html",
  styleUrls: ["./buy-ticket.component.css"]
})
export class BuyTicketDialogComponent implements OnInit {
  id: number;
  constructor(
    private dialogRef: MatDialogRef<BuyTicketDialogComponent>,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.id = data.id;
  }
  close() {
    this.dialogRef.close();
  }
  ngOnInit() {}
}
