import { Common } from './common';
import { LanguageDependentText } from './language-dependent-text';

export class EmailSettings extends Common {
  id?: string;
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  secure?: boolean;
  ignoreTLS?: boolean;
}

export class OutgoingEmailSettings extends Common {
  id?: string;
  title?: LanguageDependentText[];
  text?: LanguageDependentText[];
}

export class GeneralSettings extends Common {
  id?: string;
  hybrisBaseUrl?: string;
  hybrisUser?: string;
  hybrisPassword?: string;
  hybrisSourceSystemId?: string;
  hybrisSourceSystemType?: string;
  hybrisContactsPath?: string;
  hybrisContactsOriginId?: string;
  hybrisContactsSearchPath?: string;

  vltnHeaderUrl?: string;
  vltnFooterUrl?: string;
}

export class EmployeesSettings extends Common {
  id?: string;
  externalSystem?: ExternalSystem;
  servicePath?: string;
}

export class ContactsSettings extends Common {
  id?: string;
  externalSystem?: ExternalSystem;
  servicePath?: string;
}

export class ExternalSystem extends Common {
  id?: string;
  baseUrl?: string;
  user?: string;
  password?: string;
  description?: string;
}

export class GlobalText extends Common {
  id?: number;
  field?: string;
  lang?: string;
  country?: string;
  text?: string;
}
