import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodariComponent } from './nodari.component';

describe('NodariComponent', () => {
  let component: NodariComponent;
  let fixture: ComponentFixture<NodariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodariComponent]
    });
    fixture = TestBed.createComponent(NodariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
