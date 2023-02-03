import { User } from './user';
import { Common } from './common';
import { OpeningHour } from './opening-hours';
import { LanguageDependentText } from './language-dependent-text';
import { ClosingHour } from './closing-hours';
import { AppointmentAvailabilityRule } from '../enums';
import { UserAvailability } from './user-availability';
import { AppointmentType } from './appointment-type';
import { GeographicArea } from './geographic-area';
import { Employee } from './employee';

export class Store extends Common {
  id?: string;
  name?: string;
  address?: string;
  city?: string;
  country?: string;
  postalCode?: string;
  lang?: string;
  maxPeopleInStore?: number;
  email?: string;
  emailSender?: string;
  users?: number[];
  employees?: Employee[];
  openingHours?: OpeningHour[];
  closingHours?: ClosingHour[];
  telephone?: string;
  openingDate?:string;
  closingDate?: string
  closed?: boolean;

  profilingConsentText?: LanguageDependentText[];
  marketingConsentText?: LanguageDependentText[];
  generalDisclaimerText?: LanguageDependentText[];
  privacyDisclaimerText?: LanguageDependentText[];

  newEmailText?: LanguageDependentText[];
  editEmailText?: LanguageDependentText[];
  deleteEmailText?: LanguageDependentText[];

  gcpUserEmail?: string;
  gcpCalendarId?: string;
  gcpServiceAccountEmail?: string;
  gcpServiceAccountPrivateKey?: string;

  appointmentTypes?: AppointmentType[];
  userAvailabilities?: UserAvailability[];
  timezone?: string;
  active?: boolean;
  validFrom?: Date;
  validTo?: Date;
  public?: boolean;
  maxAppointmentsPerSlot?: number;
  nameKatakana?: string;
  sourceId?: string;
  sourceIdName?: string;
  sourceType?: string;
  region?: string;
  state?: string;
  province?: string;

  isVirtual?: boolean;
  geographicArea?: GeographicArea
}
