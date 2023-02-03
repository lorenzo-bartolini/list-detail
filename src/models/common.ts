import { User } from './user';

export abstract class Common {
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: User;
    updatedBy?: User;
}
