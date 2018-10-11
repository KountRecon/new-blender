import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbfeedComponent } from './dbfeed.component';

describe('DbfeedComponent', () => {
  let component: DbfeedComponent;
  let fixture: ComponentFixture<DbfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
