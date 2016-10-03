import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,hashHistory} from 'react-router';

import Apperal from './apperal';
import data from '../data.js';



var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1 id="items">Products</h1>
        {this.props.children}
      </div>
    )
  }
});

ReactDOM.render(
<Router history={hashHistory}>
	<Route path="/" component={App}/>
	<Route path="/apperal" component={Apperal}/>
</Router>,
  document.getElementById('root')
);


