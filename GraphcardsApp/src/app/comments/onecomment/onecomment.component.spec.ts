import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecommentComponent } from './onecomment.component';

describe('OnecommentComponent', () => {
  let component: OnecommentComponent;
  let fixture: ComponentFixture<OnecommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnecommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
