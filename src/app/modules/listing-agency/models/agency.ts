import * as Base from '@app/core/models/base';

export interface Item {
  id: number;
  name: string;
}
export interface ItemFilter {
  id: number;
  name: string;
  active?: boolean;
}
export interface GeoCode {
  displayPosition: any;
  address: any;
}
export interface BaseList {
  id: number;
  sku: string;
  thumb: string;
  listingType: number;
  listingService: number;
  title: string;
}
export interface Listing extends BaseList {
  address: Base.AddressDetail;
  price: Base.Price;
  remain: number;
  offerBy: {
    id: number;
    firstName: string;
    lastName: string;
  };
  views: number;
  favorites: number;
  viewOfWeek: number;
  request: number;
  search: number;
  promotions: {
    new: number;
    discount: number;
    booster: number;
    border: number;
    present: number;
  };
  // TODO: shares
}
export interface Relist extends BaseList {
  publishedAt: string;
  expiredAt: string;
}
export interface Promotion extends Listing {}

export interface Agency {
  id?: number;
  listingType: number;
  serviceId: number;
  cateId: number;
  properties: Array<Base.Property>;
  price: {
    unitCurrency: string;
    mainPrice: number;
    deposit?: number;
    manageFee?: number;
    rentalNext?: number;
    includeFee?: boolean;
    loanSupport?: boolean;
  };
  location: {
    projectId?: number;
    projectName?: string;
    address: Base.Address;
  };
  facilities: Array<number>; // Facilities & Amentilies
  desc: {
    title: Base.Lang;
    description?: Base.Lang;
  };
  medias: {
    photos: Array<number>;
    link?: string;
  };
  swap?: Array<Base.Property>;
  contacts?: Base.Contact;
  // TODO: ADD CONTACT MANUAL
  emailContact?: string;
  // Promote step
  isRenew: boolean; // 30 days = false
  promotions?: {
    publishFee?: string;
    numberDays?: number;
    publishedAt?: string; // Y-m-d H:i:s start when submit == current date
    packages?: number[];
    isRenew?: boolean;
  };
  publish?: boolean;
  publishedAt?: string;
}

export interface AgencyDetail extends Agency {
  id: number;
}

export interface Category {
  id: number;
  key: string;
  type: number;
  name: string;
}
export interface Facility {
  name: string;
  type: number;
  items: Item[];
}

export interface ExchangeRate {
  id?: number;
  fromCurrency: string;
  toCurrency: number;
  startDate: string;
  endDate: string;
  exchangeRate: number;
}
export interface City {
  id: number;
  code: string;
  name: string;
}
export interface District {
  id: number;
  cityId: number;
  code: string;
  name: string;
}
export interface Ward {
  id: number;
  districtId: number;
  code: string;
  name: string;
}
export enum PromotionType {
  new = 1,
  discount = 2,
  border = 3,
  present = 4,
  booster = 5
}

export interface PromotionList {
  id: number;
  name: string;
  icon: string;
  description: string;
  type: PromotionType;
  price: number;
  unitCurrency: Base.UnitCurrency;
}

export interface ListingTotal {
  listing: number;
  relist: number;
  promotion: number;
}

export interface Page {
  id?: string;
  activePage: 1;
  size: number;
  totalElements: number;
  displayPage: number;
}

export interface AgencyStaff {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatar: string;
}

// export interface Filter {
//   id: number;
//   title: string;
//   active?: boolean;
// }

// export function generateMockAgency(): Agency {
//     return {
//         listingType: 1,
//         serviceId: 1,
//         cateId: 1,
//         properties: [
//             {
//                 key: 'bedroom',
//                 value: 0
//             },
//             {
//                 key: 'bathroom',
//                 value: 1
//             },
//             {
//                 key: 'floor',
//                 value: 1
//             },
//             {
//                 key: 'floorArea',
//                 value: 1
//             },
//             {
//                 key: 'landType',
//                 value: [1, 2],
//             },
//             {
//                 key: 'landArea',
//                 value: 1
//             },
//             {
//                 key: 'accessForCar',
//                 value: true
//             }
//         ],
//         price: {
//             unitCurrency: 'vnd',
//             mainPrice: 1000000000000,
//             deposit: 10000000,
//             manageFee: 1000000,
//             rentalNext: 100,
//             includeFee: true,
//             loanSupport: true
//         },
//         location: {
//             projectId: '',
//             projectName: '',
//             address: {
//                 cityId: 1,
//                 districtId: 1,
//                 wardId: 1,
//                 latitude: '',
//                 longitude: '',
//                 address: 'Ho chi Minh, Ho Chi Minh'
//             }
//         },
//         facilities: [1, 2, 3, 4, 5],
//         desc: {
//             title: {
//                 vi: '',
//                 en: 'Land for sale in Lam Dong, Da Lat'
//             },
//             description: {
//                 vi: '',
//                 en: 'Land for sale in Lam Dong, Da Lat, 467m²'
//             }
//         },
//         medias: {
//             photos: [1, 2],
//             link: 'https://www.youtube.com/watch?v=Bzzvoerf1EM'
//         },
//         swap: [
//             {
//                 key: 'minimumArea',
//                 value: 0
//             },
//             {
//                 key: 'city',
//                 value: 1
//             },
//             {
//                 key: 'ditrict',
//                 value: 1
//             },
//             {
//                 key: 'bedroom',
//                 value: 1
//             },
//             {
//                 key: 'facility',
//                 value: '1,2,3,4,5,6'
//             }
//         ],
//         contacts: {
//             agents: [
//                 {
//                     userId: 9,
//                     groupId: 1,
//                     comNumber: 1000000,
//                     comPercent: 0
//                 }
//             ],
//             // contact: {
//             //   name: 'demo',
//             //   phone: 1,
//             //   email: 'thuan@abc.com',
//             //   comNumber: 0,
//             //   comPercent: 10
//             // }
//         },
//         // TODO: ADD CONTACT MANUAL
//         emailContact: 'thuanngo@abc.xyz',
//         isRenew: true,
//         promotions: {
//             packages: [5, 6],
//             numberDays: 7,
//             isRenew: false,
//             publishedAt: '2018-08-09 15:51:33'
//         },
//         publish: true,
//         publishedAt: '2018-08-09 15:51:33'
//     }
// };
