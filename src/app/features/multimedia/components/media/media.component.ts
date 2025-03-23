import {Component, Input} from '@angular/core';
import {MediaImage} from '../../models/media.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-media',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() images: MediaImage[] = [];

  imageActive: number = 0;

  nextImage(): void {
    this.imageActive = (this.imageActive + 1) % this.images.length;
  }

  prevImage(): void {
    this.imageActive = this.imageActive === 0
      ? this.images.length - 1
      : this.imageActive - 1;
  }

  selectImage(index: number): void {
    this.imageActive = index;
  }

}
