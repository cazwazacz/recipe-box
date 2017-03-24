import React, { Component } from 'react';
import Main from '../components/Main';
import NewRecipeModal from '../components/NewRecipeModal';
import EditRecipeModal from '../components/EditRecipeModal';
import '../Main.css';

var editName;
var editIngredients;

class MainContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			'recipes': "",
		}
        this.handleSave = this.handleSave.bind(this);
        this.handleEditSave = this.handleEditSave.bind(this);
        this.getItems = this.getItems.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

	}

	componentDidMount() {
		this.setState({
			'recipes': this.getItems()
		})
	}

	getItems() {

		var recipes = JSON.parse(localStorage.getItem('recipes'));

		if (recipes) {
			return (
	          recipes.map(function(item, index) {
	          	var name = item.name;
	          	var ingredients = item.ingredients.split(',');
	          	var ingredientsMapped = ingredients.map(function (ingredient, index) {
	          		return (
	                  <li key={index}>{ingredient}</li>
	          		)
	          	})
	  			return (
	  				<div className="test" key={index}>
	  	              <button data-toggle="collapse" data-target={'#content' + index} className="eachName"><h4>{item.name}</h4></button>
	  	              <div className="collapse" id={'content' + index}>
		  	              <ul className="ingredients">{ingredientsMapped}</ul>
		  	              <div>
			  	              <EditRecipeModal
			  	              onEdit={()=>{this.handleEdit(item.name, item.ingredients, index)}} 
			  	              onSave={()=>{this.handleEditSave(index)}}
			  	              dataTarget={"#modal" + index}
			  	              dataId={'modal' + index}
			  	              editName={'editName' + index}
			  	              editIngredients={'editIngredients' + index}/>
			  	              <button className="btn btn-danger" onClick={()=>{this.handleDelete(item.name)}}>Delete</button>
		  	              </div>
	  	              </div>
	  				</div>
	  			)
	          }.bind(this))
	 		)
		}
		else {
			return 'You have no recipes! Add one!'
		}
	}

	handleEdit(name, ingredients, index) {
		document.getElementById('editName' + index).value = name;
		document.getElementById('editIngredients' + index).value = ingredients;
		editName = name;
	    editIngredients = ingredients;
	}

	handleDelete(name) {
		var allrecipes = JSON.parse(localStorage.getItem('recipes'));
		for (let i = 0; i < allrecipes.length; i++) {
			if (allrecipes[i].name === name) {
				allrecipes.splice(i, 1);
				localStorage.setItem('recipes', JSON.stringify(allrecipes));
				this.setState({
					'recipes': this.getItems()
				})
			}
		}

	}

	handleEditSave(index) {
		var originalRecipe = {name: editName, ingredients: editIngredients};
		var editedName = document.getElementById('editName' + index).value;
		var editedIngredients = document.getElementById('editIngredients' + index).value;
		var editedRecipe = {name: editedName, ingredients: editedIngredients};
		var recipes = JSON.parse(localStorage.getItem('recipes'));

		for (let i = 0; i < recipes.length; i++) {
			if (JSON.stringify(recipes[i]) === JSON.stringify(originalRecipe)) {
				recipes[i] = editedRecipe;
			}
		}
		localStorage.setItem('recipes', JSON.stringify(recipes));
		this.setState({
			'recipes': this.getItems()
		})
	}

	handleSave() {

      var name = document.getElementById('newName').value;
      var ingredients = document.getElementById('newIngredients').value;

      var recipe = {name: name, ingredients: ingredients}
      var storedRecipes = localStorage.getItem('recipes');
      if (storedRecipes) {
      	var parsed = JSON.parse(storedRecipes);

      	parsed.map(function(element) {
      		if (element == recipe) {
      			console.log(element);
      		}
      	})
      	parsed.push(recipe);
      	localStorage.setItem('recipes', JSON.stringify(parsed));

      	this.setState({
      		'recipes': this.getItems()
      	})
      	
      } else {
      	storedRecipes = [];
      	storedRecipes.push(recipe);
      	console.log(storedRecipes);
      	localStorage.setItem('recipes', JSON.stringify(storedRecipes));
      	this.setState({
      		'recipes': this.getItems()
      	})
      }  
      document.getElementById('newName').value = '';
      document.getElementById('newIngredients').value = '';
      document.getElementById('editName').value = '';
      document.getElementById('editIngredients').value = '';
	}
	render() {
		return (

          <div className="container-fluid">
          <div className="row">
          	<div className="col-sm-10 col-sm-offset-1">
	          <Main recipes={this.state.recipes} />
	          <NewRecipeModal 
	          onSave={this.handleSave}/>
          	</div>
          </div>
          </div>
		)
	} 
}

export default MainContainer;
