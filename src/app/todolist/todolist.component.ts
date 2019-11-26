import { Component, OnInit } from "@angular/core";
import { formatDate } from "@angular/common";
import { FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class TodolistComponent implements OnInit {
  control: FormControl = new FormControl("abc", Validators.required);
  public now: Date = new Date();
  public nowTime;
  abc;
  editButton = false;
  listTodoTemps = [];
  listJobsTemps = [];
  constructor() {
    setInterval(() => {
      this.now = new Date();
      this.nowTime = formatDate(this.now, "h:m:s dd-MM-yyyy", "en-US", "+7");
    }, 1);
  }
  editButtonHandle(status: boolean, editValue) {
    console.log("status " + status + " value " + editValue);
    if (status) {
      // this.editValue.setValue(editValue);
    }
    this.editButton = !this.editButton;
  }
  addToDo(todo: string) {
    this.listTodoTemps.push({ name: todo, listJobs: [], time: this.nowTime });
    this.setLocal(this.listTodoTemps);
    // console.log(this.getLocal("listTodo"));
  }
  removeToDo(todoIndex: number) {
    this.listTodoTemps.splice(todoIndex, 1);
    this.setLocal(this.listTodoTemps);
  }
  addJobs(todo: string, todoIndex: number) {
    let newTodo = this.listTodoTemps[todoIndex]; // findex array with index
    newTodo.listJobs.push({ name: todo, time: this.nowTime }); // push to array new job
    newTodo = newTodo;
    this.setLocal(this.listTodoTemps);
  }
  removeJobs(todoIndex: number, jobIndex: number) {
    this.listTodoTemps[todoIndex].listJobs.splice(jobIndex, 1);
    this.setLocal(this.listTodoTemps);
  }
  getListItemFromLocal() {
    if (localStorage.getItem("listTodo")) {
      this.listTodoTemps = this.getLocal("listTodo");
    }
  }
  getLocal(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  setLocal(item) {
    localStorage.setItem("listTodo", JSON.stringify(item));
  }

  ngOnInit() {
    this.getListItemFromLocal();
  }
}
