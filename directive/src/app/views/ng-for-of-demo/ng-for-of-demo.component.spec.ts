import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForOfDemoComponent } from './ng-for-of-demo.component';

describe('NgForOfDemoComponent', () => {
  let component: NgForOfDemoComponent;
  let fixture: ComponentFixture<NgForOfDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForOfDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForOfDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
