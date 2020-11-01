export abstract class ApiConsts {

  // rest resources
  static readonly RESOURCE_ACCOUNT: string = 'org.opencrx.kernel.account1/provider/CRX/segment/Standard/account';
  static readonly RESOURCE_PRODUCT: string = 'org.opencrx.kernel.product1/provider/CRX/segment/Standard/product';

  // crx types
  static readonly ACCOUNT_TYPE_CONTACT: string = 'org.opencrx.kernel.account1.Contact';
  static readonly ACCOUNT_TYPE_LEGALENTITY: string = 'org.opencrx.kernel.account1.LegalEntity';

  static readonly ADDRESSABLE_TYPE_POSTAL: string = 'org.opencrx.kernel.account1.PostalAddress';
  static readonly ADDRESSABLE_TYPE_EMAIL: string = 'org.opencrx.kernel.account1.Email';

}
