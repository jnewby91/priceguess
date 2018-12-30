import React from 'react'; 
import {shallow, mount} from 'enzyme'; 

import Scoreboard  from './scoreboard'; 

describe('<Scoreboard />', () => {
    it('Renders without crashing', () => {
        shallow(<Scoreboard />);
    })
})