import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { fetchCatList, fetchCategoryList } from '../actions';
import { Link } from 'react-router-dom';

class AllCategories extends Component {
  render() {
    const { cats=[], categories=[] } = this.props;
    return (
      <div className="App">
        <div className="category-list">
          <div>All Categories</div>
          {
           categories.map((category, index) => 
            <div key={index} className="item">
              <Link to={`/cat/${category.code}`}>{category.name}</Link>
            </div>
           ) 
          }
        </div>
        <div className="cat-list">
          {
           cats.map((cat, index) => 
            <div key={index} className="item">
              <Link to={`/catdetails/${cat.code}`}>
                <img src={cat.image} alt="cat looking at you" />
              </Link>
            </div>
           ) 
          }
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.props.fetchCatList();
    this.props.fetchCategoryList();
  }
}

function mapStateToProps(state) {
  const { catList={}, categoryList={} } = state;
  const { items:cats=[] } = catList;
  const { items:categories=[] } = categoryList;
  return {
    cats,
    categories
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchCatList: () => {
      dispatch(fetchCatList());
    },
    fetchCategoryList: () => {
      dispatch(fetchCategoryList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCategories);