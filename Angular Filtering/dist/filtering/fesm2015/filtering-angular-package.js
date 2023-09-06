import { Component, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { __awaiter } from 'tslib';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const fetchData = ({ headers, body, url, method, cache, }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url, {
        headers: headers,
        body: body,
        method: method === undefined || method === null ? 'GET' : method,
        cache: cache,
    });
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    return response.json();
});

class FilteringComponent {
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

class FiltersComponentComponent {
    constructor() {
        this.Show = '';
        this.Data = '';
        this.FiltersArrayEvent = new EventEmitter();
        this.AddFilterNumberEvent = new EventEmitter();
        this.FiltersArray = [];
        this.Selected = [];
        this.AddFilterNumber = [0];
        this.Name = '';
        this.OptionValue = [];
        this.FilterConfig = [];
        this.AddtionalFilterConfig = [];
        this.AllFiltersArray = [];
        this.OptionOb = [];
        this.Check = [];
    }
    getOptionStatus(a) {
        var _a;
        const idx = this.OptionOb.findIndex((obj) => obj.name.toLowerCase() === a.toLowerCase());
        return (_a = this.OptionOb[idx]) === null || _a === void 0 ? void 0 : _a.Options;
    }
    OptionsShow(a) {
        const index = this.OptionOb.findIndex((obj) => obj.name.toLowerCase() === a.toLowerCase());
        if (index !== -1) {
            this.OptionOb[index].Options = !this.OptionOb[index].Options;
        }
        return this.OptionOb[index].Options ? this.OptionOb[index].Options : false;
    }
    isSelected(optionName) {
        let flag = true;
        this.FiltersArray.map((item) => {
            if (item.name.toLowerCase() === optionName.toLowerCase() &&
                item.value.length !== 0) {
                flag = false;
            }
        });
        return flag;
    }
    CheckIfOptionPresent(optionName, option) {
        let flag = false;
        this.FiltersArray.map((item) => {
            if (item.name.toLowerCase() === optionName.toLowerCase() &&
                item.value.includes(option)) {
                flag = true;
            }
        });
        return flag;
    }
    CheckIfOptionPresentNew(optionName) {
        var _a;
        let flag = false;
        (_a = this.FiltersArray) === null || _a === void 0 ? void 0 : _a.map((item) => {
            if (item.name.toLowerCase() === optionName.toLowerCase()) {
                flag = true;
            }
        });
        return flag;
    }
    OptionNamePresent(optionName, itemarg) {
        var _a;
        let flag = false;
        (_a = this.FiltersArray) === null || _a === void 0 ? void 0 : _a.map((item) => {
            if (item.name.toLowerCase() === optionName.toLowerCase() &&
                item.name.toLowerCase() === itemarg.name.toLowerCase()) {
                flag = true;
            }
        });
        return flag;
    }
    Reset() {
        this.FiltersArray = [];
    }
    IsSingleSelect(OptionName) {
        let flag = false;
        this.FilterConfig.map((item) => {
            console.log(item);
            if (item.name.toLowerCase() === OptionName.toLowerCase()) {
                if (item.SelectType === 'single') {
                    flag = true;
                }
            }
        });
        return flag;
    }
    addFilter(OptionName, OptionValue) {
        var _a;
        if (this.CheckIfOptionPresentNew(OptionName)) {
            (_a = this.FiltersArray) === null || _a === void 0 ? void 0 : _a.map((item) => {
                if (this.OptionNamePresent(OptionName, item)) {
                    if (item.value.includes(OptionValue)) {
                        const newarr = item.value;
                        const indexofOption = item.value.indexOf(OptionValue);
                        newarr.splice(indexofOption, 1);
                        item.value = newarr;
                        return;
                    }
                    if (!item.value.includes(OptionValue)) {
                        let oldArr = item.value;
                        oldArr.push(OptionValue);
                        item.value = oldArr;
                    }
                }
            });
        }
        else {
            this.FiltersArray = [
                ...this.FiltersArray,
                { name: OptionName, value: [OptionValue] },
            ];
        }
        const lastIdx = this.AddFilterNumber.length;
        this.AddFilterNumber.push(this.AddFilterNumber[lastIdx - 1] + 1);
        this.AddFilterNumberEvent.emit(this.AddFilterNumber);
        this.Check = [...this.Check, ...this.FiltersArray];
        this.FiltersArrayEvent.emit(this.FiltersArray);
    }
    OptionShowHide() {
        let arr = [];
        if (this.FilterConfig.length !== 0) {
            this.FilterConfig.map((item) => {
                arr.push({
                    name: item.name,
                    Options: false,
                });
            });
        }
        if (this.AddtionalFilterConfig.length !== 0) {
            this.AddtionalFilterConfig.map((item) => {
                if (item.isEnabled)
                    arr.push({
                        name: item.name,
                        Options: false,
                    });
            });
        }
        this.OptionOb = arr;
    }
    ngOnInit() {
        this.OptionShowHide();
    }
}
FiltersComponentComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-filters-component',
                template: "<ng-container>\r\n  <div>\r\n    <div>\r\n      <h4\r\n        style=\"\r\n          color: rgb(0, 0, 0);\r\n          margin-bottom: 5px;\r\n          font-weight: 600;\r\n          font-size: 19px;\r\n        \"\r\n      >\r\n        {{ this.Name.toUpperCase() }}\r\n      </h4>\r\n      <div\r\n        *ngIf=\"isSelected(this.Name)\"\r\n        class=\"dsHhXj\"\r\n        (click)=\"OptionsShow(this.Name)\"\r\n      >\r\n        Select\r\n      </div>\r\n      <div\r\n        *ngIf=\"!isSelected(this.Name)\"\r\n        (click)=\"OptionsShow(this.Name)\"\r\n        class=\"dsHhXj\"\r\n      >\r\n        <div *ngFor=\"let term of this.FiltersArray\">\r\n          <div\r\n            style=\"display: flex; column-gap: 4px; flex-wrap: nowrap\"\r\n            *ngIf=\"term.name === this.Name\"\r\n          >\r\n            <div *ngFor=\"let option of term.value\">\r\n              {{ option }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"getOptionStatus(this.Name)\">\r\n        <div class=\"fugxRD\">\r\n          <ng-container *ngFor=\"let term of OptionValue\">\r\n            <div (click)=\"addFilter(this.Name, term)\" class=\"hHjkUf\">\r\n              <div class=\"ghPFCr\" style=\"cursor: pointer\">\r\n                {{ term }}\r\n              </div>\r\n              <span *ngIf=\"CheckIfOptionPresent(this.Name, term)\">\u2705</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
                styles: [".faKsuq{background:#e9e8d9;padding:10px 20px;width:-moz-max-content;width:max-content;border-radius:10px;width:15rem;display:flex;flex-direction:column;row-gap:8px}.dsHhXj{display:flex;align-items:center;padding:8px;border-radius:15px;width:14rem;height:1.3rem;overflow-x:scroll;overflow-y:hidden;background-color:#fff;cursor:pointer;color:#00008b}.dsHhXj::-webkit-scrollbar{display:none}.fugxRD{flex-direction:column;position:absolute;margin-top:4px;width:14rem;color:#00008b;overflow-y:scroll;max-height:10rem;min-height:-moz-fit-content;min-height:fit-content;border-radius:10px;background:#fff;padding:10px;z-index:999}.fugxRD::-webkit-scrollbar{display:none}.fEvyMP{border:none;color:#000;font-size:15px;font-weight:700;position:relative;left:104px;cursor:pointer;top:10px;background:transparent}.hHjkUf{background-color:#fff;display:flex;justify-content:space-between;align-items:center;padding:3px;margin-top:5px;cursor:pointer;border-radius:10px}.hHjkUf:hover{background-color:#cecece}.heading{color:#000;margin-bottom:5px;font-weight:600;font-size:19px}.kbiFbQ{display:flex;align-items:center;padding:8px;border-radius:15px;min-width:15rem;overflow-x:scroll;background-color:#fff;cursor:pointer;color:#00008b}.kbiFbQ::-webkit-scrollbar{display:none}.gIIEFD{flex-direction:column;position:absolute;margin-top:4px;min-width:15rem;max-width:-moz-max-content;max-width:max-content;color:#00008b;overflow-y:scroll;max-height:10rem;min-height:-moz-fit-content;min-height:fit-content;border-radius:10px;background:#fff;padding:10px;z-index:999}.gIIEFD::-webkit-scrollbar{display:none}.ghPFCr{font-size:18px;font-weight:500;color:#00008b;margin:5px}.gSmLwX{background-color:#ddd;display:flex;justify-content:space-between;align-items:center;padding:3px;margin-top:5px;cursor:pointer;border-radius:10px}@media (max-width:\"320px\"){.kbiFbQ{width:10rem}}"]
            },] }
];
FiltersComponentComponent.propDecorators = {
    Data: [{ type: Input }],
    FiltersArrayEvent: [{ type: Output }],
    AddFilterNumberEvent: [{ type: Output }],
    Name: [{ type: Input }],
    OptionValue: [{ type: Input }],
    FilterConfig: [{ type: Input }],
    AddtionalFilterConfig: [{ type: Input }],
    AllFiltersArray: [{ type: Input }]
};

