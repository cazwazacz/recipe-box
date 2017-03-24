import React from 'react';


function Main (props) {
	return (
      <div>
      <div className="heading">
	      <h2>Recipe Book</h2>
	      <div className="lead">Easily add and save your favourite recipes.</div>
      </div>
        {props.recipes}
      </div>
	)
}

module.exports = Main;