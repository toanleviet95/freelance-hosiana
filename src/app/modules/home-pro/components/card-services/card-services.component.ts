import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from '@core/services/language.service'

@Component({
    selector: 'app-card-services',
    templateUrl: './card-services.component.html',
    styleUrls: ['./card-services.component.scss']
})
export class CardServicesComponent implements OnInit {
    @Input()
    color = '';
    @Input()
    title = '';
    @Input()
    elementId = '';
    services:any = [];
    currentLang:any;
    types:any;
    leftColor:string;
    rightColor:string;

    constructor(private languageService:LanguageService) {
        this.currentLang = this.languageService.getCurrentLanguage();
    }

    ngOnInit() {
        this.types = ['basic', 'plus', 'pro'];
        if(this.title == 'agency') {
            this.rightColor = '#c868a8';
            this.leftColor = '#9073cd';
        } else if(this.title == 'hs') {
            this.rightColor = '#776cf6';
            this.leftColor = '#8981fb';
        } else if(this.title == 'proj') {
            this.rightColor = '#d8654a';
            this.leftColor = '#ebb27d';
        } else {
            this.rightColor = '#5da4d0';
            this.leftColor = '#71d3a0'
        }
        // if(this.title == 'REAL ESTATE AGENCY') {
        //     if(this.currentLang == 'en') {
        //         this.type = 'REAL ESTATE AGENCY';
        //         this.services = [
        //             {
        //                 title: 'BASIC',
        //                 button: "Start Your Free Trial",
        //                 price: {
        //                     value: '390,000đ/ month',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: '1 account', show: 1}, 
        //                     {value: '20 listing/month', show: 1}, 
        //                     {value: 'No Team Management ', show: 0}, 
        //                     {value: 'No Review System', show: 0},
        //                     {value: 'Offer listing: 20 listing/month', show: 1},
        //                     {value: 'No Listing Assistant', show: 0}
        //                 ]
        //             },
        //             {
        //                 title: 'PLUS',
        //                 button: "Buy Now",
        //                 price: {
        //                     value: '2,099,000đ/ month',
        //                     show: 1
        //                 },
        //                 oldPrice: '',
        //                 sale: 50,
        //                 listContent: [
        //                     {value: '10 user',show: 1}, 
        //                     {value: '100 listing/month', show: 1},
        //                     {value: 'Team Management', show: 1},
        //                     {value: 'Review System', show: 1},
        //                     {value: 'Offer listing: 100 listing/month', show: 1},
        //                     {value: 'No Listing Assistant', show: 0}
        //                 ]
        //             },
        //               {
        //                 title: 'PRO',
        //                 button: "Contact Us",
        //                 price: {
        //                     value: 'Custom Price',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: 'Custom user', show: 1},
        //                     {value: 'Unlimited Listing/ month', show: 1},
        //                     {value: 'Team Management', show: 1},
        //                     {value: 'Review System ', show: 1},
        //                     {value: 'Offer listing: Unlimited listing/month', show: 1},
        //                     {value: 'Listing Assistant', show: 1}
        //                 ]
        //             }
        //         ];
        //     } else {
        //         this.type = "Dành cho đại lý bất động sản"
        //         this.services = [
        //             {
        //                 title: 'Gói thông dụng',
        //                 price: {
        //                     value: '390,000đ/ tháng',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: '1 tài khoản ', show: 1}, 
        //                     {value: '20 tin đăng/ tháng', show: 1}, 
        //                     {value: 'Quản lý đội nhóm', show: 0}, 
        //                     {value: 'Hệ thống quản lý đánh giá', show: 0},
        //                     {value: 'Đề xuất 20 tin đăng/ tháng', show: 1},
        //                     {value: 'Hỗ trợ đăng tin', show: 0}
        //                 ]
        //             },
        //             {
        //                 title: 'Gói nâng cao',
        //                 price: {
        //                     value: '2,099,000đ/ tháng',
        //                     show: 1
        //                 },
        //                 oldPrice: '',
        //                 sale: 50,
        //                 listContent: [
        //                     {value: '10 tài khoản',show: 1}, 
        //                     {value: '100 tin đăng/ tháng', show: 1},
        //                     {value: 'Quản lý đội nhóm', show: 1},
        //                     {value: 'Hệ thống quản lý đánh giá', show: 1},
        //                     {value: 'Đề xuất 100 tin đăng/ tháng', show: 1},
        //                     {value: 'Hỗ trợ đăng tin', show: 0}
        //                 ]
        //             },
        //               {
        //                 title: 'Gói cao cấp',
        //                 price: {
        //                     value: 'Gía tùy chỉnh',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: 'Tùy chỉnh tài khoản ', show: 1},
        //                     {value: 'Không giới hạn', show: 1},
        //                     {value: 'Quản lý đội nhóm', show: 1},
        //                     {value: 'Hệ thống quản lý đánh giá', show: 1},
        //                     {value: 'Đề xuất không giới hạn tin đăng/tháng', show: 1},
        //                     {value: 'Hỗ trợ đăng tin ', show: 1}
        //                 ]
        //             }
        //         ];
        //     }
        // } else if(this.title == 'HOME SERVICE') {
        //     if(this.currentLang == 'en') {
        //         this.services = [
        //             {
        //                 title: 'BASIC',
        //                 price: {
        //                     value: 'FREE',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: 'No user', show: 1}, 
        //                     {value: 'No Search Priority', show: 1}, 
        //                     {value: 'No Click to Booking', show: 0}, 
        //                     {value: 'No Booking Support', show: 0},
        //                     {value: 'No Review System ', show: 1},
        //                     {value: 'No Service Ads', show: 0}
        //                 ]
        //             },
        //             {
        //                 title: 'PLUS',
        //                 price: {
        //                     value: '390,000đ/ month',
        //                     show: 1
        //                 },
        //                 oldPrice: '',
        //                 sale: 50,
        //                 listContent: [
        //                     {value: '1 user',show: 1}, 
        //                     {value: 'Search Priority', show: 1},
        //                     {value: 'Click to Booking', show: 1},
        //                     {value: 'No Booking Support', show: 0},
        //                     {value: 'Review System', show: 1},
        //                     {value: '8 Service Ads', show: 0}
        //                 ]
        //             },
        //               {
        //                 title: 'PRO',
        //                 price: {
        //                     value: 'Custom Price',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: 'Customer user', show: 1},
        //                     {value: 'Search Priority on Top', show: 1},
        //                     {value: 'Click To Booking', show: 1},
        //                     {value: 'Booking Support', show: 1},
        //                     {value: 'Review System', show: 1},
        //                     {value: '20 Services Ads and other support Ads', show: 1}
        //                 ]
        //             }
        //         ];
        //     } else {
        //         this.services = [
        //             {
        //                 title: 'Gói thông dụng',
        //                 price: {
        //                     value: 'Miễn phí',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: 'Tài khoản', show: 1}, 
        //                     {value: 'Tìm kiếm ưu tiên', show: 1}, 
        //                     {value: 'Đặt dịch vụ với 1 nhấp chuột', show: 0}, 
        //                     {value: 'Hỗ trợ đặt dịch vụ', show: 0},
        //                     {value: 'Hệ thống quản lý đánh giá', show: 1},
        //                     {value: 'Hỗ trợ quảng cáo hình ảnh', show: 0}
        //                 ]
        //             },
        //             {
        //                 title: 'Gói nâng cao',
        //                 price: {
        //                     value: '390,000đ/ tháng',
        //                     show: 1
        //                 },
        //                 oldPrice: '',
        //                 sale: 30,
        //                 listContent: [
        //                     {value: '1 tài khoản ',show: 1}, 
        //                     {value: 'Tìm kiếm ưu tiên', show: 1},
        //                     {value: 'Đặt dịch vụ với 1 nhấp chuột', show: 1},
        //                     {value: 'Hỗ trợ đặt dịch vụ', show: 0},
        //                     {value: 'Hệ thống quản lý đánh giá', show: 1},
        //                     {value: '8 dịch vụ quảng cáo hình ảnh', show: 0}
        //                 ]
        //             },
        //               {
        //                 title: 'Gói cao cấp',
        //                 price: {
        //                     value: 'Gía tùy chỉnh ',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: 'Tùy chỉnh tài khoản', show: 1},
        //                     {value: 'Tìm kiếm hàng đầu', show: 1},
        //                     {value: 'Đặt dịch vụ với 1 nhấp chuột', show: 1},
        //                     {value: 'Hỗ trợ đặt dịch vụ', show: 1},
        //                     {value: 'Hệ thống quản lý đánh giá', show: 1},
        //                     {value: '20 dịch vụ quảng cáo hình ảnh và nhiều hỗ trợ khác', show: 1}
        //                 ]
        //             }
        //         ];
        //     }
        // } else if(this.title == 'PROJECT DEVELOPER') {
        //     if(this.currentLang == 'en') {
        //         this.services = [
        //             {
        //                 title: 'BASIC',
        //                 price: {
        //                     value: 'FREE',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: 'Connect up to 50 users', show: 1}, 
        //                     {value: 'Basic Ranking', show: 1}, 
        //                     {value: "Don't know Who's viewed your profile", show: 1}, 
        //                     {value: 'Receive up to 2 deal/ month', show: 1},
        //                     {value: 'View Feed ', show: 1},
        //                     {value: 'No Post Feed', show: 1}
        //                 ]
        //             },
        //             {
        //                 title: 'PLUS',
        //                 price: {
        //                     value: '390,000đ/ month',
        //                     show: 1
        //                 },
        //                 oldPrice: '',
        //                 sale: 50,
        //                 listContent: [
        //                     {value: 'Connect up to 250 users',show: 1}, 
        //                     {value: 'Plus Ranking', show: 1},
        //                     {value: "Know Who's view your profile", show: 1},
        //                     {value: 'Receive up to 30 deals/ month', show: 1},
        //                     {value: 'View Feed', show: 1},
        //                     {value: '5 Post Feed', show: 1}
        //                 ]
        //             },
        //               {
        //                 title: 'PRO',
        //                 price: {
        //                     value: 'Custom Price',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: 'Connect up to 500+ uses', show: 1},
        //                     {value: 'Pro Ranking', show: 1},
        //                     {value: "Know Who's view your profile", show: 1},
        //                     {value: 'Receive up to 100 deals/ month', show: 1},
        //                     {value: 'View Feed', show: 1},
        //                     {value: 'Many Post Feed', show: 1}
        //                 ]
        //             }
        //         ];
        //     } else {
        //         this.services = [
        //             {
        //                 title: 'Gói thông dụng',
        //                 price: {
        //                     value: 'Miễn phí',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: 'Tài khoản', show: 1}, 
        //                     {value: '1 dự án', show: 1}, 
        //                     {value: "Đăng tin tức", show: 1}, 
        //                     {value: 'Quảng cáo dự án', show: 1},
        //                     {value: 'Hệ thống quản lý đánh giá', show: 1},
        //                     {value: 'Hỗ trợ đăng tin', show: 1}
        //                 ]
        //             },
        //             {
        //                 title: 'Gói nâng cao',
        //                 price: {
        //                     value: '390,000đ/ tháng',
        //                     show: 1
        //                 },
        //                 oldPrice: '',
        //                 sale: 50,
        //                 listContent: [
        //                     {value: '5 tài khoản', show: 1},
        //                     {value: '1-3 dự án', show: 1},
        //                     {value: "1 tin đăng/tháng/dự án", show: 1},
        //                     {value: 'Quảng cáo dự án', show: 1},
        //                     {value: 'Hệ thống quản lý đánh giá', show: 1},
        //                     {value: 'Hỗ trợ đăng tin ', show: 0}
        //                 ]
        //             },
        //               {
        //                 title: 'Gói cao cấp',
        //                 price: {
        //                     value: 'Gía tùy chỉnh',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: 'Tùy chỉnh tài khoản', show: 1},
        //                     {value: 'Tùy chỉnh dự án', show: 1},
        //                     {value: "2 tin đăng/ tháng/ dự án", show: 1},
        //                     {value: 'Quảng cáo dự án', show: 1},
        //                     {value: 'Hệ thống quản lý đánh giá', show: 1},
        //                     {value: 'Hỗ trợ đăng tin ', show: 1}
        //                 ]
        //             }
        //         ];
        //     }
        // }
        // else if(this.title == 'BROKER') {
        //     if(this.currentLang == 'en') {
        //         this.services = [
        //             {
        //                 title: 'BASIC',
        //                 price: {
        //                     value: 'FREE',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: 'Connect up to 50 accounts', show: 1}, 
        //                     {value: 'Basic Ranking', show: 1}, 
        //                     {value: "Don't know Who's viewed your profile", show: 0}, 
        //                     {value: 'Receive up to 2 deal/ month', show: 1},
        //                     {value: 'View Feed ', show: 1},
        //                     {value: 'No Post Feed', show: 0}
        //                 ]
        //             },
        //             {
        //                 title: 'PLUS',
        //                 price: {
        //                     value: '390,000đ/ month',
        //                     show: 1
        //                 },
        //                 oldPrice: '',
        //                 sale: 50,
        //                 listContent: [
        //                     {value: 'Connect up to 250 accounts',show: 1}, 
        //                     {value: 'Plus Ranking', show: 1},
        //                     {value: "Know Who's view your profile", show: 1},
        //                     {value: 'Receive up to 30 deals/ month', show: 1},
        //                     {value: 'View Feed', show: 1},
        //                     {value: '5 Post Feed', show: 1}
        //                 ]
        //             },
        //               {
        //                 title: 'PRO',
        //                 price: {
        //                     value: 'Custom Price',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: 'Connect up to 500+ accounts', show: 1},
        //                     {value: 'Pro Ranking', show: 1},
        //                     {value: "Know Who's view your profile", show: 1},
        //                     {value: 'Receive up to 100 deals/ month', show: 1},
        //                     {value: 'View Feed', show: 1},
        //                     {value: 'Many Post Feed', show: 1}
        //                 ]
        //             }
        //         ];
        //     } else {
        //         this.services = [
        //             {
        //                 title: 'Gói thông dụng',
        //                 price: {
        //                     value: 'Miễn phí',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: 'Kết nối đến 50 tài khoản khác', show: 1}, 
        //                     {value: 'Xếp hạng : Basic', show: 1}, 
        //                     {value: "Cập nhật trạng thái xem hồ sơ ", show: 0}, 
        //                     {value: 'Nhận 2 tin đăng/ tháng', show: 1},
        //                     {value: 'Xem tin tức', show: 1},
        //                     {value: 'Đăng tin', show: 0}
        //                 ]
        //             },
        //             {
        //                 title: 'Gói nâng cao',
        //                 price: {
        //                     value: '390,000đ/ tháng',
        //                     show: 1
        //                 },
        //                 oldPrice: '',
        //                 sale: 50,
        //                 listContent: [
        //                     {value: 'Kết nối đến 250 tài khoản khác', show: 1},
        //                     {value: 'Xếp hạng: Plus', show: 1},
        //                     {value: "Cập nhật trạng thái xem hồ sơ", show: 1},
        //                     {value: 'Nhận 30 tin đăng/ tháng', show: 1},
        //                     {value: 'Xem tin tức', show: 1},
        //                     {value: '5 tin đăng', show: 0}
        //                 ]
        //             },
        //               {
        //                 title: 'Gói cao cấp',
        //                 price: {
        //                     value: 'Gía tùy chỉnh',
        //                     show: 1
        //                 },
        //                 sale: 0,
        //                 oldPrice: '',
        //                 listContent: [
        //                     {value: 'Kết nối đến 500+ tài khoản khác', show: 1},
        //                     {value: 'Xếp hạng: Pro', show: 1},
        //                     {value: "Cập nhật trạng thái xem hồ sơ", show: 1},
        //                     {value: 'Nhận 100 tin đăng/ tháng', show: 1},
        //                     {value: 'Xem tin tức', show: 1},
        //                     {value: 'Đăng nhiều tin ', show: 1}
        //                 ]
        //             }
        //         ];
        //     }
        // }
    }
}
