import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from 'angular2-notifications';
import { AppSettings } from '../../common/config';
import { Language, LANGUAGE_CONFIG } from './language.model';

@Component({
    selector: 'sg-language-selector',
    templateUrl: './languagePicker.component.html',
})

export class LanguagePickerComponent implements OnInit {

    selectedLanguage: Language = null;
    languages: Language[] = LANGUAGE_CONFIG;

    isChangingLanguages: boolean = false;

    constructor(
        private translateService: TranslateService,
        private notificationService: NotificationsService
    ) {
    }

    ngOnInit() {

        this.changeLangTo(
            this.languages.find(
                item => item.languageCode === this.translateService.currentLang,
            ),
        );

        this.translateService.onLangChange
            .subscribe(
                (next) => {
                    this.changeLangTo(
                        this.languages.find(
                            item => item.languageCode === next.lang,
                        ),
                    );
                },
        );
    }

    changeLangTo(lang: Language): void {
        if (this.selectedLanguage && (this.selectedLanguage.languageCode === lang.languageCode)) {
            return;
        }

        // due to https://github.com/ocombe/@ngx-translate/core/issues/390
        // if the request fails, the error function passed to subscribe() will never be called, so we cannot enforce
        // this rule
        // if (this.isChangingLanguages) {
        // 	return;
        // }

        // this.isChangingLanguages = true;

        this.selectedLanguage = lang;

        this.translateService
            .use(
                lang.languageCode,
        )
            .subscribe(
                (success) => {
                    this.isChangingLanguages = false;
                },
                (error) => {
                    this.isChangingLanguages = false;

                    this.notificationService.error(
                        this.translateService.instant('LanguagePickerComponent-TITLE'),
                        this.translateService.instant('LanguagePickerComponent-FAILED_TO_CHANGE'),
                    );
                },
        );

    }
}