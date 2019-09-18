import { AppSettings } from './config';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from 'angular2-notifications';


const ERROR_KEY_PREFIX = 'ErrorCodes-';

export function getErrorMessageFromRestCall(error: any): string {
  console.log(error);
  return 'ErrorCodes-GENERIC_TITLE';
}

export function getErrors(error: any): string[] {
  /**
   * given an input error object, which may be a Response object, parse it for an error, then return the translation
   *  keys for the errors
   */
  const errorKeys: string[] = [];

  console.log(error);

  try {
    const json = error.json();

    if (json.status === 403) {
      errorKeys.push('ErrorCodes-GENERIC_FORBIDDEN');
    }

    json.errors.forEach(
      (item) => {
        if (item.defaultMessage) {
          errorKeys.push(item.defaultMessage);
        } else if (item.errorCode) {
          errorKeys.push(`${ERROR_KEY_PREFIX}${item.errorCode}`);
        }
      },
    );
  } catch (e) {
    // do nothing
  }

  if (errorKeys.length === 0) {
    errorKeys.push('ErrorCodes-GENERIC_UNKNOWN');
  }

  return errorKeys;
}

export function getSingleError(error: any): string {
  /**
   * for the cases where only a single error at most is expected
   */
  return getErrors(error)[0];
}

export function handleErrors(error: any, ts: TranslateService, ns: NotificationsService, title: string = 'ErrorCodes-GENERIC_TITLE'): void {
  getErrors(error).forEach(
    (key: string) => ns.error(
      ts.instant(title),
      ts.instant(key),
    ),
  );
}