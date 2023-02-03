export class Job {
  id?: number;
  jobName?: string;
  startedAt?: Date;
  endedAt?: Date;
  logs?: JobLog[];
  status?: string; /* 'ok'|'ok_nok'| 'nok' */
  createdAt?: Date;
  updatedAt?: Date;
}

export class JobLog {
  id?: number;
  text?: string
  error?: boolean;
  createdAt?: Date;
}
