import { Component, Input, OnInit } from '@angular/core';
import { HomeRepairModel } from 'src/app/models';

@Component({
  selector: 'app-home-repair-list',
  templateUrl: './home-repair-list.component.html',
  styleUrls: ['./home-repair-list.component.css']
})
export class HomeRepairListComponent implements OnInit {

  @Input() list: HomeRepairModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
