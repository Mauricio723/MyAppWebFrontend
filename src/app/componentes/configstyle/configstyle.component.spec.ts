import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigstyleComponent } from './configstyle.component';

describe('ConfigstyleComponent', () => {
  let component: ConfigstyleComponent;
  let fixture: ComponentFixture<ConfigstyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigstyleComponent]
    });
    fixture = TestBed.createComponent(ConfigstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
