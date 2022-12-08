import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastDueComponent } from './past-due.component';

describe('PastDueComponent', () => {
  let component: PastDueComponent;
  let fixture: ComponentFixture<PastDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastDueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
