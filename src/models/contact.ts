import { Common } from './common';
import { Store } from './store';

export class Contact extends Common {
  id?: number;
  email?: string;
  name?: string;
  firstname?: string;
  lastname?: string;
  telephone?: string;
  emailConsent?: boolean;
  phoneConsent?: boolean;
  profilingConsent?: boolean;
  marketingConsent?: boolean;
  privacyConsent?: boolean;
  replicatedToCrm?: boolean;
  country?: string;
  title?: string;
  dedicatedEmployee?: string;
  dedicatedSecondaryEmployee?: string;
  dedicatedStoreV?: string;
  dedicatedSecondaryStoreV?: string;
  idCrm?: string;
  idCdc?: string;
  otherAlphabet?: string;
  foh?: string;
  segmentation?: string;
  telephonePrefix?: string;
}
