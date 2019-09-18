import { Options } from 'angular2-notifications';
import { environment } from '../../environments/environment';

export class AppSettings {
  public static get API_SERVER(): string {
    return environment.api_server;
  }

  public static get BASE_URL(): any {
    return window.location.protocol + '//' + window.location.host;
  }

  public static get RECAPTCHA_SITE_KEY(): string {
    return '';
  }

  public static get JWT_TOKEN_KEY(): string {
    return 'token';
  }

  public static get USERNAME(): string {
    return 'username';
  }

  public static get PROFILE_KEY(): string {
    return 'profile';
  }

    /*******************
     * Time Constants
     */


  public static get ONE_DAY_IN_MILLISECONDS(): number {
    return 86400000;
  }

  public static get ONE_HOUR_IN_MILLISECONDS(): number {
    return 3600000;
  }

  public static get ONE_MINUTE_IN_MILLISECONDS(): number {
    return 60000;
  }

  public static get ONE_SECOND_IN_MILLISECONDS(): number {
    return 1000;
  }

  /*******************
   * Date Format Constants
   */

  public static get DEFAULT_ANGULAR_DATE_FORMAT(): string {
    return 'dd MMM yyyy';
  }

  public static get DEFAULT_ANGULAR_DATE_AND_TIME_FORMAT(): string {
    return 'dd MMM yyyy HH:mm';
  }

  public static get DEFAULT_PICKADATE_DATE_DISPLAY_FORMAT(): string {
    return 'dd mmm yyyy';
  }

  public static get DEFAULT_PICKADATE_DATE_AND_TIME_DISPLAY_FORMAT(): string {
    return 'dd mmm yyyy HH:mm';
  }

  public static get DEFAULT_PICKADATE_DATE_PERSISTENCE_FORMAT(): string {
    return 'yyyy-mm-dd';
  }


  /*******************
   * File Upload Constants
   */

  public static get MAXIMUM_IMAGE_UPLOAD_SIZE(): number {
    return 1024 * 1024 * 5; // 5MB
  }

  public static get DEFAULT_ALLOWED_IMAGE_TYPES(): string[] {
    return ['image/png', 'image/jpeg'];
  }
  
  public static get EDITOR_ALLOWED_IMAGE_TYPES(): string[] {
    return ['jpeg', 'jpg', 'png'];
  }

  public static get GET_FILE_REQUEST(): string {
      return 'file';
  }

  public static get MAXIMUM_DOCUMENT_UPLOAD_SIZE(): number {
    return 8000000; // 8MB
  }

  public static get ALLOWED_DOCUMENT_TYPES(): string[] {
    return [
      'text/csv',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
    ];
  }

  /*******************
   * File Download Constants
   */

  public static get USER_REPORT_SPREADSHEET_FILENAME(): string {
    return 'user_report.xls';
  }

  /********************
   * Regex patterns
   */
  public static get URL_REGEX_PATTERN(): RegExp {
    // thanks to https://gist.github.com/dperini/729294
    return new RegExp(
      '^' +
      // protocol identifier (optional)
      '(?:(?:https?|ftp)://)?' +
      // user:pass authentication
      '(?:\\S+(?::\\S*)?@)?' +
      '(?:' +
      // IP address exclusion
      // private & local networks
      '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +
      '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
      '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
      // IP address dotted notation octets
      // excludes loopback network 0.0.0.0
      // excludes reserved space >= 224.0.0.0
      // excludes network & broacast addresses
      // (first & last IP address of each class)
      '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
      '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
      '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
      '|' +
      // host name
      '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
      // domain name
      '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
      // TLD identifier
      '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
      // TLD may end with dot
      '\\.?' +
      ')' +
      // port number
      '(?::\\d{2,5})?' +
      // resource path
      '(?:[/?#]\\S*)?' +
      '$',
      'i',
    );
  }

  public static get TWITTER_USERNAME_REGEX_PATTERN(): RegExp {
    // thanks to http://stackoverflow.com/a/2304640
    return /@([A-Za-z0-9_]+)/;
  }

  public static get ONE_TO_ONE_HUNDRED_WHOLE_NUMBER_REGEX_PATTERN(): RegExp {
    return /^([0-9]|[1-9][0-9]|100)$/;
  }

  public static get POSITIVE_WHOLE_NUMBER_REGEX_PATTERN(): RegExp {
    return /^\d+$/;
  }

   /********************
   * Cloudinary Creds
   */

  public static get cloudinaryConfiguration(): any {
    return {};
  }
}