import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import './index.css';
import { createBrowserHistory } from "history";

  
class App extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <Body/>
            </div>
        );
    }
}
const history = createBrowserHistory();
ReactDOM.render(
    <BrowserRouter history={history}>
        <App />
    </BrowserRouter>
    ,
    document.getElementById('root')
);
  