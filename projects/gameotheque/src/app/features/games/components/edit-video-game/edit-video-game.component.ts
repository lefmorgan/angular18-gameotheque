import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormVideoGameComponent } from '../form-video-game/form-video-game.component';
import { VideoGame } from '../../models/video-game';
import { ActivatedRoute } from '@angular/router';
import { GetOneVideoGameService } from '../../services/get-one-video-game.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-video-game',
  standalone: true,
  imports: [FormVideoGameComponent],
  templateUrl: './edit-video-game.component.html',
  styleUrl: './edit-video-game.component.scss'
})
export class EditVideoGameComponent implements OnInit, OnDestroy  {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly getOneService = inject(GetOneVideoGameService);
  private subscription = new Subscription();

  ngOnInit(): void {
    const idNullable = this.activatedRoute.snapshot.paramMap.get('id')
    if(idNullable) {
      const realId = +idNullable;
      const sub = this.getOneService.getOne(realId).subscribe({
        next: item => this.editItem = item
      })
      this.subscription.add(sub);
      // ToDO: 09102024.pipe(takeUntilDestroyed())
    }
  }
  editItem: VideoGame | undefined;
  saveOne(videoGame: VideoGame): void {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
