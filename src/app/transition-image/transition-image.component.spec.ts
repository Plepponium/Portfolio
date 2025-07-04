import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionImageComponent } from './transition-image.component';

describe('TransitionImageComponent', () => {
  let component: TransitionImageComponent;
  let fixture: ComponentFixture<TransitionImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransitionImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransitionImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
