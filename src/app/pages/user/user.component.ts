import { Component, OnInit } from "@angular/core";
import { AuthenticationService, SearchService } from "../../_services";
import { UserAuth } from "src/app/models";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  title = "User";
  currentUser: UserAuth;
  checkUser = false;
  menuClick = false;
  results;
  queryField: FormControl = new FormControl();
  constructor(
    private authenticationService: AuthenticationService,
    private searchService: SearchService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  ngOnInit() {
    const checkUser = this.authenticationService.currentUserValue;
    this.checkUser = checkUser ? true : false;
    this.queryField.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(queryField =>
        this.searchService.search(queryField).subscribe(
          (data: any) => {
            this.results = data.movies;
          },
          error => {}
        )
      );
  }
  toggleMobileClass(): void {
    this.menuClick = !this.menuClick;
  }
}
