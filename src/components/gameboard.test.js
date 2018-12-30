import React from 'react'; 
import {shallow, mount} from 'enzyme'; 

import Gameboard  from './gameboard'; 

describe('<Gameboard />', () => {
    it('Renders without crashing', () => {
        shallow(<Gameboard />);
    })
})