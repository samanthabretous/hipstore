import React from 'react';
import {Link} from 'react-router';


const DisplayProduct = React.createClass({
  render: function(){
    if(this.props.category=== undefined){
      var category = "tech"
    }
    return (
      <article className="modal1">
        <Link to={"/category/" + category + "/" + this.props.itemName }><img className="modalImage" src={this.props.src} /></Link>
        <p>{this.props.itemName}</p>
      </article>
    )
  }
})


export default DisplayProduct;