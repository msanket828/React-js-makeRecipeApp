import React from 'react'
import classes from './Modal.module.css'

function Modal(props) {
 const {data}=props;
  return (
    <div className={classes.Modal}>
      <form onSubmit={data.handleUpdateSubmit}>
        <button
          className={classes.closebtn}
          onClick={data.handleCloseModal}>
          &times;
        </button>
        <div className="form-group">
          <input
            type="text"
            name="updatedRecipeName"
            placeholder="Enter Recipe name"
          onChange={data.handleRecipeName}
          value={data.updatedRecipeName}

          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="updatedRecipeIngredients"
            placeholder="Enter Recipe Ingredients"
          onChange={data.handleRecipeName}
          value={data.updatedRecipeIngredients}
          />
        </div>
        <div className="form-group">
          <textarea
            rows="12" cols="22"
            name="updatedRecipeSteps"
            placeholder="Enter steps"
          onChange={data.handleRecipeName}
          value={data.updatedRecipeSteps}
          ></textarea>
        </div>        
        <button type="submit">Update</button>
      </form>

    </div>
  )
}

export default Modal