class CardsComponentComponent {
    constructor() {
        this.name = '';
        this.type = '';
        this.tags = [''];
        this.image = '';
        this.subject = '';
        this.publisher = '';
    }
    ngOnInit() { }
    ngAfterViewInit() { }
}
CardsComponentComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-cards-component',
                template: "<div>\n  <div class=\"Container\">\n    <div class=\"TopContent\">\n      <div>\n        <p class=\"Link\" style=\"font-size: 18px;\">{{ this.name }}</p>\n        <p class=\"Type\">{{ this.type }}</p>\n      </div>\n      <div class=\"ImageDiv\">\n        <img\n          class=\"Image\"\n          [src]=\"\n            this.image ||\n            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'\n          \"\n        />\n      </div>\n    </div>\n    <div>\n      <div class=\"TagsDiv\" *ngIf=\"tags.length\">\n        <ng-container *ngFor=\"let tag of this.tags\">\n          <div *ngIf=\"tag\" class=\"Tags\">{{ tag }}</div>\n        </ng-container>\n      </div>\n      <div class=\"LowerDiv\">\n        <div class=\"LowerItem\" *ngIf=\"subject\">\n          <dt class=\"DescType\">Subject</dt>\n          <dd class=\"DetailDesc\">{{ subject }}</dd>\n        </div>\n        <div class=\"LowerItem\" *ngIf=\"publisher\">\n          <dt class=\"DescType\">Publisher</dt>\n          <dd class=\"DetailDesc\">{{ this.publisher }}</dd>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200&display=swap\");*{font-family:Noto Sans,sans-serif}.Container{display:block;overflow:hidden;padding:1rem;border-radius:.5rem;border-width:1px 1px .5rem;border-color:grey grey #a7f3d0;box-shadow:2px 2px 2px 2px rgba(0,0,0,.1);width:98%;width:23rem}.Container:hover{box-shadow:8px 8px 8px 8px rgba(0,0,0,.2);scale:1.001;animation:.3s ease-in-out both;cursor:pointer}.TopContent{display:flex;justify-content:space-between}.Link{font-weight:bolder;color:#111827;font-size:15px}.Image{-o-object-fit:cover;object-fit:cover;border-radius:9999px;width:4rem;height:4rem;box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.TagsDiv{display:flex;-moz-column-gap:.75rem;column-gap:.75rem;font-size:.4rem;line-height:1.25rem;color:#6b7280;min-width:40ch;max-width:-moz-fit-content;max-width:fit-content}.Tags{display:inline-flex;padding:5px 6px;border-radius:9999px;font-size:.6rem;line-height:1rem;font-weight:700;color:#047857;text-transform:uppercase;background-color:#a7f3d0}.LowerItem,.Tags{align-items:center}.LowerItem{display:flex;flex-direction:column}.DescType{font-size:.875rem;line-height:1.25rem;font-weight:600;width:-moz-fit-content;width:fit-content;color:#4b5563}.DetailDesc{font-size:.75rem;line-height:1rem;width:-moz-fit-content;width:fit-content;text-align:center;margin-left:0;color:#6b7280}.LowerDiv{display:flex;margin-top:1rem;gap:1rem;width:100%;justify-content:space-between}@media (min-width:1024px){.Container{margin-top:0;margin-bottom:0;width:21rem;max-height:-moz-fit-content;max-height:fit-content;min-height:11.5rem}.Link{font-size:1.5rem}.ImageDiv{margin-top:0;margin-bottom:0}}.ImageDiv{display:block;margin-top:.5rem;margin-bottom:.5rem}.Type{font-size:15px;font-weight:800;margin-top:-10px;color:#4b5563}@media screen and (max-width:500px){.Container{width:23rem}}@media (min-width:640px){.TopContent{justify-content:space-between;gap:1rem}.LowerDiv{gap:1.5rem}}"]
            },] }
];
CardsComponentComponent.ctorParameters = () => [];
CardsComponentComponent.propDecorators = {
    name: [{ type: Input }],
    type: [{ type: Input }],
    tags: [{ type: Input }],
    image: [{ type: Input }],
    subject: [{ type: Input }],
    publisher: [{ type: Input }]
};

