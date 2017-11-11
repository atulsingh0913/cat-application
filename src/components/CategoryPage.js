import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { fetchCatList } from '../actions';
import { Link } from 'react-router-dom';

class CategoryPage extends Component {

  goBack = () =>{
    window.history.back();
  }

  render() {
    const { cats=[] } = this.props;

    return (
      <div className="App">
        <div className="category-page">
          <div className="category-name">{this.props.id}</div>
          <div className="back-button" onClick={this.goBack}>Click to Go Back</div>
          <div className="cat-list">
            {
             cats.map((cat, index) => 
              <div key={index} className="item">
                <Link to={`/catdetails/${cat.code}`}>
                  <img src={cat.image} alt="cat looking at you"/>
                </Link>
              </div>
             ) 
            }
          </div>
        </div>
      </div>
    );
  }
   componentDidMount(){
    this.props.fetchCatList();
  }
}

function mapStateToProps(state, ownProps) {
	const { match={} } = ownProps;
	const { params={} } = match;
	const { id } = params;
	const { catList={} } = state;
	const { items=[] } = catList;
	const cats = items.filter((item) => {
		return item.type === id;
	});

	return {
		cats,
    id
  }
}
function mapDispatchToProps(dispatch){
  return {
    fetchCatList: () => {
      dispatch(fetchCatList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);