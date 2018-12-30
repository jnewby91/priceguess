import React from 'react'; 
import {shallow, mount} from 'enzyme'; 

import PriceChoice  from './priceChoice'; 

describe('<PriceChoice />', () => {
    it('Renders without crashing', () => {
        shallow(<PriceChoice />);
    })
})