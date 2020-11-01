// To parse this data:
//
//   import { Convert, UserResponse } from "./file";
//
//   const userResponse = Convert.toUserResponse(json);

export interface ContactResponse {
  type: string;
  href: string;
  string: string;
  total: string;
  objects: ContactResponseObject[];
}


export interface ContactResponseObject {
  accessLevelBrowse: number;
  accessLevelDelete: number;
  accessLevelUpdate: number;
  accountCategory: AccountCategory;
  accountRating: number;
  accountState: number;
  accountType: AccountCategory;
  aliasName: string;
  anniversary?: Date;
  annualIncomeAmount?: number;
  annualIncomeCurrency?: number;
  assistant?: Assistant;
  birthdate?: Date;
  businessType: AccountCategory;
  category: Category;
  childrenNames?: Category;
  citizenship?: AccountCategory;
  closing?: string;
  closingCode?: number;
  contact: Contact;
  createdAt: Date;
  createdBy: Category;
  dateOfDeath?: Date;
  department?: string;
  deputy?: Assistant;
  description: string;
  disabled: boolean;
  disabledReason: string;
  doNotBulkPostalMail?: boolean;
  doNotEMail?: boolean;
  doNotFax?: boolean;
  doNotPhone?: boolean;
  doNotPostalMail?: boolean;
  education?: number;
  extBoolean0: boolean;
  extBoolean1: boolean;
  extBoolean2: boolean;
  extBoolean3: boolean;
  extBoolean4: boolean;
  extBoolean5: boolean;
  extBoolean6: boolean;
  extBoolean7: boolean;
  extBoolean8: boolean;
  extBoolean9: boolean;
  extCode0: number;
  extCode1: number;
  extCode10: number;
  extCode11: number;
  extCode12: number;
  extCode13: number;
  extCode14: number;
  extCode15: number;
  extCode16: number;
  extCode17: number;
  extCode18: number;
  extCode19: number;
  extCode2: number;
  extCode20: AccountCategory;
  extCode21: AccountCategory;
  extCode22: AccountCategory;
  extCode23: AccountCategory;
  extCode24: AccountCategory;
  extCode25: AccountCategory;
  extCode26: AccountCategory;
  extCode27: AccountCategory;
  extCode28: AccountCategory;
  extCode29: AccountCategory;
  extCode3: number;
  extCode4: number;
  extCode5: number;
  extCode6: number;
  extCode7: number;
  extCode8: number;
  extCode9: number;
  extDate0: string;
  extDate1: string;
  extDate2: string;
  extDate3: string;
  extDate4: string;
  extDate5: string;
  extDate6: string;
  extDate7: string;
  extDate8: string;
  extDate9: string;
  extDateTime0: Date;
  extDateTime1: Date;
  extDateTime2: Date;
  extDateTime3: Date;
  extDateTime4: Date;
  extDateTime5: Date;
  extDateTime6: Date;
  extDateTime7: Date;
  extDateTime8: Date;
  extDateTime9: Date;
  extNumber0: number;
  extNumber1: number;
  extNumber2: number;
  extNumber3: number;
  extNumber4: number;
  extNumber5: number;
  extNumber6: number;
  extNumber7: number;
  extNumber8: number;
  extNumber9: number;
  extString0: string;
  extString1: string;
  extString2: string;
  extString3: string;
  extString4: string;
  extString5: string;
  extString6: string;
  extString7: string;
  extString8: string;
  extString9: string;
  externalLink: Category;
  familyStatus?: number;
  firstName?: string;
  fullName: string;
  gender?: number;
  governmentID: string;
  identity: string;
  jobRole?: string;
  jobTitle?: string;
  lastName?: string;
  master: Assistant;
  middleName?: string;
  modifiedAt: Date;
  modifiedBy: Category;
  nickName?: string;
  numberOfChildren?: number;
  organization?: string;
  originalName?: string;
  owner: Category;
  owningGroup: Contact;
  owningUser: Assistant;
  partner: Contact;
  picture: Assistant;
  pictureContent: string;
  pictureContentMIMEType: string;
  pictureContentName: string;
  placeOfBirth?: string;
  placeOfDeath?: string;
  placeOfOrigin?: string;
  preferredContactMethod?: number;
  preferredSpokenLanguage?: number;
  preferredWrittenLanguage?: number;
  religion?: AccountCategory;
  reportsTo?: Assistant;
  salutation?: string;
  salutationCode?: number;
  searchDateTime0: Date;
  searchDateTime1: Date;
  searchDateTime2: Date;
  searchDateTime3: Date;
  searchDateTime4: Date;
  searchDateTime5: Date;
  searchDateTime6: Date;
  searchDateTime7: Date;
  searchDateTime8: Date;
  searchDateTime9: Date;
  searchEmail1: string;
  searchEmail2: string;
  searchMobile1: string;
  searchMobile2: string;
  searchName: string;
  searchNumber0: number;
  searchNumber1: number;
  searchNumber2: number;
  searchNumber3: number;
  searchNumber4: number;
  searchNumber5: number;
  searchNumber6: number;
  searchNumber7: number;
  searchNumber8: number;
  searchNumber9: number;
  searchPhone1: string;
  searchPhone2: string;
  searchPostal1AddressLine: string;
  searchPostal1City: string;
  searchPostal1Country: number;
  searchPostal1PostalCode: string;
  searchPostal1State: string;
  searchPostal1Street: string;
  searchPostal1StreetNumber: string;
  searchPostal2AddressLine: string;
  searchPostal2City: string;
  searchPostal2Country: number;
  searchPostal2PostalCode: string;
  searchPostal2State: string;
  searchPostal2Street: string;
  searchPostal2StreetNumber: string;
  searchString0: string;
  searchString1: string;
  searchString2: string;
  searchString3: string;
  searchString4: string;
  searchString5: string;
  searchString6: string;
  searchString7: string;
  searchString8: string;
  searchString9: string;
  suffix?: string;
  userBoolean0: boolean;
  userBoolean1: boolean;
  userBoolean2: boolean;
  userBoolean3: boolean;
  userBoolean4: UserBoolean4;
  userCode0: number;
  userCode1: number;
  userCode2: number;
  userCode3: number;
  userCode4: AccountCategory;
  userDate0: string;
  userDate1: string;
  userDate2: string;
  userDate3: string;
  userDate4: Category;
  userDateTime0: Date;
  userDateTime1: Date;
  userDateTime2: Date;
  userDateTime3: Date;
  userDateTime4: Category;
  userNumber0: number;
  userNumber1: number;
  userNumber2: number;
  userNumber3: number;
  userNumber4: AccountCategory;
  userString0: string;
  userString1: string;
  userString2: string;
  userString3: string;
  userString4: Category;
  vcard: string;
  type: string;
  id: string;
  href: string;
  version: string;
  name?: string;
  dissolvedAt?: string;
  establishedAt?: string;
  industry?: number;
  numberOfEmployees?: number;
  numberOfEmployeesCategory?: number;
  organizationalUnit?: Assistant;
  stockExchange?: string;
  tickerSymbol?: string;
}

export interface AccountCategory {
  item: AccountCategoryItem[];
}

export interface AccountCategoryItem {
  index: number;
  empty: number;
}

export interface Assistant {
  href: string;
  empty: string;
}

export interface Category {
  item: CategoryItem[];
}

export interface CategoryItem {
  index: number;
  empty: Date | string;
}

export interface Contact {
  item: ContactItem[];
}

export interface ContactItem {
  href: string;
  index: number;
  empty: string;
}

export interface UserBoolean4 {
  item: UserBoolean4Item[];
}

export interface UserBoolean4Item {
  index: number;
  empty: boolean;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toUserResponse(json: string): ContactResponse {
    return JSON.parse(json);
  }

  public static userResponseToJson(value: ContactResponse): string {
    return JSON.stringify(value);
  }
}
