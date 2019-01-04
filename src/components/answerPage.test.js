import React from 'react'; 
import {shallow} from 'enzyme'; 

import AnswerPage from './answerPage'; 

describe('<AnswerPage />', () => {
    it('Renders without crashing', () => {
        shallow(<AnswerPage />);
    })
})