import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenWordsAbout } from './hidden-words-about';

describe('HiddenWordsAbout', () => {
  let component: HiddenWordsAbout;
  let fixture: ComponentFixture<HiddenWordsAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenWordsAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenWordsAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
