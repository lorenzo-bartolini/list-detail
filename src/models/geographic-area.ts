export interface GeographicArea {
  id?:number;
  name?: string;
  countries?: Country[];
}

export interface Country {
  code?: string;
}
