import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVideoGamesComponent } from './create-video-games.component';

describe('CreateVideoGamesComponent', () => {
  let component: CreateVideoGamesComponent;
  let fixture: ComponentFixture<CreateVideoGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVideoGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
