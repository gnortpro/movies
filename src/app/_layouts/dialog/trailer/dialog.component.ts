import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class TrailerDialogComponent implements OnInit {
  url: string;
  videoUrl;
  constructor(
    private dialogRef: MatDialogRef<TrailerDialogComponent>,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.url = data.url;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  close() {
    this.dialogRef.close();
  }
  ngOnInit() {}
}
