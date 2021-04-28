import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRepairListComponent } from './home-repair-list.component';

describe('HomeRepairListComponent', () => {
  let component: HomeRepairListComponent;
  let fixture: ComponentFixture<HomeRepairListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRepairListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRepairListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
