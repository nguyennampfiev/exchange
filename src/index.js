import React  from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import { HashRouter as Router, Route } from 'react-router-dom';

injectTapEventPlugin();
ReactDOM.render(
       <Table />
    , document.getElementById('app')
);