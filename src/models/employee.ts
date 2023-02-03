import { Common } from './common';
import { Store } from './store';

export class Employee extends Common {
  id?: string;
  name?: string;
  firstname?: string;
  lastname?: string;
  stores?: Store[];
  inactive?: boolean;
}
