import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


//components 
import Nav from './components/Nav'
import Footer from './components/Footer'
import FoundError from './FoundError'
import HomePage from './HomePage'
import CategoryPage from './CategoryPage'
import ProductPage from './ProductPage'
import data from './data'

var App = React.createClass({

  getInitialState(){
    return {data: data, listOfItems: '', filteredList: '', modalIsOpen: false, closeModal: this.closeModal }
  },

  componentDidMount(){

    //create a list of all data items
    var listOfItems = []
    Object.keys(data).map(function(category){
      return data[category].map(function(item){
          listOfItems.push(item.name.toLowerCase())
      })
    })
    this.setState({listOfItems: listOfItems, filteredList: listOfItems})
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  handleItemSearch(item){
    function sameLetters(filteredListItem) {
      if(filteredListItem.indexOf(item) !== -1){
        return filteredListItem
      }
    }
    var searchItems = this.state.filteredList.filter(
    sameLetters)
    
    this.setState({filteredList: searchItems})
  },
  handleSearchReset: function() {
    this.setState({filteredList: this.state.listOfItems})
  },

  render() {
    //loop over all the children routes and pass them propTypes
    var that = this
    var children = React.Children.map(this.props.children, function(child) {
        return React.cloneElement(child, Object.assign({}, that.state));
    });
    return (
      <div>
        <Nav onChange={this.handleItemSearch} onReset={this.handleSearchReset} openModal={this.openModal}/>
        {children}
        <Footer />
      </div>
    )
  }
})


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/category/:category" component={CategoryPage} />
      <Route path="/category/:category/:product" component={ProductPage} />
    </Route> 
    <Route path="*" component={FoundError} />
  </Router>,
  document.getElementById('root')
);
