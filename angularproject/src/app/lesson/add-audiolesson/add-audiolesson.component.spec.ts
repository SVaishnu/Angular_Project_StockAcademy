import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAudiolessonComponent } from './add-audiolesson.component';

describe('AddAudiolessonComponent', () => {
  let component: AddAudiolessonComponent;
  let fixture: ComponentFixture<AddAudiolessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAudiolessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAudiolessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
