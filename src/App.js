import React from 'react';
import ReactDOM from 'react-dom';
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
<App/>,
document.getElementById('root')
);


