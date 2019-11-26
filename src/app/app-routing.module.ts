import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/user/home/home.component";
import { TodolistComponent } from "./todolist/todolist.component";
import { DetailmovieComponent } from "./pages/user/detailmovie/detailmovie.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { LoginComponent } from "./pages/admin/login/login.component";
import { ListuserComponent } from "./pages/admin/listuser/listuser.component";
import { NotfoundpageComponent } from "./pages/error/notfoundpage/notfoundpage.component";
import { DashboardComponent } from "./pages/admin/dashboard/dashboard.component";
import { UserComponent } from "./pages/user/user.component";
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
      { path: "details/:id", component: DetailmovieComponent },
      { path: "", component: HomeComponent }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "todolist", component: TodolistComponent },
  { path: "", redirectTo: "/user", pathMatch: "full" },
  { path: "**", component: NotfoundpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
