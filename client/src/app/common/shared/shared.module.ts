import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CollapseModule, TooltipModule } from 'ngx-bootstrap';
import { SimpleNotificationsModule } from 'angular2-notifications';

/**
 * common
 */
import { NavbarComponent } from '../navbar/navbar.component';
import { SocialBannerComponent } from '../banners/social/social.component';
import { LanguagePickerComponent } from '../languagePicker/languagePicker.component';
import { ReturnButtonComponent } from '../banners/returnbutton/returnbutton.component';

/**
 * routes
 */

import { routes } from "../../routes/routes.module";

/**
 * Guards
 */

import { AuthGuard, alreadyLoggedIn } from '../authguard/authguard.guard';

/**
 * services
 */

import { AuthService } from '../../services/authservice/authentication.service';
import { TranslationService } from '../../services/translation/translation.service';
import { ImageUploadService } from '../../services/imageUpload/image-upload.service';

// for AoT support, https://github.com/ocombe/"@ngx-translate/core"#aot
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function declarations(): any {
  return [
    NavbarComponent,
    SocialBannerComponent,
    LanguagePickerComponent,
    ReturnButtonComponent,

  ]
}

/* translate support */
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    declarations()
  ],
  imports: [
    FormsModule,

    CommonModule,

    CollapseModule,

    HttpClientModule,

    RouterModule.forChild(routes),

    SimpleNotificationsModule.forRoot(),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
    }),

    TooltipModule.forRoot(),

  ],
  exports: [
    declarations(),
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    alreadyLoggedIn,
    TranslationService,
    ImageUploadService
  ],
})
export class SharedModule { }
