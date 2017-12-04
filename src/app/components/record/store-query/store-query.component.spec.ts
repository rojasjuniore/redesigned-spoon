import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreQueryComponent } from './store-query.component';

describe('StoreQueryComponent', () => {
  let component: StoreQueryComponent;
  let fixture: ComponentFixture<StoreQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
