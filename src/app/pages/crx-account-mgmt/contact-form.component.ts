import {HttpClient} from '@angular/common/http';
import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NbDialogService} from '@nebular/theme';

interface Contact {
  firstName: string;
  lastName: string;
}

interface AdditionalInfo {
  salutation: string;
  dob: string;
  gender: string;
}

interface Account {
  contact: Contact;
  addtionalInfo: AdditionalInfo;
}

@Component({
  selector: 'ngx-custom-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})

export class ContactFormComponent implements OnInit {
  accountForm: FormGroup = null;

  constructor(
    private fb: FormBuilder,
    private dialogService: NbDialogService,
    private http: HttpClient,
  ) {

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

  ngOnInit() {

  }

  saveData() {
  }

  openAddressModal(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }
}
