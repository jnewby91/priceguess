import React from 'react'; 
import {shallow, mount} from 'enzyme'; 

import ItemDescription  from './itemDescription'; 

describe('<ItemDescription />', () => {
    it('Renders without crashing', () => {
        shallow(<ItemDescription />);
    })
})