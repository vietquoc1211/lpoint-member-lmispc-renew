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
  currentRoute?: string;
  dataMenu = ELEMENT_DATA;
  menuFilter: any;
  tilte: string = 'Danh sách các hạng thẻ khách hàng';
  constructor(private http: HttpClient,private router: Router,private location: Location) {
    router.events.subscribe((val) => {
      // see also 
      if(val instanceof NavigationEnd) {
        this.menuFilter = this.dataMenu.filter(x => x.url === val.url);
        if(this.menuFilter) {
          this.tilte = this.menuFilter[0].tilte;
        }
      }
    });

  }

  ngOnInit(): void {

  }

}


export interface MenuElement {
  url: string;
  tilte: string;
}

const ELEMENT_DATA: MenuElement[] = [
  {url: '/grade-management/customer-grade-list', tilte: ' Danh sách các hạng thẻ khách hàng'},
  {url: '/grade-management/customer-grade-detail', tilte: 'Chi tiết hạng thẻ khách hàng'},
  {url: '/grade-management/grade-information', tilte: 'Thông tin hạng thẻ'},
  {url: '/grade-management/grade-setting-accumulation', tilte: 'Thiết lập quy tắc tích lũy điểm theo hạng thẻ'},
  {url: '/grade-management/setting-rule-customer-grade', tilte: 'Cài đặt quy tắc tích lũy cho các hạng thẻ'},
];