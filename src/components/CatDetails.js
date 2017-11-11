import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { fetchCatDetails } from '../actions';

class CatDetails extends Component {

  goBack = () =>{
    window.history.back();
  }
  render() {
    const { cats=[] } = this.props;
    return (
      <div className="App">
        <div className="cat-details-page">
          <div className="back-button" onClick={this.goBack}>Click to Go Back</div>

          <div className="cat-details">
            {
             cats.map((cat, index) => 
              <div key={index} className="item">
                <img src={cat.image} alt="cat looking at you"/>
                <div className="cat-other-details">
                  <div>
                    <label>Name: </label>
                    <span>{cat.name}</span>
                  </div>
                  <div>
                    <label>Type: </label>
                    <span>{cat.categoryName}</span>
                  </div>
                  <div>
                    <label>Date Of Birth: </label>
                    <span>{cat.dateOfBirth}</span>
                  </div>
                  <div>
                    <label>Hobbies: </label>
                    <span>{cat.hobbies}</span>
                  </div>
                </div>
              </div>
             ) 
            }
          </div>
        </div>
      </div>
    );
  }
   componentDidMount(){
    this.props.fetchCatDetails();
  }
}

function mapStateToProps(state, ownProps) {
	const { match={} } = ownProps;
	const { params={} } = match;
	const { id } = params;
	const { catDetails={} } = state;
	const { items=[] } = catDetails;
	const cats = items.filter((item) => {
		return item.code === id;
	});
	return {
		cats
	}
}
function mapDispatchToProps(dispatch){
  return {
    fetchCatDetails: () => {
      dispatch(fetchCatDetails());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatDetails);