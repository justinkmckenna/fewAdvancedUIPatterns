import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HomeRepairModel } from 'src/app/models';
import { AppState, selectAllHomeRepairs } from 'src/app/reducers';

@Component({
  selector: 'app-home-repairs',
  templateUrl: './home-repairs.component.html',
  styleUrls: ['./home-repairs.component.css']
})
export class HomeRepairsComponent implements OnInit {

  id = 3;
  stuffToDo$: Observable<HomeRepairModel[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.stuffToDo$ = this.store.select(selectAllHomeRepairs);
  }

  itemAdded(item: HomeRepairModel) {
    item = { id: this.id++, ...item }
    // this.stuffToDo = [item, ...this.stuffToDo];
  }
}
function selectHomeRepairs(selectHomeRepairs: any): Observable<HomeRepairModel[]> {
  throw new Error('Function not implemented.');
}

