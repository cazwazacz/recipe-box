var React = require('react');
import '../Main.css';

const EditRecipeModal = function(props) {
  return (
    <div>
      <div className="editButton">
        <button type="button" className="btn btn-success" data-toggle="modal" data-target={props.dataTarget} onClick={props.onEdit}>
        Edit
        </button>
      </div>
      <div className="modal fade" id={props.dataId}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
            <h3>Edit recipe</h3>
            </div>
            <div className="modal-body">
            <form action="">
              <div className="form-group">
              <input type="text" className="form-control" id={props.editName} placeholder="Recipe name"/>
              </div>
              <div className="form-group">
              <textarea className="form-control" 
              id={props.editIngredients} rows="3" 
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

module.exports = EditRecipeModal;