import React, { useState } from 'react';
import { styled } from 'styled-components';
export interface SelectProps {
    styles?: {};
    options?: Array<string>;
    optionName?: string;
}

export const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px;
  border-radius: 15px;
  width: 20rem;
  background-color: white;
  cursor: pointer;
  color: darkblue;
`;

const OptionsDiv = styled.div`
  flex-direction: column;
  position: absolute;
  margin-top: 4px;
  width: 19%;
  color: darkblue;
  border-radius: 10px;
  background: white;
  padding: 10px 20px;
  z-index: 999;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: darkblue;
  margin: 5px 5px;
`;

export const Select = ({ options, styles, optionName }: SelectProps) => {
    const [show, setshow] = useState(false);
    const [selected, setSelected] = useState<Array<string>>([]);

    const FilterAdd = (option: string) => {
        setSelected([...selected, option]);
        if (selected.indexOf(option) !== -1) {
            const newarr = selected.filter(item => {
                return item !== option;
            });
            console.log('Yes');

            setSelected(newarr);
        }
    };

    // const CheckedORnot = (option: string) => {
    //   if (selected.indexOf(option) !== -1) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };

    return (
        <div>
            <div style={styles}>
                <h4 style={{ color: '#000000', marginBottom: '5px' }}>{optionName}</h4>
                <SelectDiv onClick={() => setshow(!show)}>
                    {selected.length === 0
                        ? 'Select'
                        : selected.map((item, idx) => <Text key={idx + 1}>{item}</Text>)}
                </SelectDiv>
                <div>
                    <OptionsDiv style={{ display: `${show ? 'flex' : 'none'}` }}>
                        {options?.map((option, idx) => (
                            <div key={idx + 1} onClick={() => FilterAdd(option)}>
                                <Text style={{ cursor: 'pointer' }}>{option}</Text>
                            </div>
                        ))}
                    </OptionsDiv>
                </div>
            </div>
        </div>
    );
};