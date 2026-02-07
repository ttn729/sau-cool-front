import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenWords } from './hidden-words';

describe('HiddenWords', () => {
  let component: HiddenWords;
  let fixture: ComponentFixture<HiddenWords>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenWords]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenWords);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
