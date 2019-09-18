import { NgModule } from '@angular/core';

import { AppSettings } from '../../common/config';

import { FileUploadModule } from 'ng2-file-upload';
import { CloudinaryModule, CloudinaryConfiguration, provideCloudinary } from '@cloudinary/angular-5.x';
import * as cloudinary from 'cloudinary-core';

import { SharedModule } from './../../common/shared/shared.module';

/**
 * BlogComponents
 */
import { BlogPreviewComponent } from '../../components/blog/blog-preview/blog-preview.component';
import { BlogPostComponent } from '../../components/blog/blogpost/blogpost.component';
import { WriteComponent } from '../../components/blog/write/write.component';
import { EditorComponent } from './write/editor/editor.component';
import { MediaToolTipComponent } from '../../components/blog/write/editor/media-tool-tip/media-tool-tip.component';
import { InlineToolbarComponent } from './write/editor/inline-toolbar/inline-toolbar.component';
import { MasterFooterComponent } from '../../components/blog/blogpost/master-footer/master-footer.component';
import { ClapAndTagsComponent } from '../../components/blog/blogpost/master-footer/clap-and-tags/clap-and-tags.component';
import { FollowComponent } from '../../components/blog/blogpost/master-footer/follow/follow.component';
import { CommentsComponent } from '../../components/blog/blogpost/master-footer/comments/comments.component';
import { ResponsesComponent } from '../../components/blog/blogpost/master-footer/responses/responses.component';
import { ResponseEditorComponent } from '../../components/blog/blogpost/master-footer/response-editor/response-editor.component';


export function blogDeclarations(): any {
  return [
    BlogPreviewComponent,
    BlogPostComponent,
    ClapAndTagsComponent,
    CommentsComponent,
    EditorComponent,
    FollowComponent,
    InlineToolbarComponent,
    MasterFooterComponent,
    MediaToolTipComponent,
    ResponsesComponent,
    ResponseEditorComponent,
    WriteComponent,
      
  ]
}

@NgModule({
  declarations: [
    blogDeclarations()
  ],
  imports: [
    SharedModule,

    CloudinaryModule.forRoot(cloudinary, AppSettings.cloudinaryConfiguration),

    FileUploadModule
  ],
  exports: [
    blogDeclarations()    
  ]
})
export class BlogModule { }
