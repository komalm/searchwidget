import { Component, Input, } from '@angular/core';
import { fetchData } from '../../Functions/api';
import { DependentTermsFetch, FilterDataExtract, FrameworksOptionsRender, GetFrameWorkID, MasterFieldContentChange, RenderContentFunction, TermsFetch, UpdateConfig, } from '../../Functions/Service_Functions';
export class WrapperComponent {
    constructor() {
        this.content = [];
        this.FilterConfig = [];
        this.AddtionalFilterConfig = [];
        this.ApiSettedFilterConfig = [];
        this.FilterOptionsData = [];
        this.tags = [];
        this.OriginalMasterKeys = [];
        this.DependentTermsData = [];
        this.MasterFields = [];
        this.MasterKeys = [];
        this.CardDataObj = {};
        this.CardsData = [];
        this.PrevFilterAddNumber = [];
        this.FrameworksOptionArray = [];
        this.FilterOptionNameArray = [];
        this.Change = 0;
        this.FilterAddNumber = [];
        this.FiltersArray = [];
        this.Framework = '';
        this.FrameworksArray = [];
        this.hostname = '';
        this.FormAPI = {
            url: '',
            headers: {},
            method: '',
            body: '',
            cache: 'default',
        };
        this.CardsFieldConfig = {};
        this.SearchAPI = {
            url: '',
            headers: {},
            method: '',
            body: '',
            cache: 'default',
        };
        this.FilterBodySet = this.SearchAPI.body;
        this.TermsAPI = {
            url: '',
            headers: {},
            method: '',
            body: '',
            cache: 'default',
        };
        this.AllOptions = [];
        this.AllFiltersArray = [];
    }
    FetchAndUpdateFilterConfig() {
        fetchData({
            url: this.FormAPI.url,
            cache: this.FormAPI.cache ? this.FormAPI.cache : 'default',
            method: this.FormAPI.method,
        })
            .then((res) => {
            this.ApiSettedFilterConfig = UpdateConfig({
                apiData: res,
                filterConfig: this.FilterConfig,
                addtionalFilterConfig: this.AddtionalFilterConfig,
            });
        })
            .catch((err) => {
            console.log(err);
        });
        const FrameworkID = this.Framework === ''
            ? 'ekstep_ncert_k-12'
            : GetFrameWorkID(this.FrameworksArray, this.Framework);
        fetchData({
            url: `${this.hostname}/api/content/v1/search?orgdetails=orgName,email&framework=${FrameworkID}`,
            cache: this.SearchAPI.cache ? this.SearchAPI.cache : 'default',
            method: this.SearchAPI.method,
            body: this.SearchAPI.body,
            headers: this.SearchAPI.headers,
        })
            .then((res) => {
            this.content = res.result.content;
        })
            .catch((err) => {
            console.log(err);
        });
        fetchData({
            url: `${this.hostname}/api/framework/v1/read/${FrameworkID}?categories=board,gradeLevel,medium,class,subject`,
            cache: this.TermsAPI.cache ? this.TermsAPI.cache : 'default',
            method: this.TermsAPI.method,
            headers: this.TermsAPI.headers,
        })
            .then((res) => {
            this.MasterFields = TermsFetch(res, this.ApiSettedFilterConfig);
            this.MasterKeys = Object.keys(this.MasterFields[0]);
        })
            .catch((err) => {
            console.log(err);
        });
    }
    DependentFieldsRender() {
        const FrameworkID = this.Framework === ''
            ? 'ekstep_ncert_k-12'
            : GetFrameWorkID(this.FrameworksArray, this.Framework);
        fetchData({
            url: `${this.hostname}/api/framework/v1/read/${FrameworkID}?categories=board,gradeLevel,medium,class,subject`,
            cache: this.TermsAPI.cache ? this.TermsAPI.cache : 'default',
            method: this.TermsAPI.method,
            headers: this.TermsAPI.headers,
        })
            .then((res) => {
            var _a;
            const data = DependentTermsFetch(res, this.FiltersArray, this.MasterFields);
            this.DependentTermsData = data;
            let flag = true;
            (_a = this.FiltersArray) === null || _a === void 0 ? void 0 : _a.map((item) => {
                if ((item === null || item === void 0 ? void 0 : item.value.length) !== 0) {
                    flag = false;
                }
            });
            if (flag) {
                fetchData({
                    url: `${this.hostname}/api/framework/v1/read/${FrameworkID}?categories=board,gradeLevel,medium,class,subject`,
                    cache: this.TermsAPI.cache ? this.TermsAPI.cache : 'default',
                    method: this.TermsAPI.method,
                    headers: this.TermsAPI.headers,
                })
                    .then((res) => {
                    this.MasterFields = TermsFetch(res, this.ApiSettedFilterConfig);
                    if (typeof this.MasterFields[0] !== 'undefined' &&
                        typeof this.MasterFields[0] !== null) {
                        this.MasterKeys = Object.keys(this.MasterFields[0]);
                    }
                })
                    .catch((err) => {
                    console.log(err);
                });
            }
            else {
                this.MasterFields = this.DependentTermsData;
                console.log('Terms', this.MasterFields);
            }
        })
            .catch((err) => {
            console.log(err);
        });
    }
    FrameWorksFetch() {
        const FrameWorksOption = FrameworksOptionsRender(this.FrameworksArray);
        this.FrameworksOptionArray = FrameWorksOption;
    }
    MasterBodyContentChange() {
        this.FilterBodySet = MasterFieldContentChange(this.AllFiltersArray !== undefined && this.AllFiltersArray.length !== 0
            ? this.AllFiltersArray
            : this.FiltersArray, this.FilterConfig, this.SearchAPI.body ? this.SearchAPI.body : '');
    }
    FiltersContentRender() {
        this.MasterBodyContentChange();
        const FrameworkID = this.Framework === ''
            ? 'ekstep_ncert_k-12'
            : GetFrameWorkID(this.FrameworksArray, this.Framework);
        fetchData({
            url: `${this.hostname}/api/content/v1/search?orgdetails=orgName,email&framework=${this.Framework === '' ? 'ekstep_ncert_k-12' : FrameworkID}`,
            cache: 'default',
            method: this.SearchAPI.method,
            body: this.FilterBodySet,
            headers: this.SearchAPI.headers,
        })
            .then((res) => {
            if (res.result.content !== undefined) {
                this.content = res.result.content;
                this.FilterDataRender();
            }
            else if (res.result.QuestionSet !== undefined) {
                this.content = res.result.QuestionSet;
                this.FilterDataRender();
            }
            else {
                this.content = this.content;
            }
        })
            .catch((err) => {
            console.log(err);
        });
    }
    FilterDataRender() {
        const ReturnData = FilterDataExtract({
            content: this.content,
            filterConfig: this.ApiSettedFilterConfig,
            TermsObject: this.AddtionalFilterConfig,
        });
        this.FilterOptionsData = ReturnData.OptionValueArray;
        this.FilterOptionNameArray = ReturnData.OptionNameArray;
        this.AllOptions.map((item) => {
            if (this.FilterOptionNameArray.includes(item.name)) {
                const idx = this.FilterOptionNameArray.indexOf(item.name);
                item.terms = this.FilterOptionsData[idx].terms;
            }
        });
        return ReturnData;
    }
    RenderContentAddtionalFilter() {
        this.AddtionalContent = RenderContentFunction({
            content: this.content,
            filtersSelected: this.FiltersArray,
            filterConfig: this.ApiSettedFilterConfig,
        });
    }
    AdditionalOptionValueReturn(Key) {
        let valueArray = [];
        this.FilterOptionsData.map((item) => {
            if (Key.toLowerCase() === item.name.toLowerCase()) {
                valueArray = item.value;
            }
        });
        return valueArray;
    }
    CardsFieldCheck(field, item) {
        if (field === 'tags' && this.CardsFieldConfig.hasOwnProperty(field)) {
            const arr = [];
            const tagsArray = this.CardsFieldConfig[field].TagsFieldArray;
            tagsArray.map((key) => {
                arr.push(item[key]);
            });
            return arr;
        }
        if (field === 'tags') {
            return [];
        }
        if (this.CardsFieldConfig.hasOwnProperty(field)) {
            const itemKey = this.CardsFieldConfig[field].field;
            return item[itemKey];
        }
        return '';
    }
    ngOnInit() {
        this.FetchAndUpdateFilterConfig();
        this.RenderContentAddtionalFilter();
        this.FrameWorksFetch();
    }
    ngOnChanges(changes) {
        this.FetchAndUpdateFilterConfig();
        this.DependentFieldsRender();
        this.FrameWorksFetch();
        this.FiltersContentRender();
        let MasterFieldsArray = [];
        this.MasterKeys.map((item) => {
            MasterFieldsArray.push(this.MasterFields[0][item]);
        });
        this.AllOptions = [
            { name: 'Board', terms: this.FrameworksOptionArray },
            ...MasterFieldsArray,
            ...this.FilterOptionsData,
        ];
        this.RenderContentAddtionalFilter();
    }
    IsAddtionalFilter(Name) {
        let flag = false;
        this.AddtionalFilterConfig.map((item) => {
            if (item.name.toLowerCase() === Name.toLowerCase()) {
                flag = true;
            }
        });
        return flag;
    }
    LOG(a) {
        const ele = a[0];
        if (ele.name === 'Board') {
            this.Framework = ele.value.length === 0 ? 'CBSE' : ele.value[0];
        }
        let flag = true;
        this.AllFiltersArray.map((item) => {
            if (item.name === ele.name) {
                flag = false;
            }
        });
        if (flag) {
            this.AllFiltersArray.push(ele);
        }
        else {
            this.AllFiltersArray.map((item) => {
                if (ele.name === 'Board') {
                    if (item.name === 'Board') {
                        if (item.value[0] === ele.value[0]) {
                            item.value = [];
                        }
                        else {
                            item.value = ele.value;
                        }
                    }
                }
                else if (this.IsAddtionalFilter(ele.name)) {
                    const oldArr = item.value;
                    if (oldArr.includes(ele.value[0])) {
                        oldArr.splice(oldArr.indexOf(ele.value[0]), 1);
                        item.value = oldArr;
                    }
                    else {
                        oldArr.push(ele.value[0]);
                        const uniqueElements = Array.from(new Set(oldArr));
                        item.value = uniqueElements;
                    }
                }
            });
        }
        // if (this.FrameworksOptionArray.includes(ele.value[0]) && this.AllFiltersArray.length!==0) {
        //   // console.log("Yes");
        //   let oldArr = this.AllFiltersArray.filter((item: any) => {
        //     return item.name.toLowerCase() !== ele.name.toLowerCase();
        //   });
        //   // console.log("old",oldArr);
        //   oldArr.push({ name: ele.name, value: [ele.value] });
        //   this.AllFiltersArray = oldArr;
        // }
        // if(this.AllFiltersArray.length!==0){
        //   this.AllFiltersArray.map((item:any)=>{
        //     if(item.name==='Board'){
        //     }
        //   })
        // }
        this.FiltersArray = this.AllFiltersArray;
        this.MasterBodyContentChange();
        this.DependentFieldsRender();
        this.FrameWorksFetch();
        this.FiltersContentRender();
        this.RenderContentAddtionalFilter();
        let MasterFieldsArray = [];
        this.MasterKeys.map((item) => {
            MasterFieldsArray.push(this.MasterFields[0][item]);
        });
        this.AllOptions = [
            { name: 'Board', terms: this.FrameworksOptionArray },
            ...MasterFieldsArray,
            ...this.FilterOptionsData,
        ];
    }
}
WrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-wrapper',
                template: "<div class=\"mainDiv\">\n  <div class=\"faKsuq\">\n    <div class=\"sidebar\" *ngIf=\"AllOptions.length !== 0\">\n      <div *ngFor=\"let Field of AllOptions\">\n        <lib-filters-component\n          [Name]=\"Field.name\"\n          [OptionValue]=\"Field.terms\"\n          (FiltersArrayEvent)=\"LOG($event)\"\n          [AddtionalFilterConfig]=\"AddtionalFilterConfig\"\n          [FilterConfig]=\"FilterConfig\"\n        >\n        </lib-filters-component>\n      </div>\n    </div>\n  </div>\n  <div class=\"listDiv\">\n    <ng-container *ngIf=\"AddtionalContent.length === 0\">\n      <div *ngFor=\"let item of content\">\n        <lib-cards-component\n          [name]=\"this.CardsFieldCheck('name', item)\"\n          [image]=\"this.CardsFieldCheck('image', item)\"\n          [type]=\"this.CardsFieldCheck('type', item)\"\n          [subject]=\"this.CardsFieldCheck('subject', item)\"\n          [tags]=\"this.CardsFieldCheck('tags', item)\"\n          [publisher]=\"this.CardsFieldCheck('publisher', item)\"\n        >\n        </lib-cards-component>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"AddtionalContent.length !== 0\">\n      <div *ngFor=\"let item of AddtionalContent\">\n        <lib-cards-component\n          [name]=\"this.CardsFieldCheck('name', item)\"\n          [image]=\"this.CardsFieldCheck('image', item)\"\n          [type]=\"this.CardsFieldCheck('type', item)\"\n          [subject]=\"this.CardsFieldCheck('subject', item)\"\n          [tags]=\"this.CardsFieldCheck('tags', item)\"\n          [publisher]=\"this.CardsFieldCheck('publisher', item)\"\n        >\n        </lib-cards-component>\n      </div>\n    </ng-container>\n  </div>\n</div>\n",
                styles: [".faKsuq{background:#e9e8d9;padding:10px 20px;width:-moz-max-content;width:max-content;border-radius:10px;width:15rem;height:-moz-max-content;height:max-content;display:flex;flex-direction:column;row-gap:8px}.mainDiv{display:flex;-moz-column-gap:20px;column-gap:20px}.sidebar{display:flex;flex-direction:column}.listDiv{display:flex;flex-wrap:wrap;gap:20px}@media (max-width:500px){.mainDiv{display:flex;row-gap:20px}.listDiv,.mainDiv{flex-direction:column;justify-content:center;align-items:center}.listDiv{margin-top:50px}}"]
            },] }
];
WrapperComponent.ctorParameters = () => [];
WrapperComponent.propDecorators = {
    FilterConfig: [{ type: Input }],
    AddtionalFilterConfig: [{ type: Input }],
    Change: [{ type: Input }],
    FilterAddNumber: [{ type: Input }],
    FiltersArray: [{ type: Input }],
    Framework: [{ type: Input }],
    FrameworksArray: [{ type: Input }],
    hostname: [{ type: Input }],
    FormAPI: [{ type: Input }],
    CardsFieldConfig: [{ type: Input }],
    SearchAPI: [{ type: Input }],
    TermsAPI: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXJpbmcvc3JjL2xpYi9jb21wb25lbnRzL3dyYXBwZXIvd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixjQUFjLEVBQ2Qsd0JBQXdCLEVBQ3hCLHFCQUFxQixFQUNyQixVQUFVLEVBQ1YsWUFBWSxHQUNiLE1BQU0sbUNBQW1DLENBQUM7QUFPM0MsTUFBTSxPQUFPLGdCQUFnQjtJQWlTM0I7UUFoU0EsWUFBTyxHQUFrQyxFQUFFLENBQUM7UUFDbkMsaUJBQVksR0FBZSxFQUFFLENBQUM7UUFDOUIsMEJBQXFCLEdBQWUsRUFBRSxDQUFDO1FBQ2hELDBCQUFxQixHQUFlLEVBQUUsQ0FBQztRQUN2QyxzQkFBaUIsR0FBa0MsRUFBRSxDQUFDO1FBQ3RELFNBQUksR0FBa0IsRUFBRSxDQUFDO1FBQ3pCLHVCQUFrQixHQUFrQixFQUFFLENBQUM7UUFDdkMsdUJBQWtCLEdBQWtCLEVBQUUsQ0FBQztRQUN2QyxpQkFBWSxHQUFrQyxFQUFFLENBQUM7UUFDakQsZUFBVSxHQUFrQixFQUFFLENBQUM7UUFDL0IsZ0JBQVcsR0FBMkIsRUFBRSxDQUFDO1FBQ3pDLGNBQVMsR0FBa0IsRUFBRSxDQUFDO1FBQzlCLHdCQUFtQixHQUFrQixFQUFFLENBQUM7UUFDeEMsMEJBQXFCLEdBQWUsRUFBRSxDQUFDO1FBQ3ZDLDBCQUFxQixHQUFrQixFQUFFLENBQUM7UUFDakMsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixvQkFBZSxHQUFrQixFQUFF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LENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMzQixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNoQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUNwRCxHQUFHLGlCQUFpQjtZQUNwQixHQUFHLElBQUksQ0FBQyxpQkFBaUI7U0FDMUIsQ0FBQztJQUNKLENBQUM7OztZQTlZRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDhxREFBdUM7O2FBRXhDOzs7OzJCQUdFLEtBQUs7b0NBQ0wsS0FBSztxQkFhTCxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLOytCQW1CTCxLQUFLO3dCQUNMLEtBQUs7dUJBb0JMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuLi8uLi9GdW5jdGlvbnMvYXBpJztcbmltcG9ydCB7XG4gIERlcGVuZGVudFRlcm1zRmV0Y2gsXG4gIEZpbHRlckRhdGFFeHRyYWN0LFxuICBGcmFtZXdvcmtzT3B0aW9uc1JlbmRlcixcbiAgR2V0RnJhbWVXb3JrSUQsXG4gIE1hc3RlckZpZWxkQ29udGVudENoYW5nZSxcbiAgUmVuZGVyQ29udGVudEZ1bmN0aW9uLFxuICBUZXJtc0ZldGNoLFxuICBVcGRhdGVDb25maWcsXG59IGZyb20gJy4uLy4uL0Z1bmN0aW9ucy9TZXJ2aWNlX0Z1bmN0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC13cmFwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93cmFwcGVyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgV3JhcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgY29udGVudDogQXJyYXk8eyBba2V5OiBzdHJpbmddOiBhbnkgfT4gPSBbXTtcbiAgQElucHV0KCkgRmlsdGVyQ29uZmlnOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIEFkZHRpb25hbEZpbHRlckNvbmZpZzogQXJyYXk8YW55PiA9IFtdO1xuICBBcGlTZXR0ZWRGaWx0ZXJDb25maWc6IEFycmF5PGFueT4gPSBbXTtcbiAgRmlsdGVyT3B0aW9uc0RhdGE6IEFycmF5PHsgW2tleTogc3RyaW5nXTogYW55IH0+ID0gW107XG4gIHRhZ3M6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgT3JpZ2luYWxNYXN0ZXJLZXlzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIERlcGVuZGVudFRlcm1zRGF0YTogQXJyYXk8b2JqZWN0PiA9IFtdO1xuICBNYXN0ZXJGaWVsZHM6IEFycmF5PHsgW2tleTogc3RyaW5nXTogYW55IH0+ID0gW107XG4gIE1hc3RlcktleXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgQ2FyZERhdGFPYmo6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgQ2FyZHNEYXRhOiBBcnJheTxvYmplY3Q+ID0gW107XG4gIFByZXZGaWx0ZXJBZGROdW1iZXI6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgRnJhbWV3b3Jrc09wdGlvbkFycmF5OiBBcnJheTxhbnk+ID0gW107XG4gIEZpbHRlck9wdGlvbk5hbWVBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICBASW5wdXQoKSBDaGFuZ2U6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIEZpbHRlckFkZE51bWJlcjogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICBASW5wdXQoKSBGaWx0ZXJzQXJyYXk6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KCkgRnJhbWV3b3JrOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgRnJhbWV3b3Jrc0FycmF5OiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIGhvc3RuYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgRm9ybUFQSToge1xuICAgIHVybDogc3RyaW5nO1xuICAgIGhlYWRlcnM/OiBvYmplY3Q7XG4gICAgbWV0aG9kOiBzdHJpbmc7XG4gICAgYm9keT86IHN0cmluZztcbiAgICBjYWNoZT86XG4gICAgICB8ICdkZWZhdWx0J1xuICAgICAgfCAnbm8tc3RvcmUnXG4gICAgICB8ICdyZWxvYWQnXG4gICAgICB8ICdmb3JjZS1jYWNoZSdcbiAgICAgIHwgJ29ubHktaWYtY2FjaGVkJ1xuICAgICAgfCAnbm8tY2FjaGUnO1xuICB9ID0ge1xuICAgIHVybDogJycsXG4gICAgaGVhZGVyczoge30sXG4gICAgbWV0aG9kOiAnJyxcbiAgICBib2R5OiAnJyxcbiAgICBjYWNoZTogJ2RlZmF1bHQnLFxuICB9O1xuICBASW5wdXQoKSBDYXJkc0ZpZWxkQ29uZmlnOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gIEBJbnB1dCgpIFNlYXJjaEFQSToge1xuICAgIHVybDogc3RyaW5nO1xuICAgIGhlYWRlcnM/OiBvYmplY3Q7XG4gICAgbWV0aG9kOiBzdHJpbmc7XG4gICAgYm9keT86IHN0cmluZztcbiAgICBjYWNoZT86XG4gICAgICB8ICdkZWZhdWx0J1xuICAgICAgfCAnbm8tc3RvcmUnXG4gICAgICB8ICdyZWxvYWQnXG4gICAgICB8ICdmb3JjZS1jYWNoZSdcbiAgICAgIHwgJ29ubHktaWYtY2FjaGVkJ1xuICAgICAgfCAnbm8tY2FjaGUnO1xuICB9ID0ge1xuICAgIHVybDogJycsXG4gICAgaGVhZGVyczoge30sXG4gICAgbWV0aG9kOiAnJyxcbiAgICBib2R5OiAnJyxcbiAgICBjYWNoZTogJ2RlZmF1bHQnLFxuICB9O1xuICBGaWx0ZXJCb2R5U2V0OiBhbnkgPSB0aGlzLlNlYXJjaEFQSS5ib2R5O1xuICBASW5wdXQoKSBUZXJtc0FQSToge1xuICAgIHVybDogc3RyaW5nO1xuICAgIGhlYWRlcnM/OiBvYmplY3Q7XG4gICAgbWV0aG9kOiBzdHJpbmc7XG4gICAgYm9keT86IHN0cmluZztcbiAgICBjYWNoZT86XG4gICAgICB8ICdkZWZhdWx0J1xuICAgICAgfCAnbm8tc3RvcmUnXG4gICAgICB8ICdyZWxvYWQnXG4gICAgICB8ICdmb3JjZS1jYWNoZSdcbiAgICAgIHwgJ29ubHktaWYtY2FjaGVkJ1xuICAgICAgfCAnbm8tY2FjaGUnO1xuICB9ID0ge1xuICAgIHVybDogJycsXG4gICAgaGVhZGVyczoge30sXG4gICAgbWV0aG9kOiAnJyxcbiAgICBib2R5OiAnJyxcbiAgICBjYWNoZTogJ2RlZmF1bHQnLFxuICB9O1xuXG4gIEZldGNoQW5kVXBkYXRlRmlsdGVyQ29uZmlnKCkge1xuICAgIGZldGNoRGF0YSh7XG4gICAgICB1cmw6IHRoaXMuRm9ybUFQSS51cmwsXG4gICAgICBjYWNoZTogdGhpcy5Gb3JtQVBJLmNhY2hlID8gdGhpcy5Gb3JtQVBJLmNhY2hlIDogJ2RlZmF1bHQnLFxuICAgICAgbWV0aG9kOiB0aGlzLkZvcm1BUEkubWV0aG9kLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5BcGlTZXR0ZWRGaWx0ZXJDb25maWcgPSBVcGRhdGVDb25maWcoe1xuICAgICAgICAgIGFwaURhdGE6IHJlcyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHRoaXMuRmlsdGVyQ29uZmlnLFxuICAgICAgICAgIGFkZHRpb25hbEZpbHRlckNvbmZpZzogdGhpcy5BZGR0aW9uYWxGaWx0ZXJDb25maWcsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IEZyYW1ld29ya0lEID1cbiAgICAgIHRoaXMuRnJhbWV3b3JrID09PSAnJ1xuICAgICAgICA/ICdla3N0ZXBfbmNlcnRfay0xMidcbiAgICAgICAgOiBHZXRGcmFtZVdvcmtJRCh0aGlzLkZyYW1ld29ya3NBcnJheSwgdGhpcy5GcmFtZXdvcmspO1xuICAgIGZldGNoRGF0YSh7XG4gICAgICB1cmw6IGAke3RoaXMuaG9zdG5hbWV9L2FwaS9jb250ZW50L3YxL3NlYXJjaD9vcmdkZXRhaWxzPW9yZ05hbWUsZW1haWwmZnJhbWV3b3JrPSR7RnJhbWV3b3JrSUR9YCxcbiAgICAgIGNhY2hlOiB0aGlzLlNlYXJjaEFQSS5jYWNoZSA/IHRoaXMuU2VhcmNoQVBJLmNhY2hlIDogJ2RlZmF1bHQnLFxuICAgICAgbWV0aG9kOiB0aGlzLlNlYXJjaEFQSS5tZXRob2QsXG4gICAgICBib2R5OiB0aGlzLlNlYXJjaEFQSS5ib2R5LFxuICAgICAgaGVhZGVyczogdGhpcy5TZWFyY2hBUEkuaGVhZGVycyxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSByZXMucmVzdWx0LmNvbnRlbnQ7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIGZldGNoRGF0YSh7XG4gICAgICB1cmw6IGAke3RoaXMuaG9zdG5hbWV9L2FwaS9mcmFtZXdvcmsvdjEvcmVhZC8ke0ZyYW1ld29ya0lEfT9jYXRlZ29yaWVzPWJvYXJkLGdyYWRlTGV2ZWwsbWVkaXVtLGNsYXNzLHN1YmplY3RgLFxuICAgICAgY2FjaGU6IHRoaXMuVGVybXNBUEkuY2FjaGUgPyB0aGlzLlRlcm1zQVBJLmNhY2hlIDogJ2RlZmF1bHQnLFxuICAgICAgbWV0aG9kOiB0aGlzLlRlcm1zQVBJLm1ldGhvZCxcbiAgICAgIGhlYWRlcnM6IHRoaXMuVGVybXNBUEkuaGVhZGVycyxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLk1hc3RlckZpZWxkcyA9IFRlcm1zRmV0Y2gocmVzLCB0aGlzLkFwaVNldHRlZEZpbHRlckNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5NYXN0ZXJLZXlzID0gT2JqZWN0LmtleXModGhpcy5NYXN0ZXJGaWVsZHNbMF0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIERlcGVuZGVudEZpZWxkc1JlbmRlcigpIHtcbiAgICBjb25zdCBGcmFtZXdvcmtJRCA9XG4gICAgICB0aGlzLkZyYW1ld29yayA9PT0gJydcbiAgICAgICAgPyAnZWtzdGVwX25jZXJ0X2stMTInXG4gICAgICAgIDogR2V0RnJhbWVXb3JrSUQodGhpcy5GcmFtZXdvcmtzQXJyYXksIHRoaXMuRnJhbWV3b3JrKTtcbiAgICBmZXRjaERhdGEoe1xuICAgICAgdXJsOiBgJHt0aGlzLmhvc3RuYW1lfS9hcGkvZnJhbWV3b3JrL3YxL3JlYWQvJHtGcmFtZXdvcmtJRH0/Y2F0ZWdvcmllcz1ib2FyZCxncmFkZUxldmVsLG1lZGl1bSxjbGFzcyxzdWJqZWN0YCxcbiAgICAgIGNhY2hlOiB0aGlzLlRlcm1zQVBJLmNhY2hlID8gdGhpcy5UZXJtc0FQSS5jYWNoZSA6ICdkZWZhdWx0JyxcbiAgICAgIG1ldGhvZDogdGhpcy5UZXJtc0FQSS5tZXRob2QsXG4gICAgICBoZWFkZXJzOiB0aGlzLlRlcm1zQVBJLmhlYWRlcnMsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IERlcGVuZGVudFRlcm1zRmV0Y2goXG4gICAgICAgICAgcmVzLFxuICAgICAgICAgIHRoaXMuRmlsdGVyc0FycmF5LFxuICAgICAgICAgIHRoaXMuTWFzdGVyRmllbGRzXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuRGVwZW5kZW50VGVybXNEYXRhID0gZGF0YTtcbiAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xuICAgICAgICB0aGlzLkZpbHRlcnNBcnJheT8ubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbT8udmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgIGZldGNoRGF0YSh7XG4gICAgICAgICAgICB1cmw6IGAke3RoaXMuaG9zdG5hbWV9L2FwaS9mcmFtZXdvcmsvdjEvcmVhZC8ke0ZyYW1ld29ya0lEfT9jYXRlZ29yaWVzPWJvYXJkLGdyYWRlTGV2ZWwsbWVkaXVtLGNsYXNzLHN1YmplY3RgLFxuICAgICAgICAgICAgY2FjaGU6IHRoaXMuVGVybXNBUEkuY2FjaGUgPyB0aGlzLlRlcm1zQVBJLmNhY2hlIDogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgbWV0aG9kOiB0aGlzLlRlcm1zQVBJLm1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuVGVybXNBUEkuaGVhZGVycyxcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICB0aGlzLk1hc3RlckZpZWxkcyA9IFRlcm1zRmV0Y2gocmVzLCB0aGlzLkFwaVNldHRlZEZpbHRlckNvbmZpZyk7XG5cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLk1hc3RlckZpZWxkc1swXSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5NYXN0ZXJGaWVsZHNbMF0gIT09IG51bGxcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5NYXN0ZXJLZXlzID0gT2JqZWN0LmtleXModGhpcy5NYXN0ZXJGaWVsZHNbMF0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuTWFzdGVyRmllbGRzID0gdGhpcy5EZXBlbmRlbnRUZXJtc0RhdGE7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1Rlcm1zJywgdGhpcy5NYXN0ZXJGaWVsZHMpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgRnJhbWVXb3Jrc0ZldGNoKCkge1xuICAgIGNvbnN0IEZyYW1lV29ya3NPcHRpb24gPSBGcmFtZXdvcmtzT3B0aW9uc1JlbmRlcih0aGlzLkZyYW1ld29ya3NBcnJheSk7XG4gICAgdGhpcy5GcmFtZXdvcmtzT3B0aW9uQXJyYXkgPSBGcmFtZVdvcmtzT3B0aW9uO1xuICB9XG5cbiAgTWFzdGVyQm9keUNvbnRlbnRDaGFuZ2UoKSB7XG4gICAgdGhpcy5GaWx0ZXJCb2R5U2V0ID0gTWFzdGVyRmllbGRDb250ZW50Q2hhbmdlKFxuICAgICAgdGhpcy5BbGxGaWx0ZXJzQXJyYXkgIT09IHVuZGVmaW5lZCAmJiB0aGlzLkFsbEZpbHRlcnNBcnJheS5sZW5ndGggIT09IDBcbiAgICAgICAgPyB0aGlzLkFsbEZpbHRlcnNBcnJheVxuICAgICAgICA6IHRoaXMuRmlsdGVyc0FycmF5LFxuICAgICAgdGhpcy5GaWx0ZXJDb25maWcsXG4gICAgICB0aGlzLlNlYXJjaEFQSS5ib2R5ID8gdGhpcy5TZWFyY2hBUEkuYm9keSA6ICcnXG4gICAgKTtcbiAgfVxuXG4gIEZpbHRlcnNDb250ZW50UmVuZGVyKCkge1xuICAgIHRoaXMuTWFzdGVyQm9keUNvbnRlbnRDaGFuZ2UoKTtcbiAgICBjb25zdCBGcmFtZXdvcmtJRCA9XG4gICAgICB0aGlzLkZyYW1ld29yayA9PT0gJydcbiAgICAgICAgPyAnZWtzdGVwX25jZXJ0X2stMTInXG4gICAgICAgIDogR2V0RnJhbWVXb3JrSUQodGhpcy5GcmFtZXdvcmtzQXJyYXksIHRoaXMuRnJhbWV3b3JrKTtcbiAgICBmZXRjaERhdGEoe1xuICAgICAgdXJsOiBgJHtcbiAgICAgICAgdGhpcy5ob3N0bmFtZVxuICAgICAgfS9hcGkvY29udGVudC92MS9zZWFyY2g/b3JnZGV0YWlscz1vcmdOYW1lLGVtYWlsJmZyYW1ld29yaz0ke1xuICAgICAgICB0aGlzLkZyYW1ld29yayA9PT0gJycgPyAnZWtzdGVwX25jZXJ0X2stMTInIDogRnJhbWV3b3JrSURcbiAgICAgIH1gLFxuICAgICAgY2FjaGU6ICdkZWZhdWx0JyxcbiAgICAgIG1ldGhvZDogdGhpcy5TZWFyY2hBUEkubWV0aG9kLFxuICAgICAgYm9keTogdGhpcy5GaWx0ZXJCb2R5U2V0LFxuICAgICAgaGVhZGVyczogdGhpcy5TZWFyY2hBUEkuaGVhZGVycyxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLnJlc3VsdC5jb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmNvbnRlbnQgPSByZXMucmVzdWx0LmNvbnRlbnQ7XG4gICAgICAgICAgdGhpcy5GaWx0ZXJEYXRhUmVuZGVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzLnJlc3VsdC5RdWVzdGlvblNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5jb250ZW50ID0gcmVzLnJlc3VsdC5RdWVzdGlvblNldDtcbiAgICAgICAgICB0aGlzLkZpbHRlckRhdGFSZW5kZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBGaWx0ZXJEYXRhUmVuZGVyKCkge1xuICAgIGNvbnN0IFJldHVybkRhdGEgPSBGaWx0ZXJEYXRhRXh0cmFjdCh7XG4gICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICBmaWx0ZXJDb25maWc6IHRoaXMuQXBpU2V0dGVkRmlsdGVyQ29uZmlnLFxuICAgICAgVGVybXNPYmplY3Q6IHRoaXMuQWRkdGlvbmFsRmlsdGVyQ29uZmlnLFxuICAgIH0pO1xuICAgIHRoaXMuRmlsdGVyT3B0aW9uc0RhdGEgPSBSZXR1cm5EYXRhLk9wdGlvblZhbHVlQXJyYXk7XG5cbiAgICB0aGlzLkZpbHRlck9wdGlvbk5hbWVBcnJheSA9IFJldHVybkRhdGEuT3B0aW9uTmFtZUFycmF5O1xuICAgIHRoaXMuQWxsT3B0aW9ucy5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgaWYgKHRoaXMuRmlsdGVyT3B0aW9uTmFtZUFycmF5LmluY2x1ZGVzKGl0ZW0ubmFtZSkpIHtcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5GaWx0ZXJPcHRpb25OYW1lQXJyYXkuaW5kZXhPZihpdGVtLm5hbWUpO1xuICAgICAgICBpdGVtLnRlcm1zID0gdGhpcy5GaWx0ZXJPcHRpb25zRGF0YVtpZHhdLnRlcm1zO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBSZXR1cm5EYXRhO1xuICB9XG4gIEFkZHRpb25hbENvbnRlbnQ6IGFueTtcbiAgUmVuZGVyQ29udGVudEFkZHRpb25hbEZpbHRlcigpIHtcbiAgICB0aGlzLkFkZHRpb25hbENvbnRlbnQgPSBSZW5kZXJDb250ZW50RnVuY3Rpb24oe1xuICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgZmlsdGVyc1NlbGVjdGVkOiB0aGlzLkZpbHRlcnNBcnJheSxcbiAgICAgIGZpbHRlckNvbmZpZzogdGhpcy5BcGlTZXR0ZWRGaWx0ZXJDb25maWcsXG4gICAgfSk7XG4gIH1cblxuICBBZGRpdGlvbmFsT3B0aW9uVmFsdWVSZXR1cm4oS2V5OiBzdHJpbmcpIHtcbiAgICBsZXQgdmFsdWVBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIHRoaXMuRmlsdGVyT3B0aW9uc0RhdGEubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIGlmIChLZXkudG9Mb3dlckNhc2UoKSA9PT0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgdmFsdWVBcnJheSA9IGl0ZW0udmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlQXJyYXk7XG4gIH1cblxuICBDYXJkc0ZpZWxkQ2hlY2soZmllbGQ6IHN0cmluZywgaXRlbTogYW55KSB7XG4gICAgaWYgKGZpZWxkID09PSAndGFncycgJiYgdGhpcy5DYXJkc0ZpZWxkQ29uZmlnLmhhc093blByb3BlcnR5KGZpZWxkKSkge1xuICAgICAgY29uc3QgYXJyOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICBjb25zdCB0YWdzQXJyYXkgPSB0aGlzLkNhcmRzRmllbGRDb25maWdbZmllbGRdLlRhZ3NGaWVsZEFycmF5O1xuICAgICAgdGFnc0FycmF5Lm1hcCgoa2V5OiBhbnkpID0+IHtcbiAgICAgICAgYXJyLnB1c2goaXRlbVtrZXldKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgaWYgKGZpZWxkID09PSAndGFncycpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuQ2FyZHNGaWVsZENvbmZpZy5oYXNPd25Qcm9wZXJ0eShmaWVsZCkpIHtcbiAgICAgIGNvbnN0IGl0ZW1LZXkgPSB0aGlzLkNhcmRzRmllbGRDb25maWdbZmllbGRdLmZpZWxkO1xuICAgICAgcmV0dXJuIGl0ZW1baXRlbUtleV07XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cbiAgQWxsT3B0aW9uczogYW55ID0gW107XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuRmV0Y2hBbmRVcGRhdGVGaWx0ZXJDb25maWcoKTtcbiAgICB0aGlzLlJlbmRlckNvbnRlbnRBZGR0aW9uYWxGaWx0ZXIoKTtcbiAgICB0aGlzLkZyYW1lV29ya3NGZXRjaCgpO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLkZldGNoQW5kVXBkYXRlRmlsdGVyQ29uZmlnKCk7XG4gICAgdGhpcy5EZXBlbmRlbnRGaWVsZHNSZW5kZXIoKTtcbiAgICB0aGlzLkZyYW1lV29ya3NGZXRjaCgpO1xuICAgIHRoaXMuRmlsdGVyc0NvbnRlbnRSZW5kZXIoKTtcblxuICAgIGxldCBNYXN0ZXJGaWVsZHNBcnJheTogQXJyYXk8YW55PiA9IFtdO1xuICAgIHRoaXMuTWFzdGVyS2V5cy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIE1hc3RlckZpZWxkc0FycmF5LnB1c2godGhpcy5NYXN0ZXJGaWVsZHNbMF1baXRlbV0pO1xuICAgIH0pO1xuICAgIHRoaXMuQWxsT3B0aW9ucyA9IFtcbiAgICAgIHsgbmFtZTogJ0JvYXJkJywgdGVybXM6IHRoaXMuRnJhbWV3b3Jrc09wdGlvbkFycmF5IH0sXG4gICAgICAuLi5NYXN0ZXJGaWVsZHNBcnJheSxcbiAgICAgIC4uLnRoaXMuRmlsdGVyT3B0aW9uc0RhdGEsXG4gICAgXTtcbiAgICB0aGlzLlJlbmRlckNvbnRlbnRBZGR0aW9uYWxGaWx0ZXIoKTtcbiAgfVxuXG4gIElzQWRkdGlvbmFsRmlsdGVyKE5hbWU6IHN0cmluZykge1xuICAgIGxldCBmbGFnID0gZmFsc2U7XG4gICAgdGhpcy5BZGR0aW9uYWxGaWx0ZXJDb25maWcubWFwKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IE5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmxhZztcbiAgfVxuXG4gIEFsbEZpbHRlcnNBcnJheTogYW55ID0gW107XG5cbiAgTE9HKGE6IGFueSkge1xuICAgIGNvbnN0IGVsZSA9IGFbMF07XG4gICAgaWYgKGVsZS5uYW1lID09PSAnQm9hcmQnKSB7XG4gICAgICB0aGlzLkZyYW1ld29yayA9IGVsZS52YWx1ZS5sZW5ndGggPT09IDAgPyAnQ0JTRScgOiBlbGUudmFsdWVbMF07XG4gICAgfVxuICAgIGxldCBmbGFnID0gdHJ1ZTtcbiAgICB0aGlzLkFsbEZpbHRlcnNBcnJheS5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gZWxlLm5hbWUpIHtcbiAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChmbGFnKSB7XG4gICAgICB0aGlzLkFsbEZpbHRlcnNBcnJheS5wdXNoKGVsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuQWxsRmlsdGVyc0FycmF5Lm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlbGUubmFtZSA9PT0gJ0JvYXJkJykge1xuICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09ICdCb2FyZCcpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlWzBdID09PSBlbGUudmFsdWVbMF0pIHtcbiAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9IFtdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9IGVsZS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5Jc0FkZHRpb25hbEZpbHRlcihlbGUubmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBvbGRBcnIgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgIGlmIChvbGRBcnIuaW5jbHVkZXMoZWxlLnZhbHVlWzBdKSkge1xuICAgICAgICAgICAgb2xkQXJyLnNwbGljZShvbGRBcnIuaW5kZXhPZihlbGUudmFsdWVbMF0pLCAxKTtcbiAgICAgICAgICAgIGl0ZW0udmFsdWUgPSBvbGRBcnI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9sZEFyci5wdXNoKGVsZS52YWx1ZVswXSk7XG4gICAgICAgICAgICBjb25zdCB1bmlxdWVFbGVtZW50cyA9IEFycmF5LmZyb20obmV3IFNldChvbGRBcnIpKTtcbiAgICAgICAgICAgIGl0ZW0udmFsdWUgPSB1bmlxdWVFbGVtZW50cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBpZiAodGhpcy5GcmFtZXdvcmtzT3B0aW9uQXJyYXkuaW5jbHVkZXMoZWxlLnZhbHVlWzBdKSAmJiB0aGlzLkFsbEZpbHRlcnNBcnJheS5sZW5ndGghPT0wKSB7XG4gICAgLy8gICAvLyBjb25zb2xlLmxvZyhcIlllc1wiKTtcbiAgICAvLyAgIGxldCBvbGRBcnIgPSB0aGlzLkFsbEZpbHRlcnNBcnJheS5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgIC8vICAgICByZXR1cm4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGVsZS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gICB9KTtcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKFwib2xkXCIsb2xkQXJyKTtcbiAgICAvLyAgIG9sZEFyci5wdXNoKHsgbmFtZTogZWxlLm5hbWUsIHZhbHVlOiBbZWxlLnZhbHVlXSB9KTtcbiAgICAvLyAgIHRoaXMuQWxsRmlsdGVyc0FycmF5ID0gb2xkQXJyO1xuICAgIC8vIH1cbiAgICAvLyBpZih0aGlzLkFsbEZpbHRlcnNBcnJheS5sZW5ndGghPT0wKXtcbiAgICAvLyAgIHRoaXMuQWxsRmlsdGVyc0FycmF5Lm1hcCgoaXRlbTphbnkpPT57XG4gICAgLy8gICAgIGlmKGl0ZW0ubmFtZT09PSdCb2FyZCcpe1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgICB0aGlzLkZpbHRlcnNBcnJheSA9IHRoaXMuQWxsRmlsdGVyc0FycmF5O1xuICAgIHRoaXMuTWFzdGVyQm9keUNvbnRlbnRDaGFuZ2UoKTtcbiAgICB0aGlzLkRlcGVuZGVudEZpZWxkc1JlbmRlcigpO1xuICAgIHRoaXMuRnJhbWVXb3Jrc0ZldGNoKCk7XG4gICAgdGhpcy5GaWx0ZXJzQ29udGVudFJlbmRlcigpO1xuICAgIHRoaXMuUmVuZGVyQ29udGVudEFkZHRpb25hbEZpbHRlcigpO1xuXG4gICAgbGV0IE1hc3RlckZpZWxkc0FycmF5OiBBcnJheTxhbnk+ID0gW107XG4gICAgdGhpcy5NYXN0ZXJLZXlzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgTWFzdGVyRmllbGRzQXJyYXkucHVzaCh0aGlzLk1hc3RlckZpZWxkc1swXVtpdGVtXSk7XG4gICAgfSk7XG4gICAgdGhpcy5BbGxPcHRpb25zID0gW1xuICAgICAgeyBuYW1lOiAnQm9hcmQnLCB0ZXJtczogdGhpcy5GcmFtZXdvcmtzT3B0aW9uQXJyYXkgfSxcbiAgICAgIC4uLk1hc3RlckZpZWxkc0FycmF5LFxuICAgICAgLi4udGhpcy5GaWx0ZXJPcHRpb25zRGF0YSxcbiAgICBdO1xuICB9XG59XG4iXX0=