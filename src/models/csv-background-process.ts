import { BackgroundProcessStatus, CsvBackgroundProcessType, CsvObjectType } from '../enums';
import { User } from './user';

export class CsvBackgroundProcess {
  id?: number;
  start?: Date;
  end?: Date;
  user?: User;
  type?: CsvBackgroundProcessType;
  status?: BackgroundProcessStatus;
  filePath?: string;
  objectType?: CsvObjectType;
  errors?: number;
  successes?: number;
  processed?: number;
  rowsErrors?: CsvBackgroundProcessError[];
}

export class CsvBackgroundProcessError {
  id?: number;
  backgroundProcess?: CsvBackgroundProcess;
  row?: number;
  error?: string;
  detail?: string;
}
