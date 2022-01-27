import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxExampleComponent } from './ux-example.component';

describe('UxExampleComponent', () => {
  let component: UxExampleComponent;
  let fixture: ComponentFixture<UxExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
