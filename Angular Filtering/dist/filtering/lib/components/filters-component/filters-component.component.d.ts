import { OnInit, EventEmitter } from '@angular/core';
import { FiltersArraySelectedOptionObject } from '../../Interfaces/interfaces';
export declare class FiltersComponentComponent implements OnInit {
    Show: string;
    Data: string;
    FiltersArrayEvent: EventEmitter<FiltersArraySelectedOptionObject[]>;
    AddFilterNumberEvent: EventEmitter<number[]>;
    FiltersArray: Array<FiltersArraySelectedOptionObject>;
    Selected: Array<FiltersArraySelectedOptionObject>;
    AddFilterNumber: Array<number>;
    Name: string;
    OptionValue: Array<string>;
    FilterConfig: Array<any>;
    AddtionalFilterConfig: Array<any>;
    AllFiltersArray: Array<any>;
    OptionOb: Array<{
        name: string;
        Options: boolean;
    }>;
    getOptionStatus(a: string): boolean;
    OptionsShow(a: string): boolean;
    isSelected(optionName: string): boolean;
    CheckIfOptionPresent(optionName: string, option: string): boolean;
    CheckIfOptionPresentNew(optionName: string): boolean;
    OptionNamePresent(optionName: string, itemarg: any): boolean;
    Reset(): void;
    Check: any;
    IsSingleSelect(OptionName: string): boolean;
    addFilter(OptionName: string, OptionValue: string): void;
    OptionShowHide(): void;
    ngOnInit(): void;
}
