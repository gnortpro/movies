import { Component, OnInit } from "@angular/core";
import { ExpiredBookTicketComponent } from "src/app/_layouts/dialog/expired-book-ticket/expired-book-ticket.component";
import { MatDialog } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService } from "../../../_services/data.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"]
})
export class CheckoutComponent implements OnInit {
  maGiamGiaForm: FormGroup;
  gia = 100000;
  giaSale;
  codeGiamGia = 0;
  checkCodeError: string;
  purchaseStatus = false;
  reservationID: number;

  constructor(
    private expiredBookTicket: MatDialog,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.maGiamGiaForm = this.formBuilder.group({
      magiamgia: ["", Validators.required]
    });
    this.giaSale = this.gia - this.codeGiamGia;
  }
  handleEvent(event, movieID) {
    if (event.status === 3) {
      this.openBuyTicketDialog(movieID);
    }
  }
  get f() {
    return this.maGiamGiaForm.controls;
  }
  onSubmitMaGiamGia() {
    // stop here if form is invalid
    if (this.maGiamGiaForm.invalid) {
      return;
    }
    let code = this.f.magiamgia.value;
    if (code === "abc") {
      this.codeGiamGia = 20000;
      this.giaSale = this.gia - this.codeGiamGia;
      this.checkCodeError = null;
    } else {
      this.checkCodeError = "Mã giảm giá không hợp lệ hoặc đã được sử dụng";
    }

    // this.loading = true;
    // console.log("form value", this.adminLoginForm.value);
    // this.authenticationService
    //   .login(this.f.email.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //       this.error = error;
    //       this.loading = false;
    //     }
    //   );
  }
  // reviewTicket() {
  //   this.router.navigate(["/user/booked/" + this.reservationID]);
  // }
  purchased() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.dataService.postPurchase(id).subscribe(
      (data: { id: number }) => {
        this.purchaseStatus = true;
        this.reservationID = data.id;
      },
      error => {}
    );
  }
  openBuyTicketDialog(movieID: number): void {
    const diaglogRef = this.expiredBookTicket.open(ExpiredBookTicketComponent, {
      width: "500px",
      disableClose: true,
      data: {
        movieID: movieID
      }
    });
    diaglogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
