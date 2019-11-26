import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/user/home/home.component";
import { TodolistComponent } from "./todolist/todolist.component";
import { DetailmovieComponent } from "./pages/user/detailmovie/detailmovie.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { LoginComponent } from "./pages/admin/login/login.component";
import { ListuserComponent } from "./pages/admin/listuser/listuser.component";
import { PageNotFoundComponent } from "./pages/error/page-not-found/page-not-found.component";
import { DashboardComponent } from "./pages/admin/dashboard/dashboard.component";
import { UserComponent } from "./pages/user/user.component";
import { ProfileComponent } from "./pages/user/profile/profile.component";
import { UpcomingMovieComponent } from "./pages/user/upcoming-movie/upcoming-movie.component";
const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "users", component: ListuserComponent },
      { path: "", component: DashboardComponent }
    ]
  },
  {
    path: "user",
    component: UserComponent,
    children: [
      { path: "movie", redirectTo: "/user", pathMatch: "full" },
      { path: "profile", redirectTo: "/user", pathMatch: "full" },
      { path: "movie/:id", component: DetailmovieComponent },
      { path: "profile/:id", component: ProfileComponent },
      { path: "upcoming", component: UpcomingMovieComponent },
      { path: "", component: HomeComponent }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "todolist", component: TodolistComponent },
  { path: "", redirectTo: "/user", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
