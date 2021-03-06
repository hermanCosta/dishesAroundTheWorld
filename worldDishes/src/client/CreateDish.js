import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from 'axios';

//Create dish component that will create a new dish card
class CreateDish extends Component {
    constructor(props) {
        super(props);
        // the form fields are stored in a state
        this.state = { 
            dishName: '',
            dishCountry: '',
            dishDescription: '',
            dishPicture: '',
            recipeLink: '',
            
            nameError: '',
            countryError: '',
            descriptionError: '',
            pictureError: '',
            recipeError: ''
        };

        //this binding is necessary to make `this` work in the callback
        //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //once the input boxes are changed, update the state to match the value
    handleChange(event) {
       
        // name of the input boxes must match the property names in the state
        const name = event.target.name;
        const value = event.target.value;    

        this.setState({ [name]: value });
    }

    //check if inputs are empty and display message to the user
    validate = () => {
            let nameError = '';
            let countryError = '';
            let descriptionError = '';
            let pictureError = '';
            let recipeError = '';

            if(!this.state.dishName) {
                nameError = 'Please enter your dish name';
            }
            if(!this.state.dishCountry) {
                countryError = 'Please enter a your dish country';
            }
            if(!this.state.dishDescription) {
                descriptionError = 'Please describe your dish';
            }
            if(!this.state.dishPicture) {
                pictureError = 'Please paste a picture link';
            }
            if(!this.state.recipeLink) {
                recipeError = 'Please paste a recipe link';
            }

            if(nameError || countryError || descriptionError || pictureError || recipeError) {
                this.setState({nameError, countryError, descriptionError, pictureError, recipeError});
                return false
            }
            return true;            
    };


    handleSubmit(event) {
        
        //preventDefault() is called on the event when it occurs to prevent a browser reload/refresh
        event.preventDefault();
        
        //if inputs are not empty, 
        //use axios to send a POST request to the server which includes the state information for the new dish to be created
        const isValid = this.validate();
        if(isValid) {

        axios.post('/api/dishes', this.state)
            //on success go to home
            .then(res => this.props.history.push('/'))
            .catch(error => {
                
                console.log(error);
            });
        }
        
    }

    render() {
        // remember that the name of the input fields should match the state
        return (
            <div className="is-fluid">
                {/*on form submit call handleSubmit()*/}
                <form onSubmit={this.handleSubmit}>
                    <h2 className="title is-1 has-text-primary">Create New Dish</h2>
                    <hr />
                    {/*main container for input fields*/}
                    <div className="container">
                    {/*FIRST COLUMN*/}
                    <div className="columns">
                        <div className="column is-half">
                            <div className="field">
                                <label className="label has-text-primary"> Dish Name: </label>
                                <div className="control">
                                    <input className="input is-small is-rounded" type="text is-small has-color-black" name="dishName" value={this.state.dishName} onChange={this.handleChange} id="form" />
                                     <div style={{color: "red"}}>{this.state.nameError}</div>
                                </div> 
                            </div>
                            <div className="field">
                                <label className="label has-text-primary"> Country: </label>
                                <div className="control">
                                    <input className="input is-small is-rounded" type="text" name="dishCountry" value={this.state.dishCountry} onChange={this.handleChange} id="form" />
                                    <div style={{color: "red"}}>{this.state.countryError}</div>
                                </div>
                            </div>
                             <div className="field">
                                <label className="label has-text-primary"> Picture: </label>
                                <div className="control">
                                    <input className="input is-small is-rounded" type="text" name="dishPicture" value={this.state.dishPicture} onChange={this.handleChange} id="form" />
                                    <div style={{color: "red"}}>{this.state.pictureError}</div>
                                </div>
                            </div>
                        </div>
                        {/*SECOND COLUMN*/}
                        <div className="column">
                            <div className="field">
                                <label className="label has-text-primary"> Description: </label>
                                <div className="control">
                                    <input className="input is-small is-rounded" maxLength="120" type="text" name="dishDescription" value={this.state.dishDescription} onChange={this.handleChange} id="form" />
                                    <div style={{color: "red"}}>{this.state.descriptionError}</div>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label has-text-primary"> Recipe Link: </label>
                                <div className="control">
                                    <input className="input is-small is-rounded" type="text" name="recipeLink" value={this.state.recipeLink} onChange={this.handleChange} id="form" />
                                    <div style={{color: "red"}}>{this.state.recipeError}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*SUBMIT BUTTON*/}
                    <input className="button is-primary is-rounded" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateDish;
