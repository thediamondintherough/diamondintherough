import { ImageUploadService } from '../../../../../services/imageUpload/image-upload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-tool-tip',
  templateUrl: './media-tool-tip.component.html'
})
export class MediaToolTipComponent implements OnInit {

  constructor(
    private image:ImageUploadService
  ) { }

  ngOnInit() {
  }

}
