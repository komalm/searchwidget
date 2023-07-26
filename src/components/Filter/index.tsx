import React from 'react';
import { styled } from 'styled-components';
import { Select } from './Select';

export interface FilterProps {
    options?: Array<string>;
    styles?: {};
    optionName?: string;
}

const MainDiv = styled.div`
  background: #e9e8d9;
  padding: 10px 20px;
  width: max-content;
  border-radius: 10px;
`;

export const Filter = ({ options, styles, optionName }: FilterProps) => {
    return (
        <MainDiv>
            <Select options={options} styles={styles} optionName={optionName} />
        </MainDiv>
    );
};