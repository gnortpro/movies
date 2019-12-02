import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent implements OnInit {
  trailerCode: string;
  videoUrl;
  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.trailerCode = "https://www.youtube.com/embed/" + data.trailerCode;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.trailerCode
    );
  }

  close() {
    this.dialogRef.close();
  }
  ngOnInit() {}
}
