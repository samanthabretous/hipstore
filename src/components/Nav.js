import React from 'react'
import {Link} from 'react-router'
import data from '../data'

const Nav = React.createClass({
  getInitialState(){
    return {
      itemName: ''
    }
  },
  handleChange(event){
    this.setState({itemName: event.target.value})
    this.props.onChange(this.state.itemName)
  },
  handleReset: function (event){
    this.props.openModal();
    if(event.key === "Backspace"){
      this.props.onReset()
    }
  },
  render: function() {
    var links = Object.keys(data).map(function(category, i){
      return (

        <li key={i} className="nav-item pull-right">
          <Link to={"/category/" + category}>{category.toUpperCase()}</Link>
        </li>
      )
    })
    return (
      <nav className="navbar navbar-fixed-top">
        <div className="container-fluid">
        <p className="navbar-brand col-xs-4"><Link to="/">hipstore</Link></p>
        <form className="navbar-form pull-right col-xs-2">
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search"
              onChange={this.handleChange}
              onKeyDown={this.handleReset} />
          </div>
        </form>
        <ul className="nav navbar-nav col-xs-4 pull-right text-center">
          {links}
        </ul>
        </div>
      </nav>
    )
  }
})

export default Nav