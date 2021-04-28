import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRepairEntryComponent } from './home-repair-entry.component';

describe('HomeRepairEntryComponent', () => {
  let component: HomeRepairEntryComponent;
  let fixture: ComponentFixture<HomeRepairEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRepairEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRepairEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
