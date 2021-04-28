import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRepairsComponent } from './home-repairs.component';

describe('HomeRepairsComponent', () => {
  let component: HomeRepairsComponent;
  let fixture: ComponentFixture<HomeRepairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRepairsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
