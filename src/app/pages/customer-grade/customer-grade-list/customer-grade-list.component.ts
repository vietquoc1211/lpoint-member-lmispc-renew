import { Component, OnInit } from '@angular/core';
import { GradeService } from 'src/app/core/_services';
import { NgxSpinnerService } from 'ngx-spinner';
declare let $: any;

@Component({
  selector: 'app-customer-grade-list',
  templateUrl: './customer-grade-list.component.html',
  styleUrls: ['./customer-grade-list.component.css']
})
export class CustomerGradeListComponent implements OnInit {
  DataGrade: any;
  page = 0;
  pageSize = 10;
  totalPages: number=0;

  constructor( private gradeService: GradeService,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit() {

  }

  async getData(){
    this.spinnerService.show();
    this.gradeService.getAll().subscribe(res =>{
      this.DataGrade = res;
      this.spinnerService.hide();
    })
  }

  nextPage() {
      this.page++;
      this.getData();
    }

  previousPage() {
    this.page--;
    if (this.page === -1) {
      this.page = this.totalPages - 1;
    }
    this.getData();
  }
}
