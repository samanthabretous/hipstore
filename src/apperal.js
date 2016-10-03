import React from 'react';
import data from '../data';

var Apperal = React.createClass({
	getInitialState:function(){
		return {data:null}
	},
	ComponentDidMount:function(){
		this.setState({data:data.getApperal()})
		console.log(data.getApperal());
	},
	render:function(){
		return (
		<div> 
		<center>
		<h1>Apperal</h1>
		
			<button>
			<span id="quantity">Qty:1</span>
			</button>
			<button id="bag">Add To Bag</button>

		</center>
		</div>

		)
	}

});

export default Apperal;


// getInitialState:function(){
// 		return {data:null}
// 	},

// 	ComponentDidMount:function(){
// 		this.setState({data:data.getApperal()})
// 		console.log(data.getApperal());
// 	},
