import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MediaDTO} from '../../../../../common/entities/MediaDTO';
import {IconThumbnail, ThumbnailManagerService,} from '../../gallery/thumbnailManager.service';
import {MediaIcon} from '../../gallery/MediaIcon';
import { NgIf } from '@angular/common';
import { PopoverDirective } from 'ngx-bootstrap/popover';

@Component({
    selector: 'app-duplicates-photo',
    templateUrl: './photo.duplicates.component.html',
    styleUrls: ['./photo.duplicates.component.css'],
    imports: [NgIf, PopoverDirective]
})
export class DuplicatesPhotoComponent implements OnInit, OnDestroy {
  @Input() media: MediaDTO;

  thumbnail: IconThumbnail;

  constructor(private thumbnailService: ThumbnailManagerService) {
  }

  ngOnInit(): void {
    this.thumbnail = this.thumbnailService.getIcon(new MediaIcon(this.media));
  }

  ngOnDestroy(): void {
    this.thumbnail.destroy();
  }
}

