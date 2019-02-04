export interface Post {
  id: number;
  isNew: boolean;
  image: string;
  isHavingGift: boolean;
  type: string;
  dayLeft: number;
  sku: string;
  title: string;
  location: string;
  price: string;
  oldPrice: string;
  discount: number;
  offeredBy: string;
  totalView: number;
  bonusViewThisWeek: number;
  tagCount: number;
  searchCount: number;
  ratingCount: number;
  customersMatchedCount: number;
  sharedCount: number;
  promotionList: object[];
}

export function generateMockPosts(): any {
  const data: Post[] = [
    {
      id: 1,
      isNew: true,
      image: 'https://res.cloudinary.com/hosiana/image/upload/f_auto,q_auto/w_836,h_537/production/assets/listing/HOSIANA-L0011398-0.jpg',
      isHavingGift: true,
      type: 'sale',
      dayLeft: 30,
      sku: 'VNGO-HN-0042',
      title: 'Vinhome Central Park bán căn hộ 3 phòng ngủ, 100m2, tầng cao view đẹp',
      location: 'Hồ Chí Minh, quận 1',
      price: '1 tỷ 300 triệu',
      oldPrice: '2 tỷ 600 triệu',
      discount: 50,
      offeredBy: 'Phương Nguyễn',
      totalView: 81,
      bonusViewThisWeek: 1,
      tagCount: 50,
      searchCount: 50,
      ratingCount: 12,
      customersMatchedCount: 3,
      sharedCount: 7,
      promotionList: [
        {
          promotion: 'Top Listing',
          dateFrom: '07/12/2018',
          dateTo: '09/12/2018'
        },
        {
          promotion: 'New',
          dateFrom: '07/12/2018',
          dateTo: '09/12/2018'
        }
      ]
    },
    {
      id: 2,
      isNew: false,
      image: 'https://res.cloudinary.com/hosiana/image/upload/f_auto,q_auto/w_324,h_216/production/assets/listing/HOSIANA-L0011409-0.jpg',
      isHavingGift: false,
      type: 'rent',
      dayLeft: 30,
      sku: 'VNGO-HN-0043',
      title: 'Vinhome Central Park bán căn hộ 3 phòng ngủ, 100m2, tầng cao view đẹp',
      location: 'Hồ Chí Minh, quận 1',
      price: '1 tỷ 300 triệu',
      oldPrice: '2 tỷ 600 triệu',
      discount: 50,
      offeredBy: 'Phương Nguyễn',
      totalView: 81,
      bonusViewThisWeek: 1,
      tagCount: 50,
      searchCount: 50,
      ratingCount: 12,
      customersMatchedCount: 3,
      sharedCount: 7,
      promotionList: [
        {
          promotion: 'Top Listing',
          dateFrom: '07/12/2018',
          dateTo: '09/12/2018'
        },
        {
          promotion: 'New',
          dateFrom: '07/12/2018',
          dateTo: '09/12/2018'
        }
      ]
    },
    {
      id: 3,
      isNew: true,
      image: 'https://res.cloudinary.com/hosiana/image/upload/f_auto,q_auto/w_324,h_216/production/assets/listing/HOSIANA-L0011392-0.jpg',
      isHavingGift: false,
      type: 'swap',
      dayLeft: 30,
      sku: 'VNGO-HN-0044',
      title: 'Vinhome Central Park bán căn hộ 3 phòng ngủ, 100m2, tầng cao view đẹp',
      location: 'Hồ Chí Minh, quận 1',
      price: '1 tỷ 300 triệu',
      oldPrice: '2 tỷ 600 triệu',
      discount: 50,
      offeredBy: 'Phương Nguyễn',
      totalView: 81,
      bonusViewThisWeek: 1,
      tagCount: 50,
      searchCount: 50,
      ratingCount: 12,
      customersMatchedCount: 3,
      sharedCount: 7,
      promotionList: [
        {
          promotion: 'Top Listing',
          dateFrom: '07/12/2018',
          dateTo: '09/12/2018'
        },
        {
          promotion: 'New',
          dateFrom: '07/12/2018',
          dateTo: '09/12/2018'
        }
      ]
    }
  ];

  const result = {
    result: {
      statusName: 'SUCCESS',
      statusCode: 200,
      data: {
        total: data.length,
        listings: data
      }
    }
  };

  return result;
}