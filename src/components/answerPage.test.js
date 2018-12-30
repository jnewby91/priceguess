import React from 'react'; 
import {shallow, mount} from 'enzyme'; 

import AnswerPage from './answerPage'; 

describe('<AnswerPage />', () => {
    it('Renders without crashing', () => {
        shallow(<AnswerPage />);
    })
})