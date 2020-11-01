import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // add authorization header with basic auth credentials if available

    const loginDetails = 'admin-Standard:admin-Standard';
    // const loginDetails = 'guest:guest';

    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(loginDetails),
      },
    });

    return next.handle(request);
  }
}
