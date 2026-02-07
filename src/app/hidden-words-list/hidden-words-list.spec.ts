import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenWordsList } from './hidden-words-list';

describe('HiddenWordsList', () => {
  let component: HiddenWordsList;
  let fixture: ComponentFixture<HiddenWordsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenWordsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenWordsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
