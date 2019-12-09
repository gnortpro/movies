import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  JwtInterceptor,
  ErrorInterceptor
  // fakeBackendProvider
} from "./_helpers";

// Angular Material Components
import {
  MatCheckboxModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS
} from "@angular/material";
import { MatButtonModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatRadioModule } from "@angular/material/radio";
// import { MatSelectModule } from "@angular/material/select";
// import { MatSliderModule } from "@angular/material/slider";
// import { MatSlideToggleModule } from "@angular/material/slide-toggle";
// import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
// import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
// import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
// import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
// Angular Material Components
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from "./_layouts/footer/footer.component";
import { HeaderComponent } from "./_layouts/header/header.component";
import { PageNotFoundComponent } from "./pages/error/page-not-found/page-not-found.component";
import { TrailerDialogComponent } from "./_layouts/dialog/trailer/dialog.component";
import { BuyTicketDialogComponent } from "./_layouts/dialog/buy-ticket/buy-ticket.component";
// User
import { HomeComponent } from "./pages/user/home/home.component";
import { DetailmovieComponent } from "./pages/user/detailmovie/detailmovie.component";
import { UserComponent } from "./pages/user/user.component";
import { ProfileComponent } from "./pages/user/profile/profile.component";
import { UpcomingMovieComponent } from "./pages/user/upcoming-movie/upcoming-movie.component";
import { DetaileventComponent } from "./pages/user/detailevent/detailevent.component";
import { EditComponent } from "./pages/user/profile/edit/edit.component";
import { VoucherComponent } from "./pages/user/profile/voucher/voucher.component";
import { TicketBoughtComponent } from "./pages/user/profile/ticket-bought/ticket-bought.component";

// Admin
import { AdminComponent } from "./pages/admin/admin.component";
import { LoginComponent } from "./pages/login/login.component";
import { ListuserComponent } from "./pages/admin/user/listuser.component";
import { DashboardComponent } from "./pages/admin/dashboard/dashboard.component";
import { MoviesComponent } from "./pages/admin/movies/movies.component";
import { TheatersComponent } from "./pages/admin/theaters/theaters.component";
import { AuditoriumsComponent } from "./pages/admin/auditoriums/auditoriums.component";
import { AddMovieComponent } from "./pages/admin/add-movie/add-movie.component";
import { AddUserComponent } from "./pages/admin/user/add-user/add-user.component";
import { EditMovieComponent } from "./pages/admin/edit-movie/edit-movie.component";
// Import your library
import { SlickCarouselModule } from "ngx-slick-carousel";
import { SnackBarComponent } from "./_layouts/snack-bar/snack-bar.component";
import { CheckoutComponent } from "./pages/user/checkout/checkout.component";
import { CountdownModule } from "ngx-countdown";

import { ExpiredBookTicketComponent } from "./_layouts/dialog/expired-book-ticket/expired-book-ticket.component";
// for HttpClient import:
import { LoadingBarHttpClientModule } from "@ngx-loading-bar/http-client";

// for Router import:
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";

// for Core import:
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { BookHistoryComponent } from "./pages/user/book-history/book-history.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    DetailmovieComponent,
    AdminComponent,
    LoginComponent,
    ListuserComponent,
    DashboardComponent,
    UserComponent,
    PageNotFoundComponent,
    ProfileComponent,
    UpcomingMovieComponent,
    DetaileventComponent,
    EditComponent,
    VoucherComponent,
    TicketBoughtComponent,
    TrailerDialogComponent,
    MoviesComponent,
    SnackBarComponent,
    BuyTicketDialogComponent,
    CheckoutComponent,
    ExpiredBookTicketComponent,
    TheatersComponent,
    AuditoriumsComponent,
    AddMovieComponent,
    BookHistoryComponent,
    AddUserComponent,
    EditMovieComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    // MatGridListModule,
    MatCardModule,
    // MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    // MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    SlickCarouselModule,
    CountdownModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {} }

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TrailerDialogComponent,
    SnackBarComponent,
    BuyTicketDialogComponent,
    ExpiredBookTicketComponent
  ]
})
export class AppModule {}
