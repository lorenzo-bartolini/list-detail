
import { PreferredCommunicationChannel } from '../enums';
import { AppointmentSource } from '../enums/appointment-source.enum';
import { AppointmentType } from './appointment-type';
import { Common } from './common';
import { Contact } from './contact';
import { Employee } from './employee';
import { Store } from './store';

export class Appointment extends Common {
  isOca?:boolean;
  id?: number;
  type?: AppointmentType;
  store?: Store;
  contact?: Contact;
  date?: Date | string;
  dateStore?: Date | string;
  startTime?: string;
  endTime?: string;
  salesAssistant?: Employee;
  checkedIn?: boolean;
  fromBackoffice?: boolean;
  location?: string;
  notes?: string;
  preferredCommunicationChannel?: PreferredCommunicationChannel;
  preferredTimezone?: string;
  refSku?: string;
  refOrder?: string;
  deletedAt?: Date;
  newContact?: boolean;
  cancellationReasonId?: string;
  cancellationReasonDescription?: string;
  source?: AppointmentSource;
  lang?: string;
  country?: string;
}
