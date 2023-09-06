import { OnInit } from '@angular/core';
export declare class FilteringComponent implements OnInit {
    constructor();
    hostname: string;
    AddtionalFilterConfig: Array<{
        name: string;
        field: string;
        isEnabled: boolean;
    }>;
    FilterConfig: Array<{
        name: string;
        field: string;
        isEnabled: boolean;
    }>;
    CardsFieldsObject: {
        name?: {
            field: string;
        };
        type?: {
            field: string;
        };
        tags?: {
            TagsFieldArray: Array<string>;
        };
        image?: {
            field: string;
        };
        publisher?: {
            field: string;
        };
        subject?: {
            field: string;
        };
    };
    FormAPI: {
        url: string;
        headers?: object;
        method: string;
        body?: string;
        cache?: 'default' | 'no-store' | 'reload' | 'force-cache' | 'only-if-cached' | 'no-cache';
    };
    SearchAPI: {
        url: string;
        headers?: object;
        method: string;
        body?: string;
        cache?: 'default' | 'no-store' | 'reload' | 'force-cache' | 'only-if-cached' | 'no-cache';
    };
    TermsAPI: {
        url: string;
        headers?: object;
        method: string;
        body?: string;
        cache?: 'default' | 'no-store' | 'reload' | 'force-cache' | 'only-if-cached' | 'no-cache';
    };
    GetDefaultChannel: {
        url: string;
        headers?: object;
        method: string;
        body?: string;
        cache?: 'default' | 'no-store' | 'reload' | 'force-cache' | 'only-if-cached' | 'no-cache';
    };
    GetChannelAPI: {
        headers?: object;
        method: string;
        body?: string;
        cache?: 'default' | 'no-store' | 'reload' | 'force-cache' | 'only-if-cached' | 'no-cache';
    };
    Frameworks: any;
    private DefaultChannelID;
    ngOnInit(): void;
    GetChannelFrameworks(): void;
}
