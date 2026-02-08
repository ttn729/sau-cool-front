import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpicyScrambler } from './spicy-scrambler';

describe('SpicyScrambler', () => {
  let component: SpicyScrambler;
  let fixture: ComponentFixture<SpicyScrambler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpicyScrambler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpicyScrambler);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
