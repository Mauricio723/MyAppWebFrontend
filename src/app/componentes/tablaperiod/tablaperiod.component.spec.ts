import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaperiodComponent } from './tablaperiod.component';

describe('TablaperiodComponent', () => {
  let component: TablaperiodComponent;
  let fixture: ComponentFixture<TablaperiodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaperiodComponent]
    });
    fixture = TestBed.createComponent(TablaperiodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
