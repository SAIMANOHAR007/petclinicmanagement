import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveNewemployeeComponent } from './save-newemployee.component';

describe('SaveNewemployeeComponent', () => {
  let component: SaveNewemployeeComponent;
  let fixture: ComponentFixture<SaveNewemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveNewemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveNewemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
