import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpicyScramblerAbout } from './spicy-scrambler-about';

describe('SpicyScramblerAbout', () => {
  let component: SpicyScramblerAbout;
  let fixture: ComponentFixture<SpicyScramblerAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpicyScramblerAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpicyScramblerAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
