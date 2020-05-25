import React from 'react';
import ReactDOM from 'react-dom';
//import the Link component to use for linking prop information
import { Link } from 'react-router-dom';

// define one single dish card component
class Dish extends React.Component {
  render() {
    return (
      <div className="column is-3" style={{ padding: "10px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Dish" src={this.props.dishPicture} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="head is-3 has-text-black">{this.props.dishCountry}</p>
                <p className="title is-4 has-text-primary">{this.props.dishName}</p>
                <hr/>
                <p className="subtitle is-size-6">{this.props.dishDescription}</p>
                {/*delete the prop with requested id from the function invoked in the parent component*/}
                <button className="button is-danger is-rounded" type="button" onClick={() => {this.props.handleDelete(this.props.id);}}>
                  Delete
                </button>
                {/*load the EditDish component via React Router and send the id over to the EditDish component*/}
                <Link to={`/edit-dish/${this.props.id}`}>
                  <button className="button is-primary is-rounded" type="button">
                  Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dish;
