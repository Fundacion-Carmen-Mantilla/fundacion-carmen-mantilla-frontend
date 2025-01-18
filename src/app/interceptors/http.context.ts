// Declare http context tokens here...
import {HttpContext, HttpContextToken} from '@angular/common/http';

// Declare http context tokens here...
export const NO_ACCESS_TOKEN = new HttpContextToken<boolean>(() => false);

// Declare functions using context token to set them true
export function skipAccessToken(skip: boolean = false) {
  return new HttpContext().set(NO_ACCESS_TOKEN, skip);
}
