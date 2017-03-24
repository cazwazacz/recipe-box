var React = require('react');

const NewRecipeModal = function(props) {
  return (
    <div>
    <div className=" addButton">
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#mymodal">
      Add a recipe
      </button>
    </div>
      <div className="modal fade" id="mymodal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
            <h3>New recipe</h3>
            </div>
            <div className="modal-body">
            <form action="">
              <div className="form-group">
              <input type="text" className="form-control" id="newName" placeholder="Recipe name"/>
              </div>
              <div className="form-group">
              <textarea className="form-control" 
              id="newIngredients" rows="3" 
              placeholder="Enter the ingredients here seperated by commas (eg. 'beans, toast, eggs')"
              style={{'resize': 'vertical'}}>
              </textarea>
              </div>
            </form>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={props.onSave}>Save</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
);
}

module.exports = NewRecipeModal;