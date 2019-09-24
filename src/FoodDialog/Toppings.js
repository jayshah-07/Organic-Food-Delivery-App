import styled from 'styled-components';
import React from 'react';

const ToppingGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const ToppingCheckbox = styled.input `
    margin-right: 10px;
    cursor: pointer;
`;

const CheckboxLabel = styled.label `
    cursor: pointer;
`
export function Toppings({toppings, checkTopping}) {
    return (<ToppingGrid>
        {toppings.map((topping, i) => (<CheckboxLabel>
            <ToppingCheckbox type="checkbox"
                             checked={topping.checked} 
                             onClick={() => {
                                checkTopping(i);
            }} />
            {topping.name}
        </CheckboxLabel>))}
    </ToppingGrid>)
}