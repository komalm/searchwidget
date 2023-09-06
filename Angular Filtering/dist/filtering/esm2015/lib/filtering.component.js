import { Component, Input } from '@angular/core';
import { fetchData } from './Functions/api';
export class FilteringComponent {
    constructor() {
        this.hostname = 'https://www.diksha.gov.in';
        this.AddtionalFilterConfig = [];
        this.FilterConfig = [];
        this.CardsFieldsObject = {};
        this.FormAPI = {
            url: '',
            headers: {},
            method: '',
            body: '',
            cache: 'default',
        };
        this.SearchAPI = {
            url: '',
            headers: {},
            method: '',
            body: '',
            cache: 'default',
        };
        this.TermsAPI = {
            url: '',
            headers: {},
            method: '',
            body: '',
            cache: 'default',
        };
        this.GetDefaultChannel = {
            url: '',
            headers: {},
            method: '',
            body: '',
            cache: 'default',
        };
        this.GetChannelAPI = {
            headers: {},
            method: '',
            body: '',
            cache: 'default',
        };
        this.DefaultChannelID = '';
    }
    ngOnInit() {
        fetchData({
            url: this.GetDefaultChannel.url,
            method: this.GetDefaultChannel.method,
            headers: this.GetDefaultChannel.headers,
            cache: this.GetDefaultChannel.cache
                ? this.GetDefaultChannel.cache
                : 'default',
        })
            .then((res) => {
            this.DefaultChannelID = res.result.response.value;
            this.GetChannelFrameworks();
        })
            .catch((err) => {
            console.log(err.message);
        });
    }
    GetChannelFrameworks() {
        fetchData({
            url: `${this.hostname}/api/channel/v1/read/${this.DefaultChannelID}`,
            method: this.GetChannelAPI.method,
            headers: this.GetChannelAPI.headers,
            cache: this.GetDefaultChannel.cache
                ? this.GetDefaultChannel.cache
                : 'default',
        })
            .then((res) => {
            this.Frameworks = res.result.channel.frameworks;
        })
            .catch((err) => {
            console.log(err);
        });
    }
}
FilteringComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-filtering',
                template: "<app-wrapper\r\n  [AddtionalFilterConfig]=\"AddtionalFilterConfig\"\r\n  [FilterConfig]=\"FilterConfig\"\r\n  [hostname]=\"hostname\"\r\n  [FormAPI]=\"FormAPI\"\r\n  [FrameworksArray]=\"Frameworks\"\r\n  [CardsFieldConfig]=\"CardsFieldsObject\"\r\n  [TermsAPI]=\"TermsAPI\"\r\n  [SearchAPI]=\"SearchAPI\"\r\n></app-wrapper>\r\n"
            },] }
];
FilteringComponent.ctorParameters = () => [];
FilteringComponent.propDecorators = {
    hostname: [{ type: Input }],
    AddtionalFilterConfig: [{ type: Input }],
    FilterConfig: [{ type: Input }],
    CardsFieldsObject: [{ type: Input }],
    FormAPI: [{ type: Input }],
    SearchAPI: [{ type: Input }],
    TermsAPI: [{ type: Input }],
    GetDefaultChannel: [{ type: Input }],
    GetChannelAPI: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlcmluZy9zcmMvbGliL2ZpbHRlcmluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTTVDLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0I7UUFDUyxhQUFRLEdBQVcsMkJBQTJCLENBQUM7UUFDL0MsMEJBQXFCLEdBSXpCLEVBQUUsQ0FBQztRQUNDLGlCQUFZLEdBSWhCLEVBQUUsQ0FBQztRQUNDLHNCQUFpQixHQW1CdEIsRUFBRSxDQUFDO1FBQ0UsWUFBTyxHQVlaO1lBQ0YsR0FBRyxFQUFFLEVBQUU7WUFDUCxPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsU0FBUztTQUNqQixDQUFDO1FBQ08sY0FBUyxHQVlkO1lBQ0YsR0FBRyxFQUFFLEVBQUU7WUFDUCxPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsU0FBUztTQUNqQixDQUFDO1FBQ08sYUFBUSxHQVliO1lBQ0YsR0FBRyxFQUFFLEVBQUU7WUFDUCxPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsU0FBUztTQUNqQixDQUFDO1FBQ08sc0JBQWlCLEdBWXRCO1lBQ0YsR0FBRyxFQUFFLEVBQUU7WUFDUCxPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsU0FBUztTQUNqQixDQUFDO1FBQ08sa0JBQWEsR0FXbEI7WUFDRixPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsU0FBUztTQUNqQixDQUFDO1FBRU0scUJBQWdCLEdBQVcsRUFBRSxDQUFDO0lBOUh2QixDQUFDO0lBK0hoQixRQUFRO1FBQ04sU0FBUyxDQUFDO1lBQ1IsR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHO1lBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTTtZQUNyQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU87WUFDdkMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLO2dCQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUs7Z0JBQzlCLENBQUMsQ0FBQyxTQUFTO1NBQ2QsQ0FBQzthQUNDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1osSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNsRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELG9CQUFvQjtRQUNsQixTQUFTLENBQUM7WUFDUixHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSx3QkFBd0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3BFLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU07WUFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTztZQUNuQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUs7Z0JBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSztnQkFDOUIsQ0FBQyxDQUFDLFNBQVM7U0FDZCxDQUFDO2FBQ0MsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNsRCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7WUFwS0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixtVkFBeUM7YUFDMUM7Ozs7dUJBR0UsS0FBSztvQ0FDTCxLQUFLOzJCQUtMLEtBQUs7Z0NBS0wsS0FBSztzQkFvQkwsS0FBSzt3QkFtQkwsS0FBSzt1QkFtQkwsS0FBSztnQ0FtQkwsS0FBSzs0QkFtQkwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi9GdW5jdGlvbnMvYXBpJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWZpbHRlcmluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWx0ZXJpbmcuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIEBJbnB1dCgpIGhvc3RuYW1lOiBzdHJpbmcgPSAnaHR0cHM6Ly93d3cuZGlrc2hhLmdvdi5pbic7XG4gIEBJbnB1dCgpIEFkZHRpb25hbEZpbHRlckNvbmZpZzogQXJyYXk8e1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBmaWVsZDogc3RyaW5nO1xuICAgIGlzRW5hYmxlZDogYm9vbGVhbjtcbiAgfT4gPSBbXTtcbiAgQElucHV0KCkgRmlsdGVyQ29uZmlnOiBBcnJheTx7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGZpZWxkOiBzdHJpbmc7XG4gICAgaXNFbmFibGVkOiBib29sZWFuO1xuICB9PiA9IFtdO1xuICBASW5wdXQoKSBDYXJkc0ZpZWxkc09iamVjdDoge1xuICAgIG5hbWU/OiB7XG4gICAgICBmaWVsZDogc3RyaW5nO1xuICAgIH07XG4gICAgdHlwZT86IHtcbiAgICAgIGZpZWxkOiBzdHJpbmc7XG4gICAgfTtcbiAgICB0YWdzPzoge1xuICAgICAgVGFnc0ZpZWxkQXJyYXk6IEFycmF5PHN0cmluZz47XG4gICAgfTtcbiAgICBpbWFnZT86IHtcbiAgICAgIGZpZWxkOiBzdHJpbmc7XG4gICAgfTtcbiAgICBwdWJsaXNoZXI/OiB7XG4gICAgICBmaWVsZDogc3RyaW5nO1xuICAgIH07XG4gICAgc3ViamVjdD86IHtcbiAgICAgIGZpZWxkOiBzdHJpbmc7XG4gICAgfTtcbiAgfSA9IHt9O1xuICBASW5wdXQoKSBGb3JtQVBJOiB7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgaGVhZGVycz86IG9iamVjdDtcbiAgICBtZXRob2Q6IHN0cmluZztcbiAgICBib2R5Pzogc3RyaW5nO1xuICAgIGNhY2hlPzpcbiAgICAgIHwgJ2RlZmF1bHQnXG4gICAgICB8ICduby1zdG9yZSdcbiAgICAgIHwgJ3JlbG9hZCdcbiAgICAgIHwgJ2ZvcmNlLWNhY2hlJ1xuICAgICAgfCAnb25seS1pZi1jYWNoZWQnXG4gICAgICB8ICduby1jYWNoZSc7XG4gIH0gPSB7XG4gICAgdXJsOiAnJyxcbiAgICBoZWFkZXJzOiB7fSxcbiAgICBtZXRob2Q6ICcnLFxuICAgIGJvZHk6ICcnLFxuICAgIGNhY2hlOiAnZGVmYXVsdCcsXG4gIH07XG4gIEBJbnB1dCgpIFNlYXJjaEFQSToge1xuICAgIHVybDogc3RyaW5nO1xuICAgIGhlYWRlcnM/OiBvYmplY3Q7XG4gICAgbWV0aG9kOiBzdHJpbmc7XG4gICAgYm9keT86IHN0cmluZztcbiAgICBjYWNoZT86XG4gICAgICB8ICdkZWZhdWx0J1xuICAgICAgfCAnbm8tc3RvcmUnXG4gICAgICB8ICdyZWxvYWQnXG4gICAgICB8ICdmb3JjZS1jYWNoZSdcbiAgICAgIHwgJ29ubHktaWYtY2FjaGVkJ1xuICAgICAgfCAnbm8tY2FjaGUnO1xuICB9ID0ge1xuICAgIHVybDogJycsXG4gICAgaGVhZGVyczoge30sXG4gICAgbWV0aG9kOiAnJyxcbiAgICBib2R5OiAnJyxcbiAgICBjYWNoZTogJ2RlZmF1bHQnLFxuICB9O1xuICBASW5wdXQoKSBUZXJtc0FQSToge1xuICAgIHVybDogc3RyaW5nO1xuICAgIGhlYWRlcnM/OiBvYmplY3Q7XG4gICAgbWV0aG9kOiBzdHJpbmc7XG4gICAgYm9keT86IHN0cmluZztcbiAgICBjYWNoZT86XG4gICAgICB8ICdkZWZhdWx0J1xuICAgICAgfCAnbm8tc3RvcmUnXG4gICAgICB8ICdyZWxvYWQnXG4gICAgICB8ICdmb3JjZS1jYWNoZSdcbiAgICAgIHwgJ29ubHktaWYtY2FjaGVkJ1xuICAgICAgfCAnbm8tY2FjaGUnO1xuICB9ID0ge1xuICAgIHVybDogJycsXG4gICAgaGVhZGVyczoge30sXG4gICAgbWV0aG9kOiAnJyxcbiAgICBib2R5OiAnJyxcbiAgICBjYWNoZTogJ2RlZmF1bHQnLFxuICB9O1xuICBASW5wdXQoKSBHZXREZWZhdWx0Q2hhbm5lbDoge1xuICAgIHVybDogc3RyaW5nO1xuICAgIGhlYWRlcnM/OiBvYmplY3Q7XG4gICAgbWV0aG9kOiBzdHJpbmc7XG4gICAgYm9keT86IHN0cmluZztcbiAgICBjYWNoZT86XG4gICAgICB8ICdkZWZhdWx0J1xuICAgICAgfCAnbm8tc3RvcmUnXG4gICAgICB8ICdyZWxvYWQnXG4gICAgICB8ICdmb3JjZS1jYWNoZSdcbiAgICAgIHwgJ29ubHktaWYtY2FjaGVkJ1xuICAgICAgfCAnbm8tY2FjaGUnO1xuICB9ID0ge1xuICAgIHVybDogJycsXG4gICAgaGVhZGVyczoge30sXG4gICAgbWV0aG9kOiAnJyxcbiAgICBib2R5OiAnJyxcbiAgICBjYWNoZTogJ2RlZmF1bHQnLFxuICB9O1xuICBASW5wdXQoKSBHZXRDaGFubmVsQVBJOiB7XG4gICAgaGVhZGVycz86IG9iamVjdDtcbiAgICBtZXRob2Q6IHN0cmluZztcbiAgICBib2R5Pzogc3RyaW5nO1xuICAgIGNhY2hlPzpcbiAgICAgIHwgJ2RlZmF1bHQnXG4gICAgICB8ICduby1zdG9yZSdcbiAgICAgIHwgJ3JlbG9hZCdcbiAgICAgIHwgJ2ZvcmNlLWNhY2hlJ1xuICAgICAgfCAnb25seS1pZi1jYWNoZWQnXG4gICAgICB8ICduby1jYWNoZSc7XG4gIH0gPSB7XG4gICAgaGVhZGVyczoge30sXG4gICAgbWV0aG9kOiAnJyxcbiAgICBib2R5OiAnJyxcbiAgICBjYWNoZTogJ2RlZmF1bHQnLFxuICB9O1xuICBGcmFtZXdvcmtzOiBhbnk7XG4gIHByaXZhdGUgRGVmYXVsdENoYW5uZWxJRDogc3RyaW5nID0gJyc7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGZldGNoRGF0YSh7XG4gICAgICB1cmw6IHRoaXMuR2V0RGVmYXVsdENoYW5uZWwudXJsLFxuICAgICAgbWV0aG9kOiB0aGlzLkdldERlZmF1bHRDaGFubmVsLm1ldGhvZCxcbiAgICAgIGhlYWRlcnM6IHRoaXMuR2V0RGVmYXVsdENoYW5uZWwuaGVhZGVycyxcbiAgICAgIGNhY2hlOiB0aGlzLkdldERlZmF1bHRDaGFubmVsLmNhY2hlXG4gICAgICAgID8gdGhpcy5HZXREZWZhdWx0Q2hhbm5lbC5jYWNoZVxuICAgICAgICA6ICdkZWZhdWx0JyxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLkRlZmF1bHRDaGFubmVsSUQgPSByZXMucmVzdWx0LnJlc3BvbnNlLnZhbHVlO1xuICAgICAgICB0aGlzLkdldENoYW5uZWxGcmFtZXdvcmtzKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cbiAgR2V0Q2hhbm5lbEZyYW1ld29ya3MoKSB7XG4gICAgZmV0Y2hEYXRhKHtcbiAgICAgIHVybDogYCR7dGhpcy5ob3N0bmFtZX0vYXBpL2NoYW5uZWwvdjEvcmVhZC8ke3RoaXMuRGVmYXVsdENoYW5uZWxJRH1gLFxuICAgICAgbWV0aG9kOiB0aGlzLkdldENoYW5uZWxBUEkubWV0aG9kLFxuICAgICAgaGVhZGVyczogdGhpcy5HZXRDaGFubmVsQVBJLmhlYWRlcnMsXG4gICAgICBjYWNoZTogdGhpcy5HZXREZWZhdWx0Q2hhbm5lbC5jYWNoZVxuICAgICAgICA/IHRoaXMuR2V0RGVmYXVsdENoYW5uZWwuY2FjaGVcbiAgICAgICAgOiAnZGVmYXVsdCcsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5GcmFtZXdvcmtzID0gcmVzLnJlc3VsdC5jaGFubmVsLmZyYW1ld29ya3M7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=