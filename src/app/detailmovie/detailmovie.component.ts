import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { TrailerDialogComponent } from "../shared/layouts/trailer-dialog/trailer-dialog.component";
@Component({
  selector: "app-detailmovie",
  templateUrl: "./detailmovie.component.html",
  styleUrls: ["./detailmovie.component.css"]
})
export class DetailmovieComponent implements OnInit {
  detail;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private dialog: MatDialog
  ) {}
  getMovieDetails() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.dataService.getMovieDetail(id).subscribe(data => {
      this.detail = data;
      console.log(this.detail);
    });
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(TrailerDialogComponent, dialogConfig);
    dialogRef
      .afterClosed()
      .subscribe(val => console.log("Dialog output:", val));
  }
  ngOnInit() {
    this.getMovieDetails();
  }
}
