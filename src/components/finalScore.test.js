import React from 'react'; 
import {shallow, mount} from 'enzyme'; 

import FinalScore  from './finalscore'; 

describe('<FinalScore />', () => {
    it('Renders without crashing', () => {
        shallow(<FinalScore />);
    })
})