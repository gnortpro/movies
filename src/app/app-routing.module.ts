import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { TodolistComponent } from "./todolist/todolist.component";
import { DetailmovieComponent } from "./detailmovie/detailmovie.component";
const routes: Routes = [
  { path: "user", component: UserComponent },
  { path: "todolist", component: TodolistComponent },
  { path: "detail/:id", component: DetailmovieComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
