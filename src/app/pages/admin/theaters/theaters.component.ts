import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../../_services";
import { MatSnackBar } from "@angular/material";
import { SnackBarComponent } from "../../../_layouts/snack-bar/snack-bar.component";
@Component({
  selector: "app-theaters",
  templateUrl: "./theaters.component.html",
  styleUrls: ["./theaters.component.css"]
})
export class TheatersComponent implements OnInit {
  loading = false;

  // listTheaters;
  displayedColumns: string[] = ["Title", "Latitude", "Longtitude", "action"];
  listTheaters;
  constructor(
    private dataService: DataService,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}

  ngOnInit() {
    this.getTheaterList();
  }
  getTheaterList() {
    this.loading = true;
    this.dataService.getTheaterList().subscribe(
      data => {
        this.listTheaters = data;
        this.loading = false;
      },
      error => {}
    );
  }
  editTheater(id: number) {
    this.router.navigate(["/admin/edit-theater/" + id]);
  }
  addAuditorium(theaterID: number) {
    this.router.navigate(["/admin/auditoriums/" + theaterID]);
  }

  openSnackBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: message,
      panelClass: panelClass,
      duration: 1500
    });
  }
}
