import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ContactResponse, ContactResponseObject} from './account.contact-response';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {

  baseUrl = environment.apiUrl;
  endpoint = 'org.opencrx.kernel.account1/provider/CRX/segment/Standard/';

  constructor(private http: HttpClient) {
  }

  /* UserManagements */

  getUsers(): Observable<ContactResponse> {
    return this.http.get<ContactResponse>(this.baseUrl + this.endpoint + 'account');
  }

  getUser(id): Observable<ContactResponseObject> {
    return this.http.get<ContactResponseObject>(this.baseUrl + this.endpoint + 'account/' + id);
  }

  updateUser(id, user): Observable<any | null> {
    return this.http.put(this.baseUrl + this.endpoint + 'account/' + id, user);
  }

}
