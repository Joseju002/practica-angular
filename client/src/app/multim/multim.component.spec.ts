import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimComponent } from './multim.component';

describe('MultimComponent', () => {
  let component: MultimComponent;
  let fixture: ComponentFixture<MultimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
