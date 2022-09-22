import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-leftside-menu',
  templateUrl: './leftside-menu.component.html',
  styleUrls: ['./leftside-menu.component.css']
})
export class LeftsideMenuComponent implements OnInit {
  dataMenu: any;
  @ViewChild('asideMenu', {static: true}) asideMenu?: ElementRef;
  
	currentRouteUrl = '';
	insideTm: any;
	outsideTm: any;

  constructor(private http: HttpClient,	private router: Router, 
    private render: Renderer2,
    private cdr: ChangeDetectorRef) {
    this.getJSON().subscribe(data => {
      this.dataMenu = data.dataMenu;
    });
    
  }

  ngOnInit(): void {
    this.currentRouteUrl = this.router.url.split(/[?#]/)[0];

		this.router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(event => {
				this.currentRouteUrl = this.router.url.split(/[?#]/)[0];
				this.cdr.markForCheck();
			});
			this.render.setAttribute(this.asideMenu?.nativeElement, 'data-ktmenu-dropdown', '1');
			// tslint:disable-next-line:max-line-length
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/json/leftside-menu.json");
  }
}
