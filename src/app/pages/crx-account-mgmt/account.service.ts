import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ContactResponse, ContactResponseObject} from './account.contact-response';
import {Contact} from './contact';
import {ContactResp} from './contact-response';
import {PostalAddress} from './address-postal';

@Injectable({
  providedIn: 'root',
})

export class AccountService {

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

  saveUser(contact: Contact, postalAddress: PostalAddress): Subscription {
    return this.http.post<ContactResp>(this.baseUrl + this.endpoint + 'account', contact)
      .subscribe((responseObj) => {
        this.http.post(this.baseUrl + this.endpoint + 'account/' +
          responseObj.identity.split('/')[8] + '/address', postalAddress)
          .subscribe(r => console.log(r));
      });
  }

}
