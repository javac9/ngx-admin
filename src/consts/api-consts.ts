export abstract class ApiConsts {

  // rest resources
  static readonly RESOURCE_ACCOUNT: 'org.opencrx.kernel.account1/provider/CRX/segment/Standard/account';
  static readonly RESOURCE_PRODUCT: 'org.opencrx.kernel.product1/provider/CRX/segment/Standard/product';

  // crx types
  static readonly ACCOUNT_TYPE_CONTACT: 'org.opencrx.kernel.account1.Contact';
  static readonly ACCOUNT_TYPE_LEGALENTITY: 'org.opencrx.kernel.account1.LegalEntity';

  static readonly ADDRESSABLE_TYPE_POSTAL: 'org.opencrx.kernel.account1.PostalAddress';
  static readonly ADDRESSABLE_TYPE_EMAIL: 'org.opencrx.kernel.account1.Email';

}
