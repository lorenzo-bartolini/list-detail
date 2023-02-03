import { WeekDays } from '../enums';
import { Common } from './common';

export class OpeningHour extends Common {
    day?: WeekDays;
    morning_open?: string;
    morning_close?: string;
    afternoon_open?: string;
    afternoon_close?: string;
}
