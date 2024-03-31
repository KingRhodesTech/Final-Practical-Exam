import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCensusComponent } from './update-census.component';

describe('UpdateCensusComponent', () => {
  let component: UpdateCensusComponent;
  let fixture: ComponentFixture<UpdateCensusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCensusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCensusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
