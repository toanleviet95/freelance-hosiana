import { Component, OnInit } from '@angular/core';
import { LanguageService } from '@core/services/language.service';

@Component({
    selector: 'app-card-differences',
    templateUrl: './card-differences.component.html',
    styleUrls: ['./card-differences.component.scss']
})
export class CardDifferencesComponent implements OnInit {
    differences = [];
    langCurrent: any;
    constructor(private languageService: LanguageService) {
        this.langCurrent = this.languageService.getCurrentLanguage();
        this.bindData();
    }

    /**
     *  Render data why choose Hosiana
     * 
     * @return {Array < Object >} result
     */
    bindData() {
        if(this.langCurrent == 'en') {
            this.differences = [
                {
                    image: 'assets/images/why1.png',
                    content:
                        'At Hosiana we believe that real estate business requires and should really only be participated in by agencies with strong backgrounds who are equipped to handle transactions with utmost skill and diligence, the kind that bolsters customer confidence. '
                },
                {
                    image: 'assets/images/why2.png',
                    content:
                        'Only selected real estate agencies can post listings on Hosiana.vn and communicate through our tools in the interest of quality control and credible listings'
                },
                {
                    image: 'assets/images/why3.png',
                    content:
                        'As a result, we do not accept listings from Individual agents with no strong professional affiliations.'
                },
                {
                    image: 'assets/images/why4.png',
                    content:
                        'Our priority is to be a credible go-to resource in every aspect of your estate journey, every step of the way as we continually offer you updated advertising and marketing tools.'
                }
            ];
        } else {
            this.differences = [
                {
                    image: 'assets/images/why1.png',
                    content:
                        'Tại Hosiana, chúng tôi tin rằng việc kinh doanh bất động sản đòi hỏi và thực sự chỉ nên dành cho các đại lý bất động sản có đủ năng lực để xúc tiến các giao dịch với những kỹ năng chuyên nghiệp và sự nhiệt thành, điều đó làm tăng thêm sự tin tưởng của khách hàng.'
                },
                {
                    image: 'assets/images/why2.png',
                    content:
                        'Chỉ có các đại lý bất động sản được lựa chọn mới có thể đăng tin trên Hosiana.vn và sử dụng các công cụ của chúng tôi để kiểm soát chất lượng cũng như tạo ra các tin đăng đáng tin cậy.'
                },
                {
                    image: 'assets/images/why3.png',
                    content:
                        'Vì vậy, chúng tôi từ chối tin đăng từ các cá nhân riêng lẻ không phải là đại lý bất động sản chuyên nghiệp.'
                },
                {
                    image: 'assets/images/why4.png',
                    content:
                        'Ưu tiên hàng đầu của chúng tôi là trở thành một nơi đầy tin cậy trong mọi khía cạnh của hành trình bất động sản bạn đang theo đuổi, từng bước trong hành trình đó chúng tôi sẽ cung cấp cho bạn các công cụ quảng cáo được cập nhật liên tục.'
                }
            ];
        }
    }

    ngOnInit() { }
}
