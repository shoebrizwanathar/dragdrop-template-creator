import { appconstants } from './components/constants/constants';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title: string;
  
  constructor(public router: Router) {
  }

  ngOnInit() {
    this.title = appconstants.title;
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  reloadCurrentRoute(ev) {
    const myNode = document.getElementById("div1");
    myNode.innerHTML = '';
  }
}
