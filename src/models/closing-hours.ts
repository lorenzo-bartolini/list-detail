export interface ClosingHour {
    id?: number;
    day: Date | string;
    startHour?: string;
    endHour?: string;
    description?: string;
    allDay?: boolean;
    store?: string;
}