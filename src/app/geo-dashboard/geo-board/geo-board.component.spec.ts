import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoBoardComponent } from './geo-board.component';

describe('GeoBoardComponent', () => {
  let component: GeoBoardComponent;
  let fixture: ComponentFixture<GeoBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
