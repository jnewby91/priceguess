import React from 'react'; 
import {shallow, mount} from 'enzyme'; 

import FeaturedItems from './featuredItems'; 

describe('<FeaturedItems/>', () => {
    it('Renders without crashing', () => {
        shallow(<FeaturedItems />);
    })
})