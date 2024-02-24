import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisicaquimicaComponent } from './fisicaquimica.component';

describe('FisicaquimicaComponent', () => {
  let component: FisicaquimicaComponent;
  let fixture: ComponentFixture<FisicaquimicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FisicaquimicaComponent]
    });
    fixture = TestBed.createComponent(FisicaquimicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
