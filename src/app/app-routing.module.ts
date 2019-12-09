import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// User
import { HomeComponent } from "./pages/user/home/home.component";
import { DetailmovieComponent } from "./pages/user/detailmovie/detailmovie.component";
import { PageNotFoundComponent } from "./pages/error/page-not-found/page-not-found.component";
import { UserComponent } from "./pages/user/user.component";
import { ProfileComponent } from "./pages/user/profile/profile.component";
import { UpcomingMovieComponent } from "./pages/user/upcoming-movie/upcoming-movie.component";
import { DetaileventComponent } from "./pages/user/detailevent/detailevent.component";
import { EditComponent } from "./pages/user/profile/edit/edit.component";
import { VoucherComponent } from "./pages/user/profile/voucher/voucher.component";
import { TicketBoughtComponent } from "./pages/user/profile/ticket-bought/ticket-bought.component";
import { CheckoutComponent } from "./pages/user/checkout/checkout.component";
import { AddMovieComponent } from "./pages/admin/add-movie/add-movie.component";
import { BookHistoryComponent } from "./pages/user/book-history/book-history.component";
// Admin
import { AdminComponent } from "./pages/admin/admin.component";
import { LoginComponent } from "./pages/login/login.component";
import { ListuserComponent } from "./pages/admin/user/listuser.component";
import { DashboardComponent } from "./pages/admin/dashboard/dashboard.component";
import { MoviesComponent } from "./pages/admin/movies/movies.component";
import { TheatersComponent } from "./pages/admin/theaters/theaters.component";
import { AuditoriumsComponent } from "./pages/admin/auditoriums/auditoriums.component";
// helper
import { AuthGuard } from "./_helpers";
import { Role } from "./models";
const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
    children: [
      {
        path: "user",
        component: ListuserComponent
      },
      { path: "movie", component: MoviesComponent },
      {
        path: "theaters",
        component: TheatersComponent
      },
      {
        path: "auditoriums/:theaterID",
        component: AuditoriumsComponent
      },

      {
        path: "new-movie",
        component: AddMovieComponent
      },

      { path: "", component: DashboardComponent }
    ]
  },
  {
    path: "user",
    component: UserComponent,
    children: [
      { path: "event", redirectTo: "/user", pathMatch: "full" },
      { path: "movie", redirectTo: "/user", pathMatch: "full" },
      // { path: "profile", redirectTo: "/user", pathMatch: "full" },
      { path: "event/:id", component: DetaileventComponent },
      { path: "movie/:id", component: DetailmovieComponent },
      {
        path: "checkout/:id",
        component: CheckoutComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "booked/:id",
        component: BookHistoryComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "profile",
        component: ProfileComponent,
        canActivate: [AuthGuard],
        children: [
          { path: "", component: EditComponent },
          { path: "voucher", component: VoucherComponent },
          { path: "bought", component: TicketBoughtComponent }
        ]
      },
      { path: "upcoming", component: UpcomingMovieComponent },
      { path: "", component: HomeComponent }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/user", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
