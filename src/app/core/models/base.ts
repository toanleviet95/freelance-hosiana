export enum UnitCurrency {
  'vnd' = 'vnd',
  'usd' = 'usd'
}
export interface Lang {
  vi?: string;
  en?: string;
}
export interface Property {
  key: string;
  value: any;
}
export interface Contact {
  agents?: Array<{
    userId: number;
    groupId: number;
    comNumber: number;
    comPercent: number;
  }>;
  contact?: {
    name: string;
    phone: string;
    email: string;
    comNumber: number;
    comPercent: number;
  };
}

export interface Address {
  cityId: number;
  districtId: number;
  wardId: number;
  address: string;
  latitude: number;
  longitude: number;
  streetName: string;
  streetNumber: string;
}
export interface AddressDetail extends Address {
  streetNumber: string;
  streetName: string;
  buildingName: string;
  landmark: string;
  unitNo: string;
  blockNo: string;
  postalCode: string;
  ward: string;
  district: string;
  city: string;
  country: string;
}

export interface Price {
  price: number;
  currency: string;
  secondPrice: number;
  discount: number;
  priceDown: number;
  remain: number;
}
