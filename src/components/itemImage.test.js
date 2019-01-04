import React from 'react'; 
import {shallow} from 'enzyme'; 

import ItemImage  from './itemImage'; 

describe('<ItemImage />', () => {
    it('Renders without crashing', () => {
        shallow(<ItemImage />);
    })
})