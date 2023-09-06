import { ServiceFunctionCardProps, FilterDataExtractProps, RenderContentProps, UpdateConfigProps } from '../Interfaces/Service_Function_Interfaces';
export declare function UpdateConfig({ apiData, addtionalFilterConfig, filterConfig, }: UpdateConfigProps): any[];
export declare function FilterDataExtract({ content, filterConfig, TermsObject, }: FilterDataExtractProps): {
    OptionNameArray: any;
    OptionValueArray: any;
};
export declare function RenderContentFunction({ content, filtersSelected, filterConfig, }: RenderContentProps): any[];
export declare function CardFieldsRender(item: any, CardFieldsObject: any): ServiceFunctionCardProps;
export declare function TermsFetch(data: any, FilterConfig?: any): any[];
export declare function MasterFieldContentChange(filtersArray: any, filterConfig: any, body: string): string;
export declare function DependentTermsFetch(thing: any, filters: any, filterOptions: any): any;
export declare function FrameworksOptionsRender(Frameworks: Array<any>): string[];
export declare function GetFrameWorkID(Frameworks: Array<any>, Framework: string): string;
