import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiredogFormComponent } from './firedog-form.component';

describe('FiredogFormComponent', () => {
  let component: FiredogFormComponent;
  let fixture: ComponentFixture<FiredogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiredogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiredogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
