import React from 'react';

const Recipes = () = (

  var recipes = JSON.parse(localStorage.getItem('recipes'));

  if (recipes) {
  			var items = recipes.map(function (item, index) {
  	           
  	           var that = this;
  	           
  	           function handleDelete() {
  	           	var cursor = item.name;
  	             var allrecipes = JSON.parse(localStorage.getItem('recipes'));
  	             for (let i = 0; i < allrecipes.length; i++) {
  	             	if (allrecipes[i].name == cursor) {
  	             		allrecipes.splice(i, 1);
  	             		localStorage.setItem('recipes', JSON.stringify(allrecipes));
  	             		
  	             		that.setState({
  	             			'recipes': 'hello'
  	             		})
  	             	} 
  	             }
  	           }

  				var ingredients = item.ingredients.split(',');
  				var ingredientsMapped = ingredients.map(function (ingredient) {
  					return (
  	                  <li>{ingredient}</li>
  					)
  				})
  				return (
  					<div key={index}>
  		              <p>{item.name}</p>
  		              <ul>{ingredientsMapped}</ul>
  		              <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
  					</div>
  				)
  			}.bind(this));

  }

)

export default Recipes;