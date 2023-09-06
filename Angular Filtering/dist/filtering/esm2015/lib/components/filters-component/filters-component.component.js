import { Component, Input, Output, EventEmitter } from '@angular/core';
export class FiltersComponentComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVycy1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZmlsdGVyaW5nL3NyYy9saWIvY29tcG9uZW50cy9maWx0ZXJzLWNvbXBvbmVudC9maWx0ZXJzLWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVEvRSxNQUFNLE9BQU8seUJBQXlCO0lBTHRDO1FBTUUsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNULFNBQUksR0FBVyxFQUFFLENBQUM7UUFDakIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBRTNDLENBQUM7UUFDTSx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUNuRSxpQkFBWSxHQUE0QyxFQUFFLENBQUM7UUFDM0QsYUFBUSxHQUE0QyxFQUFFLENBQUM7UUFDdkQsb0JBQWUsR0FBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUNoQyxpQkFBWSxHQUFlLEVBQUUsQ0FBQztRQUM5QiwwQkFBcUIsR0FBZSxFQUFFLENBQUM7UUFDdkMsb0JBQWUsR0FBZSxFQUFFLENBQUM7UUFFMUMsYUFBUSxHQUE4QyxFQUFFLENBQUM7UUFzRXpELFVBQUssR0FBUSxFQUFFLENBQUM7SUFzRWxCLENBQUM7SUExSUMsZUFBZSxDQUFDLENBQVM7O1FBQ3ZCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNqQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQ3BELENBQUM7UUFD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QUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLFNBQVM7b0JBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUM7d0JBQ1AsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3dCQUNmLE9BQU8sRUFBRSxLQUFLO3FCQUNmLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7WUFqS0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLGtoREFBaUQ7O2FBRWxEOzs7bUJBR0UsS0FBSztnQ0FDTCxNQUFNO21DQUdOLE1BQU07bUJBS04sS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7b0NBQ0wsS0FBSzs4QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyc0FycmF5U2VsZWN0ZWRPcHRpb25PYmplY3QgfSBmcm9tICcuLi8uLi9JbnRlcmZhY2VzL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZmlsdGVycy1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsdGVycy1jb21wb25lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWx0ZXJzLWNvbXBvbmVudC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlcnNDb21wb25lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBTaG93OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgRGF0YTogc3RyaW5nID0gJyc7XG4gIEBPdXRwdXQoKSBGaWx0ZXJzQXJyYXlFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgQXJyYXk8RmlsdGVyc0FycmF5U2VsZWN0ZWRPcHRpb25PYmplY3Q+XG4gID4oKTtcbiAgQE91dHB1dCgpIEFkZEZpbHRlck51bWJlckV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxudW1iZXI+PigpO1xuICBGaWx0ZXJzQXJyYXk6IEFycmF5PEZpbHRlcnNBcnJheVNlbGVjdGVkT3B0aW9uT2JqZWN0PiA9IFtdO1xuICBTZWxlY3RlZDogQXJyYXk8RmlsdGVyc0FycmF5U2VsZWN0ZWRPcHRpb25PYmplY3Q+ID0gW107XG4gIEFkZEZpbHRlck51bWJlcjogQXJyYXk8bnVtYmVyPiA9IFswXTtcblxuICBASW5wdXQoKSBOYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgT3B0aW9uVmFsdWU6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgQElucHV0KCkgRmlsdGVyQ29uZmlnOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIEFkZHRpb25hbEZpbHRlckNvbmZpZzogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKSBBbGxGaWx0ZXJzQXJyYXk6IEFycmF5PGFueT4gPSBbXTtcblxuICBPcHRpb25PYjogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IE9wdGlvbnM6IGJvb2xlYW4gfT4gPSBbXTtcblxuICBnZXRPcHRpb25TdGF0dXMoYTogc3RyaW5nKSB7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5PcHRpb25PYi5maW5kSW5kZXgoXG4gICAgICAob2JqKSA9PiBvYmoubmFtZS50b0xvd2VyQ2FzZSgpID09PSBhLnRvTG93ZXJDYXNlKClcbiAgICApO1xuICAgIHJldHVybiB0aGlzLk9wdGlvbk9iW2lkeF0/Lk9wdGlvbnM7XG4gIH1cbiAgT3B0aW9uc1Nob3coYTogc3RyaW5nKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLk9wdGlvbk9iLmZpbmRJbmRleChcbiAgICAgIChvYmopID0+IG9iai5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGEudG9Mb3dlckNhc2UoKVxuICAgICk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5PcHRpb25PYltpbmRleF0uT3B0aW9ucyA9ICF0aGlzLk9wdGlvbk9iW2luZGV4XS5PcHRpb25zO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5PcHRpb25PYltpbmRleF0uT3B0aW9ucyA/IHRoaXMuT3B0aW9uT2JbaW5kZXhdLk9wdGlvbnMgOiBmYWxzZTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQob3B0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgbGV0IGZsYWcgPSB0cnVlO1xuICAgIHRoaXMuRmlsdGVyc0FycmF5Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gb3B0aW9uTmFtZS50b0xvd2VyQ2FzZSgpICYmXG4gICAgICAgIGl0ZW0udmFsdWUubGVuZ3RoICE9PSAwXG4gICAgICApIHtcbiAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmbGFnO1xuICB9XG5cbiAgQ2hlY2tJZk9wdGlvblByZXNlbnQob3B0aW9uTmFtZTogc3RyaW5nLCBvcHRpb246IHN0cmluZykge1xuICAgIGxldCBmbGFnID0gZmFsc2U7XG4gICAgdGhpcy5GaWx0ZXJzQXJyYXkubWFwKChpdGVtKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpID09PSBvcHRpb25OYW1lLnRvTG93ZXJDYXNlKCkgJiZcbiAgICAgICAgaXRlbS52YWx1ZS5pbmNsdWRlcyhvcHRpb24pXG4gICAgICApIHtcbiAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZsYWc7XG4gIH1cblxuICBDaGVja0lmT3B0aW9uUHJlc2VudE5ldyhvcHRpb25OYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xuICAgIHRoaXMuRmlsdGVyc0FycmF5Py5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gb3B0aW9uTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmbGFnO1xuICB9XG5cbiAgT3B0aW9uTmFtZVByZXNlbnQob3B0aW9uTmFtZTogc3RyaW5nLCBpdGVtYXJnOiBhbnkpIHtcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xuICAgIHRoaXMuRmlsdGVyc0FycmF5Py5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG9wdGlvbk5hbWUudG9Mb3dlckNhc2UoKSAmJlxuICAgICAgICBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gaXRlbWFyZy5uYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICkge1xuICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmxhZztcbiAgfVxuXG4gIFJlc2V0KCkge1xuICAgIHRoaXMuRmlsdGVyc0FycmF5ID0gW107XG4gIH1cbiAgQ2hlY2s6IGFueSA9IFtdO1xuICBJc1NpbmdsZVNlbGVjdChPcHRpb25OYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xuICAgIHRoaXMuRmlsdGVyQ29uZmlnLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICBpZiAoaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IE9wdGlvbk5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBpZiAoaXRlbS5TZWxlY3RUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZsYWc7XG4gIH1cblxuICBhZGRGaWx0ZXIoT3B0aW9uTmFtZTogc3RyaW5nLCBPcHRpb25WYWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuQ2hlY2tJZk9wdGlvblByZXNlbnROZXcoT3B0aW9uTmFtZSkpIHtcbiAgICAgIHRoaXMuRmlsdGVyc0FycmF5Py5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuT3B0aW9uTmFtZVByZXNlbnQoT3B0aW9uTmFtZSwgaXRlbSkpIHtcbiAgICAgICAgICBpZiAoaXRlbS52YWx1ZS5pbmNsdWRlcyhPcHRpb25WYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld2FyciA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpbmRleG9mT3B0aW9uID0gaXRlbS52YWx1ZS5pbmRleE9mKE9wdGlvblZhbHVlKTtcbiAgICAgICAgICAgIG5ld2Fyci5zcGxpY2UoaW5kZXhvZk9wdGlvbiwgMSk7XG4gICAgICAgICAgICBpdGVtLnZhbHVlID0gbmV3YXJyO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWl0ZW0udmFsdWUuaW5jbHVkZXMoT3B0aW9uVmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgb2xkQXJyID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgIG9sZEFyci5wdXNoKE9wdGlvblZhbHVlKTtcbiAgICAgICAgICAgIGl0ZW0udmFsdWUgPSBvbGRBcnI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5GaWx0ZXJzQXJyYXkgPSBbXG4gICAgICAgIC4uLnRoaXMuRmlsdGVyc0FycmF5LFxuICAgICAgICB7IG5hbWU6IE9wdGlvbk5hbWUsIHZhbHVlOiBbT3B0aW9uVmFsdWVdIH0sXG4gICAgICBdO1xuICAgIH1cbiAgICBjb25zdCBsYXN0SWR4ID0gdGhpcy5BZGRGaWx0ZXJOdW1iZXIubGVuZ3RoO1xuICAgIHRoaXMuQWRkRmlsdGVyTnVtYmVyLnB1c2godGhpcy5BZGRGaWx0ZXJOdW1iZXJbbGFzdElkeCAtIDFdICsgMSk7XG4gICAgdGhpcy5BZGRGaWx0ZXJOdW1iZXJFdmVudC5lbWl0KHRoaXMuQWRkRmlsdGVyTnVtYmVyKTtcbiAgICB0aGlzLkNoZWNrID0gWy4uLnRoaXMuQ2hlY2ssIC4uLnRoaXMuRmlsdGVyc0FycmF5XTtcbiAgICB0aGlzLkZpbHRlcnNBcnJheUV2ZW50LmVtaXQodGhpcy5GaWx0ZXJzQXJyYXkpO1xuICB9XG5cbiAgT3B0aW9uU2hvd0hpZGUoKSB7XG4gICAgbGV0IGFycjogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IE9wdGlvbnM6IGJvb2xlYW4gfT4gPSBbXTtcbiAgICBpZiAodGhpcy5GaWx0ZXJDb25maWcubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLkZpbHRlckNvbmZpZy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICBPcHRpb25zOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuQWRkdGlvbmFsRmlsdGVyQ29uZmlnLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhpcy5BZGR0aW9uYWxGaWx0ZXJDb25maWcubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmlzRW5hYmxlZClcbiAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBPcHRpb25zOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLk9wdGlvbk9iID0gYXJyO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5PcHRpb25TaG93SGlkZSgpO1xuICB9XG59XG4iXX0=