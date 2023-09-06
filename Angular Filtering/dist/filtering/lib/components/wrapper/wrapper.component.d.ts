import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class WrapperComponent implements OnInit, OnChanges {
    content: Array<{
        [key: string]: any;
    }>;
    FilterConfig: Array<any>;
    AddtionalFilterConfig: Array<any>;
    ApiSettedFilterConfig: Array<any>;
    FilterOptionsData: Array<{
        [key: string]: any;
    }>;
    tags: Array<string>;
    OriginalMasterKeys: Array<string>;
    DependentTermsData: Array<object>;
    MasterFields: Array<{
        [key: string]: any;
    }>;
    MasterKeys: Array<string>;
    CardDataObj: {
        [key: string]: any;
    };
    CardsData: Array<object>;
    PrevFilterAddNumber: Array<number>;
    FrameworksOptionArray: Array<any>;
    FilterOptionNameArray: Array<string>;
    Change: number;
    FilterAddNumber: Array<number>;
    FiltersArray: Array<any>;
    Framework: string;
    FrameworksArray: Array<any>;
    hostname: string;
    FormAPI: {
        url: string;
        headers?: object;
        method: string;
        body?: string;
        cache?: 'default' | 'no-store' | 'reload' | 'force-cache' | 'only-if-cached' | 'no-cache';
    };
    CardsFieldConfig: {
        [key: string]: any;
    };
    SearchAPI: {
        url: string;
        headers?: object;
        method: string;
        body?: string;
        cache?: 'default' | 'no-store' | 'reload' | 'force-cache' | 'only-if-cached' | 'no-cache';
    };
    FilterBodySet: any;
    TermsAPI: {
        url: string;
        headers?: object;
        method: string;
        body?: string;
        cache?: 'default' | 'no-store' | 'reload' | 'force-cache' | 'only-if-cached' | 'no-cache';
    };
    FetchAndUpdateFilterConfig(): void;
    DependentFieldsRender(): void;
    FrameWorksFetch(): void;
    MasterBodyContentChange(): void;
    FiltersContentRender(): void;
    FilterDataRender(): {
        OptionNameArray: any;
        OptionValueArray: any;
    };
    AddtionalContent: any;
    RenderContentAddtionalFilter(): void;
    AdditionalOptionValueReturn(Key: string): string[];
    CardsFieldCheck(field: string, item: any): any;
    constructor();
    AllOptions: any;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    IsAddtionalFilter(Name: string): boolean;
    AllFiltersArray: any;
    LOG(a: any): void;
}
