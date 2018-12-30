import React from 'react'; 
import {shallow, mount} from 'enzyme'; 

import FeaturedTable  from './featuredTable'; 

describe('<FeaturedItems/>', () => {
    it('Renders without crashing', () => {
        shallow(<FeaturedTable />);
    })
})