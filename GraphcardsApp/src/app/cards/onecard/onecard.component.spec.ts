import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecardComponent } from './onecard.component';

describe('OnecardComponent', () => {
  let component: OnecardComponent;
  let fixture: ComponentFixture<OnecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
