import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrohomeComponent } from './introhome.component';

describe('IntrohomeComponent', () => {
  let component: IntrohomeComponent;
  let fixture: ComponentFixture<IntrohomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrohomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
