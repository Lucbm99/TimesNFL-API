import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflTimesComponent } from './nfl-times.component';

describe('NflTimesComponent', () => {
  let component: NflTimesComponent;
  let fixture: ComponentFixture<NflTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NflTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NflTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
