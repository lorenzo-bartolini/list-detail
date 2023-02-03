export interface SapCrmEmployeesByStoreRequest {
  I_ACTION: string;
  T_STORE: {
    item: {
      PARTNER: string;
    }[];
  };
}

export interface SapCrmEmployeesByStoreResponse {
  ET_RESULT: {
    item: {
      STORE_ID: string;
      STORE_COUNTRY: string;
      STORE_DES: string;
      STORE_BRAND: string;
      STORE_CHANNEL: string;
      ASSOCIATE_ID: string;
      ASSOCIATE_FULL_NAME: string;
      LANGUAGE: string;
      NAME_DEPARTMENT: string;
      ADDRESS_DEPARTMENT: string;
    }[];
  };
}

export interface SapCrmContactsServiceRequest {
  Action?: string;
  BoutiqueId?: string;
  Country?: string;
  Email?: string;
  Gid?: string;
  IdCdc?: string;
  IdCrm?: string;
  Marketing?: string;
  Mobile?: string;
  Name?: string;
  Prefix?: string;
  Profiling?: string;
  SalesAssId?: string;
  Surname?: string;
}

export interface SapCrmContactsServiceResponse {
  ErrorText: string;
  FoundBpsTab: {
    item: SapCrmContact[];
  };
  IdCrmOut: 'char10|xsd:string|maxLength';
}

export interface SapCrmContact {
  IdCrm: string;
  IdCdc: string;
  Gid: string;
  Name: string;
  Surname: string;
  OtherAlphabet: string;
  Email: string;
  Country: string;
  Prefix: string;
  Mobile: string;
  Marketing: string;
  Profiling: string;
  DedStore: string;
  DedAssoc: string;
  SecDedStore: string;
  SecDedAssoc: string;
  FriendHouse: string;
  Spend1YrRoll: string;
}
