import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../../models/contact';
import {PostalAddress} from '../../models/address-postal';
import {ApiConsts} from '../../consts/api-consts';
import {ContactResponse} from '../../models/contact-response';

@Injectable({
  providedIn: 'root',
})

export class AccountService {

  fullAccountEndpoint: string = environment.apiUrl + ApiConsts.RESOURCE_ACCOUNT;

  constructor(private http: HttpClient) {
  }

  /* UserManagements */

  getUsers(): Observable<ContactResponse> {
    return this.http.get<ContactResponse>(this.fullAccountEndpoint);
  }

  getUser(id): Observable<ContactResponse> {
    return this.http.get<ContactResponse>(this.fullAccountEndpoint + '/' + id);
  }

  updateUser(id, user): Observable<any | null> {
    return this.http.put(this.fullAccountEndpoint + '/' + id, user);
  }

  saveUser(contact: Contact, postalAddress: PostalAddress): Subscription {
    return this.http.post<ContactResponse>(this.fullAccountEndpoint, contact)
      .subscribe((responseObj) => {
        this.http.post(this.fullAccountEndpoint + '/' +
          responseObj.identity.split('/')[8] + '/address', postalAddress)
          .subscribe(r => console.log(r));
      });
  }

}
