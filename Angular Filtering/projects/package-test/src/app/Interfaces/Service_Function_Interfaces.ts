interface FilterConfigProps {
  name: string;
  field: string;
  isEnabled?: boolean;
}

export interface UpdateConfigProps {
  apiData: Array<any>;
  setFilterConfig: Function;
  filterConfig: Array<FilterConfigProps> | undefined;
  addtionalFilterConfig?: Array<FilterConfigProps> | undefined;
}
export interface FilterDataExtractProps {
  content: Array<object>;
  filterConfig: Array<any>;
  TermsObject: any;
}
export interface ServiceFunctionCardProps {
  name?: string;
  image?: string;
  subject?: string;
  type?: string;
  publisher?: string;
  tags?: Array<string>;
}
export interface RenderContentProps {
  content: Array<object>;
  filtersSelected: Array<any>;
  setRenderContentData: Function;
  RenderContent: Array<ServiceFunctionCardProps>;
  filterConfig: Array<any>;
}
export interface apiProps {
  headers?: {};
  body?: string;
  url: string;
  method?: string;
  cache:
    | 'default'
    | 'no-store'
    | 'reload'
    | 'force-cache'
    | 'only-if-cached'
    | 'no-cache';
}
