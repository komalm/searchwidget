import {
  ServiceFunctionCardProps,
  FilterDataExtractProps,
  RenderContentProps,
  UpdateConfigProps,
} from '../Interfaces/Service_Function_Interfaces';
export function UpdateConfig({
  apiData,
  setFilterConfig,
  addtionalFilterConfig,
  filterConfig,
}: UpdateConfigProps) {
  let TempData = apiData;
  if (filterConfig?.length !== 0) {
    filterConfig?.map((item) => {
      const ItemName = item.name;
      const ItemField = item.field;
      const ItemIsEnabled =
        item.isEnabled !== undefined ? item.isEnabled : true;
      TempData[0].data.PrimaryFields[ItemName] = {
        field: ItemField,
        isEnabled: ItemIsEnabled,
      };
    });
  }
  if (addtionalFilterConfig?.length !== 0) {
    addtionalFilterConfig?.map((item) => {
      const ItemName = item.name;
      const ItemField = item.field;
      const ItemIsEnabled =
        item.isEnabled !== undefined ? item.isEnabled : true;
      TempData[0].data.additionalFields[ItemName] = {
        displayName: ItemName,
        field: ItemField,
        isEnabled: ItemIsEnabled,
      };
    });
  }
  setFilterConfig(TempData);
  return TempData;
}

function isEnabled(filterConfig: any, itemName: string) {
  let isEnable = true;
  const Keys = Object.keys(filterConfig);
  Keys.map((item) => {
    if (item.toLowerCase() === itemName.toLowerCase()) {
      isEnable = filterConfig[item].isEnabled;
    }
  });
  return isEnable;
}