function UpdateConfig({ apiData, addtionalFilterConfig, filterConfig, }) {
    let TempData = apiData;
    if ((filterConfig === null || filterConfig === void 0 ? void 0 : filterConfig.length) !== 0) {
        filterConfig === null || filterConfig === void 0 ? void 0 : filterConfig.map((item) => {
            const ItemName = item.name;
            const ItemField = item.field;
            const ItemIsEnabled = item.isEnabled !== undefined ? item.isEnabled : true;
            TempData[0].data.PrimaryFields[ItemName] = {
                field: ItemField,
                isEnabled: ItemIsEnabled,
            };
        });
    }
    if ((addtionalFilterConfig === null || addtionalFilterConfig === void 0 ? void 0 : addtionalFilterConfig.length) !== 0) {
        addtionalFilterConfig === null || addtionalFilterConfig === void 0 ? void 0 : addtionalFilterConfig.map((item) => {
            const ItemName = item.name;
            const ItemField = item.field;
            const ItemIsEnabled = item.isEnabled !== undefined ? item.isEnabled : true;
            TempData[0].data.additionalFields[ItemName] = {
                displayName: ItemName,
                field: ItemField,
                isEnabled: ItemIsEnabled,
            };
        });
    }
    // setFilterConfig(TempData);
    return TempData;
}
function isEnabled(filterConfig, itemName) {
    let isEnable = true;
    const Keys = Object.keys(filterConfig);
    Keys.map((item) => {
        if (item.toLowerCase() === itemName.toLowerCase()) {
            isEnable = filterConfig[item].isEnabled;
        }
    });
    return isEnable;
}
function FilterDataExtract({ content, filterConfig, TermsObject, }) {
    var _a, _b;
    const AddtionalFieldsObject = (_a = filterConfig[0]) === null || _a === void 0 ? void 0 : _a.data.additionalFields;
    const FilterConfigObject = Object.assign({}, AddtionalFieldsObject);
    let OptionNameArray = [];
    let OptionValueArray = [];
    if (filterConfig.length !== 0) {
        const AddtionalKeys = Object.keys((_b = filterConfig[0]) === null || _b === void 0 ? void 0 : _b.data.additionalFields);
        OptionNameArray = [...AddtionalKeys];
        OptionNameArray === null || OptionNameArray === void 0 ? void 0 : OptionNameArray.map((item) => {
            var _a;
            if (isEnabled(FilterConfigObject, item)) {
                let temp;
                if (TermsObject.hasOwnProperty(item)) {
                    temp = TermsObject[item];
                }
                else {
                    let fieldName = (_a = AddtionalFieldsObject[item]) === null || _a === void 0 ? void 0 : _a.field;
                    temp = new Set('');
                    if (fieldName !== null || fieldName !== undefined) {
                        content.map((item) => {
                            if (item[fieldName] !== null || item[fieldName] !== undefined) {
                                if (Array.isArray(item[fieldName])) {
                                    item[fieldName].map((ele) => {
                                        temp.add(ele);
                                    });
                                }
                                else {
                                    temp.add(item[fieldName]);
                                }
                            }
                        });
                    }
                }
                if (Array.isArray(temp)) {
                    if (temp.length !== 0)
                        OptionValueArray.push({
                            name: item,
                            terms: temp.sort(),
                        });
                }
                else {
                    const val = Array.from(temp);
                    val.splice(val.length - 1, 1);
                    if (val.length !== 0)
                        OptionValueArray.push({
                            name: item,
                            terms: val.sort(),
                        });
                }
            }
        });
    }
    return {
        OptionNameArray,
        OptionValueArray,
    };
}
function RenderContentFunction({ content, filtersSelected, filterConfig, }) {
    var _a;
    const AddtionalFieldsObject = (_a = filterConfig[0]) === null || _a === void 0 ? void 0 : _a.data.additionalFields;
    const FilterConfigObject = Object.assign({}, AddtionalFieldsObject);
    const keys = Object.keys(FilterConfigObject);
    let contentArray = [];
    const tempContent = content;
    filtersSelected === null || filtersSelected === void 0 ? void 0 : filtersSelected.map((item) => {
        const itemName = item.name;
        const filterSelectedArray = item.value;
        const fieldKey = keys.filter((item) => {
            return item.toLowerCase() === (itemName === null || itemName === void 0 ? void 0 : itemName.toLowerCase());
        });
        const fieldObj = FilterConfigObject[fieldKey[0]];
        const field = fieldObj === null || fieldObj === void 0 ? void 0 : fieldObj.field;
        tempContent === null || tempContent === void 0 ? void 0 : tempContent.map((item) => {
            if (item[field] !== undefined) {
                filterSelectedArray.map((ele) => {
                    if (item[field].includes(ele)) {
                        contentArray.push(item);
                    }
                });
            }
        });
    });
    return contentArray;
}
function isArray(item) {
    if (Array.isArray(item)) {
        return item[0];
    }
    else {
        return item;
    }
}
function CardFieldsRender(item, CardFieldsObject) {
    const FieldKeys = Object.keys(CardFieldsObject);
    let ObjectReturn = {};
    let tagsArray = [];
    FieldKeys.map((Field) => {
        if (item.hasOwnProperty(CardFieldsObject[Field].field)) {
            ObjectReturn[Field] = isArray(item[CardFieldsObject[Field].field]);
        }
        if (Field === 'tags') {
            const TagsFieldsArray = CardFieldsObject[Field].TagsFieldArray;
            TagsFieldsArray.map((tagField) => {
                if (item.hasOwnProperty(tagField))
                    tagsArray.push(isArray(item[tagField]));
            });
        }
    });
    ObjectReturn['tags'] = tagsArray;
    return ObjectReturn;
}
function TermsFetch(data, 
// setMasterFieldsTerms: Function,
FilterConfig) {
    const Categories = data.result.framework.categories;
    const TermsObject = {};
    Categories.map((item) => {
        var _a;
        const name = item.name;
        if ((_a = FilterConfig[0].data.PrimaryFields[name]) === null || _a === void 0 ? void 0 : _a.isEnabled) {
            const associations = item.terms[0].associations
                ? item.terms[0].associations
                : item.terms;
            associations.map((item) => {
                if (TermsObject.hasOwnProperty(item.category)) {
                    let tempArr = TermsObject[item.category].terms;
                    tempArr.push(item.name);
                    const newSet = new Set(tempArr);
                    TermsObject[item.category].terms = Array.from(newSet);
                }
                else {
                    TermsObject[item.category] = {
                        name: item.category,
                        terms: [item.name],
                    };
                }
            });
        }
    });
    return [TermsObject];
}
function MasterFieldContentChange(filtersArray, filterConfig, body) {
    const bodyJSON = JSON.parse(body);
    const TempObj = {};
    filtersArray.map((item) => {
        var _a;
        const itemName = item.name.toLowerCase();
        const configfiled = filterConfig.filter((fil) => {
            return fil.name.toLowerCase() === itemName;
        });
        TempObj[(_a = configfiled[0]) === null || _a === void 0 ? void 0 : _a.field] = item.value;
    });
    const keys = Object.keys(bodyJSON.request.filters);
    keys.map((item) => {
        if (TempObj[item] !== undefined) {
            bodyJSON.request.filters[item] = TempObj[item];
        }
    });
    return JSON.stringify(bodyJSON);
}
function DependentTermsFetch(thing, filters, filterOptions) {
    var _a;
    let obj = {};
    (_a = thing.result.framework.categories) === null || _a === void 0 ? void 0 : _a.map((item) => {
        filters === null || filters === void 0 ? void 0 : filters.map((filter) => {
            if (item.code.toLowerCase() === filter.name.toLowerCase()) {
                const arr = filter.value;
                item.terms.map((item) => {
                    if (arr.includes(item.name)) {
                        item.associations.map((item) => {
                            if (obj[item.category] === undefined) {
                                obj[item.category] = [item.name];
                            }
                            else {
                                // Concatenate the existing values with the new item's name
                                const concatenatedValues = obj[item.category].concat(item.name);
                                // Convert the concatenated values into a Set to remove duplicates
                                const uniqueValuesSet = new Set(concatenatedValues);
                                // Convert the Set back into an array using Array.from()
                                const uniqueValuesArray = Array.from(uniqueValuesSet);
                                obj[item.category] = uniqueValuesArray.sort();
                            }
                        });
                    }
                });
            }
        });
    });
    const Keys = Object.keys(filterOptions[0]);
    Keys.map((item) => {
        if (obj.hasOwnProperty(item)) {
            filterOptions[0][item].terms = obj[item];
        }
    });
    return filterOptions;
}
function FrameworksOptionsRender(Frameworks) {
    let options = [];
    Frameworks === null || Frameworks === void 0 ? void 0 : Frameworks.map((item) => {
        options.push(item.name);
    });
    return options;
}
function GetFrameWorkID(Frameworks, Framework) {
    let id = '';
    Frameworks === null || Frameworks === void 0 ? void 0 : Frameworks.map((item) => {
        if (item.name === Framework) {
            id = item.identifier;
        }
    });
    return id;
}

class WrapperComponent {
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

class FilteringModule {
}
FilteringModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FilteringComponent,
                    FiltersComponentComponent,
                    CardsComponentComponent,
                    WrapperComponent,
                ],
                imports: [BrowserModule, CommonModule],
                exports: [
                    FilteringComponent,
                    FiltersComponentComponent,
                    CardsComponentComponent,
                    WrapperComponent,
                ],
            },] }
];

/*
 * Public API Surface of filtering
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FilteringModule, FilteringComponent as ɵa, FiltersComponentComponent as ɵb, CardsComponentComponent as ɵc, WrapperComponent as ɵd };
//# sourceMappingURL=filtering-angular-package.js.map
