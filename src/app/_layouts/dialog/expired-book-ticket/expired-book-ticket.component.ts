import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-expired-book-ticket",
  templateUrl: "./expired-book-ticket.component.html",
  styleUrls: ["./expired-book-ticket.component.css"]
})
export class ExpiredBookTicketComponent implements OnInit {
  movieID;
  constructor(
    private dialogRef: MatDialogRef<ExpiredBookTicketComponent>,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.movieID = data.movieID;
  }
  close() {
    this.dialogRef.close();
  }
  ngOnInit() {}
}