export function FilterDataExtract({
  content,
  filterConfig,
  TermsObject,
}: FilterDataExtractProps) {
  const AddtionalFieldsObject = filterConfig[0]?.data.additionalFields;
  const FilterConfigObject = {
    ...AddtionalFieldsObject,
  };
  let OptionNameArray: any = [];
  let OptionValueArray: any = [];
  if (filterConfig.length !== 0) {
    const AddtionalKeys = Object.keys(filterConfig[0]?.data.additionalFields);
    OptionNameArray = [...AddtionalKeys];
    OptionNameArray?.map((item: any) => {
      if (isEnabled(FilterConfigObject, item)) {
        let temp: any;
        if (TermsObject.hasOwnProperty(item)) {
          temp = TermsObject[item];
        } else {
          let fieldName = AddtionalFieldsObject[item]?.field;

          temp = new Set('');

          if (fieldName !== null || fieldName !== undefined) {
            content.map((item: any) => {
              if (item[fieldName] !== null || item[fieldName] !== undefined) {
                if (Array.isArray(item[fieldName])) {
                  item[fieldName].map((ele: string) => {
                    temp.add(ele);
                  });
                } else {
                  temp.add(item[fieldName]);
                }
              }
            });
          }
        }
        if (Array.isArray(temp)) {
          console.log('temp', temp.sort());

          if (temp.length !== 0)
            OptionValueArray.push({
              name: item,
              value: temp.sort(),
            });
        } else {
          const val = Array.from(temp);
          val.splice(val.length - 1, 1);
          if (val.length !== 0)
            OptionValueArray.push({
              name: item,
              value: val.sort(),
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

export function RenderContentFunction({
  content,
  filtersSelected,
  filterConfig,
  setRenderContentData,
}: RenderContentProps) {
  const AddtionalFieldsObject = filterConfig[0]?.data.additionalFields;
  const FilterConfigObject = {
    ...AddtionalFieldsObject,
  };
  const keys = Object.keys(FilterConfigObject);
  let contentArray: Array<any> = [];
  const tempContent = content;
  filtersSelected?.map((item: any) => {
    const itemName = item.name;
    const filterSelectedArray = item.value;
    const fieldKey = keys.filter((item) => {
      return item.toLowerCase() === itemName?.toLowerCase();
    });
    const fieldObj = FilterConfigObject[fieldKey[0]];
    const field = fieldObj?.field;
    tempContent?.map((item: any) => {
      if (item[field] !== undefined) {
        filterSelectedArray.map((ele: any) => {
          if (item[field].includes(ele)) {
            contentArray.push(item);
          }
        });
      }
    });
  });
  setRenderContentData(contentArray);
}

function isArray(item: any) {
  if (Array.isArray(item)) {
    return item[0];
  } else {
    return item;
  }
}

export function CardFieldsRender(item: any, CardFieldsObject: any) {
  const FieldKeys = Object.keys(CardFieldsObject);
  let ObjectReturn: ServiceFunctionCardProps = {};
  let tagsArray: Array<string> = [];
  FieldKeys.map((Field: string) => {
    if (item.hasOwnProperty(CardFieldsObject[Field].field)) {
      ObjectReturn[Field as keyof ServiceFunctionCardProps] = isArray(
        item[CardFieldsObject[Field].field]
      );
    }
    if (Field === 'tags') {
      const TagsFieldsArray = CardFieldsObject[Field].TagsFieldArray;
      TagsFieldsArray.map((tagField: string) => {
        if (item.hasOwnProperty(tagField))
          tagsArray.push(isArray(item[tagField]));
      });
    }
  });
  ObjectReturn['tags'] = tagsArray;
  return ObjectReturn;
}

export function TermsFetch(
  data: any,
  setMasterFieldsTerms: Function,
  FilterConfig?: any
) {
  const Categories = data.result.framework.categories;
  const TermsObject: any = {};
  Categories.map((item: any) => {
    const name = item.name;
    if (FilterConfig[0].data.PrimaryFields[name]?.isEnabled) {
      const associations = item.terms[0].associations
        ? item.terms[0].associations
        : item.terms;
      associations.map((item: any) => {
        if (TermsObject.hasOwnProperty(item.category)) {
          let tempArr = TermsObject[item.category as keyof any].terms;
          tempArr.push(item.name);
          const newSet = new Set(tempArr);
          TermsObject[item.category as keyof any].terms = Array.from(newSet);
        } else {
          TermsObject[item.category as keyof any] = {
            name: item.category,
            terms: [item.name],
          };
        }
      });
    }
  });
  setMasterFieldsTerms([TermsObject]);
}

export function MasterFieldContentChange(
  filtersArray: any,
  filterConfig: any,
  body: string,
  setFilter: Function
) {
  const bodyJSON = JSON.parse(body);
  const TempObj: any = {};

  filtersArray.map((item: any) => {
    const itemName = item.name.toLowerCase();
    const configfiled = filterConfig.filter((fil: any) => {
      return fil.name.toLowerCase() === itemName;
    });
    TempObj[configfiled[0]?.field] = item.value;
  });
  const keys = Object.keys(bodyJSON.request.filters);
  keys.map((item: any) => {
    if (TempObj[item] !== undefined) {
      bodyJSON.request.filters[item] = TempObj[item];
    }
  });
  setFilter(JSON.stringify(bodyJSON));
}

export function DependentTermsFetch(
  thing: any,
  filters: any,
  filterOptions: any
) {
  let obj: any = {};
  thing.result.framework.categories?.map((item: any) => {
    filters.map((filter: any) => {
      if (item.code.toLowerCase() === filter.name.toLowerCase()) {
        const arr = filter.value;
        item.terms.map((item: any) => {
          if (arr.includes(item.name)) {
            item.associations.map((item: any) => {
              if (obj[item.category] === undefined) {
                obj[item.category] = [item.name];
              } else {
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
  Keys.map((item: any) => {
    if (obj.hasOwnProperty(item)) {
      filterOptions[0][item].terms = obj[item];
    }
  });
  return filterOptions;
}

export function FrameworksOptionsRender(Frameworks: Array<any>) {
  let options: Array<string> = [];
  Frameworks?.map((item: any) => {
    options.push(item.name);
  });
  return options;
}

export function GetFrameWorkID(Frameworks: Array<any>, Framework: string) {
  let id: string = '';
  Frameworks?.map((item: any) => {
    if (item.name === Framework) {
      id = item.identifier;
    }
  });
  return id;
}
