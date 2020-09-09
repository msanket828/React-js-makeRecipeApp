import React, {Fragment } from 'react'
import classes from './CreateRecipe.module.css'
import { myContext } from '../../context/Provider'

function CreateRecipe(props) {

  return (
    <myContext.Consumer>
      {
        (data) => (
          <Fragment>          
            <div className={classes.createRecipe} onLoad={data.onloadFun}>
              <form onSubmit={data.submitRecipe}>
                {console.log()}
                <div className="form-group">
                  <input
                    type="text"
                    name="recipeName"
                    placeholder="Enter Recipe name"
                    onChange={data.handleRecipeName}
                    value={data.recipeName}
                    
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="recipeIngredients"
                    placeholder="Enter Recipe Ingredients"
                    onChange={data.handleRecipeName}
                    value={data.recipeIngredients}
                  />
                </div>                
                <div className="form-group">
                  <textarea
                    rows="12" cols="22"
                    name="recipeSteps"
                    placeholder="Enter steps"
                    onChange={data.handleRecipeName}
                    value={data.recipeSteps}
                  ></textarea>
                </div>
                <div className="form-group">                  
                  <button type="submit">add</button>
                  <button onClick={data.handleResetForm}>Reset</button>
                </div>
              </form>
            </div>            
          </Fragment>
        )
      }
    </myContext.Consumer>
  )
}

export default CreateRecipe


