import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// Owl Carousel
import { OwlModule } from "ngx-owl-carousel";
//Angular Material Components
import { MatCheckboxModule } from "@angular/material";
import { MatButtonModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
// import { MatSliderModule } from "@angular/material/slider";
// import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
//Angular Material Components

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from "./shared/layouts/footer/footer.component";
import { HeaderComponent } from "./shared/layouts/header/header.component";
import { HomeComponent } from "./pages/user/home/home.component";
import { TodolistComponent } from "./todolist/todolist.component";
import { DetailmovieComponent } from "./pages/user/detailmovie/detailmovie.component";
import { TrailerDialogComponent } from "./shared/layouts/trailer-dialog/trailer-dialog.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { LoginComponent } from "./pages/admin/login/login.component";
import { ListuserComponent } from "./pages/admin/listuser/listuser.component";
import { DashboardComponent } from "./pages/admin/dashboard/dashboard.component";
import { UserComponent } from "./pages/user/user.component";
import { PageNotFoundComponent } from "./pages/error/page-not-found/page-not-found.component";
import { ProfileComponent } from "./pages/user/profile/profile.component";
import { UpcomingMovieComponent } from "./pages/user/upcoming-movie/upcoming-movie.component";
import { DetaileventComponent } from "./pages/user/detailevent/detailevent.component";
import { BuyTicketComponent } from "./pages/user/buy-ticket/buy-ticket.component";
import { EditComponent } from './pages/user/profile/edit/edit.component';
import { VoucherComponent } from './pages/user/profile/voucher/voucher.component';
import { TicketBoughtComponent } from './pages/user/profile/ticket-bought/ticket-bought.component';
import { UserLoginComponent } from './pages/user/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    TodolistComponent,
    DetailmovieComponent,
    TrailerDialogComponent,
    AdminComponent,
    LoginComponent,
    ListuserComponent,
    DashboardComponent,
    UserComponent,
    PageNotFoundComponent,
    ProfileComponent,
    UpcomingMovieComponent,
    DetaileventComponent,
    BuyTicketComponent,
    EditComponent,
    VoucherComponent,
    TicketBoughtComponent,
    UserLoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    OwlModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
