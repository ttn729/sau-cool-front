import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMC } from './pmc';

describe('PMC', () => {
  let component: PMC;
  let fixture: ComponentFixture<PMC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PMC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
