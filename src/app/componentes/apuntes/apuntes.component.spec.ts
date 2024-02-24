import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuntesComponent } from './apuntes.component';

describe('ApuntesComponent', () => {
  let component: ApuntesComponent;
  let fixture: ComponentFixture<ApuntesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApuntesComponent]
    });
    fixture = TestBed.createComponent(ApuntesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
