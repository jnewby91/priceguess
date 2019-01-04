import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import store from './store'; 
import {Provider} from 'react-redux'; 
import App from './App';
import  GamePage from './components/gameboard';
import AnswerPage from './components/answerPage';
import Feedback from './components/feedback';
import FeaturedItems from './components/featuredItems';
import Instructions from './components/instructions';

ReactDOM.render(
<Router>
    <div>
       <Provider store={store}> 
            <Route exact path='/' component={App}/>
            <Route path='/gamepage'component={GamePage}  />
            <Route path='/answerpage'component={AnswerPage}/>
            <Route path='/feedback'component={Feedback}/>
            <Route path='/featureditems'component={FeaturedItems}/>
            <Route path='/instructions'component={Instructions}/>
        </Provider>

    </div>
</Router>
, document.getElementById('root'));

