import { AppointmentAvailabilityRule, AppointmentTypeCategory } from "../enums";
import { Common } from "./common";
import { LanguageDependentText } from "./language-dependent-text";

export class AppointmentType extends Common {
  id?: string;
  name?: LanguageDependentText[];
  category?: AppointmentTypeCategory;
  duration?: number;
  availabilityRule?: AppointmentAvailabilityRule;
  public?: boolean;
}
