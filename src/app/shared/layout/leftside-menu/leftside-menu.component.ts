import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-leftside-menu',
  templateUrl: './leftside-menu.component.html',
  styleUrls: ['./leftside-menu.component.css']
})
export class LeftsideMenuComponent implements OnInit {
  dataMenu: any;  

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.dataMenu = data.dataMenu;
    });
    
  }

  ngOnInit(): void {
  
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/json/leftside-menu.json");
  }
}
