import {HttpClient} from '@angular/common/http';
import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NbDialogService} from '@nebular/theme';
import {AccountService} from './account.service';
import {Contact} from '../../models/contact';
import {PostalAddress} from '../../models/address-postal';
import {ApiConsts} from '../../consts/api-consts';

@Component({
  selector: 'ngx-custom-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})

export class ContactFormComponent implements OnInit {

  contact: Contact = new Contact();
  postalAddress: PostalAddress = new PostalAddress();

  accountForm: FormGroup = null;

  constructor(
    private dialogService: NbDialogService,
    private http: HttpClient,
    private accountSrv: AccountService,
  ) {

  }

  ngOnInit() {

    // prep dummy contact
    this.contact['@type'] = ApiConsts.ACCOUNT_TYPE_CONTACT;
    this.contact.firstName = 'ngFirstName';
    this.contact.lastName = 'ngLastName';
    // prep dummy postalAddress
    this.postalAddress['@type'] = ApiConsts.ADDRESSABLE_TYPE_POSTAL;
    this.postalAddress.postalCity = 'XyzCity';

    this.accountSrv.saveUser(this.contact, this.postalAddress);
  }

  get firstName() {
    return this.accountForm.get('firstName');
  }

  get lastName() {
    return this.accountForm.get('lastName');
  }

  get dob() {
    return this.accountForm.get('additionalInfo.dob');
  }

  get salutation() {
    return this.accountForm.get('addionalInfo.salutation');
  }

  get gender() {
    return this.accountForm.get('additionalInfo.gender');
  }

  saveData() {
  }

  openAddressModal(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }
}
