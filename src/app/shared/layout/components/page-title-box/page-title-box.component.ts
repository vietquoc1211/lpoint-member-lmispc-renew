import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,NavigationEnd  } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector:"page-title-box",
    templateUrl:"./page-title-box.component.html",
    styleUrls: ['./page-title-box.component.css']
})
export class PageTitleBoxComponent implements OnInit {
  dataMenu: any;
  currentRoute?: string;

  constructor(private http: HttpClient,private router: Router,private location: Location) {
    this.getJSON().subscribe(data => {
      this.dataMenu = data.dataMenu;
    });
  }

  ngOnInit(): void {
    console.log(this.location.path());
    this.dataMenu
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/json/leftside-menu.json");
  }
}
