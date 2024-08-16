import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCardsComponent } from './parent-cards.component';

describe('ParentCardsComponent', () => {
  let component: ParentCardsComponent;
  let fixture: ComponentFixture<ParentCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentCardsComponent]
    });
    fixture = TestBed.createComponent(ParentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
