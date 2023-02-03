import { UserRole } from '../enums';
import { Store } from './store';

export class User {
  id?: string;
  firstname?: string;
  lastname?: string;
  name?: string;
  email?: string;
  password?: string;
  shouldChangePassword?: boolean;
  role?: UserRole;
  country?: string;
  stores?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  confirmed?: boolean;
  blocked?: boolean;
  picture?: string;
}

export class Credentials {
  email?: string;
  password?: string;
  language?: string;
}
