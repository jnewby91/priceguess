import React from 'react'; 
import {shallow, mount} from 'enzyme'; 

import ItemImage  from './itemImage'; 

describe('<ItemImage />', () => {
    it('Renders without crashing', () => {
        shallow(<ItemImage />);
    })
})