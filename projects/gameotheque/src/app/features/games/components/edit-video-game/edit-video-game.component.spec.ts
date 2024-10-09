import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVideoGameComponent } from './edit-video-game.component';

describe('EditVideoGameComponent', () => {
  let component: EditVideoGameComponent;
  let fixture: ComponentFixture<EditVideoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditVideoGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVideoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
