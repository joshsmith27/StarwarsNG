import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharcterCardComponent } from './charcter-card.component';

describe('CharcterCardComponent', () => {
  let component: CharcterCardComponent;
  let fixture: ComponentFixture<CharcterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharcterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharcterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
