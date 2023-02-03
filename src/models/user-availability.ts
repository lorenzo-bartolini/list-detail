import { User } from './user';

export interface UserAvailability {
    id?: number;
    day?: Date | string;
    startHour?: string; // '10:30'
    endHour?: string; // '10:30'
    allDay?: boolean;
    users?: User[]
}