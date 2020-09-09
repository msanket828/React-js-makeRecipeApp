import React, { Fragment } from 'react'
import { myContext } from '../../context/Provider'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import classes from './ViewRecipe.module.css'
import Modal from '../Modal/Modal'
function ViewRecipe(props) {
  const { recipe, data } = props;
  return (
    <myContext.Consumer>
      {(data) => (
        <Fragment>
          <ul className={classes.ul__recipe}>
            {
              data.recipeDetail.map((recipe, index) =>
                <li key={recipe.name}>
                  <div className={classes.controls}>
                    <DeleteIcon
                      className={classes.MuiSvgIcon_root}
                      onClick={() => data.handleDelete(index)}
                    />
                    <EditIcon
                      className={classes.MuiSvgIcon_root}
                      onClick={() => data.handleEdit(index)}
                    />
                  </div>
                  <h2>recipe: {recipe.name}</h2>
                  <hr />
                  <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                  <p><strong>Steps:</strong> {recipe.steps}</p>
                </li>
              )
            }
          </ul>
          {
            data.isModalOpen ?
              <Modal data={data} /> :
              null
          }
        </Fragment>
      )
      }
    </myContext.Consumer>
  )
}
export default ViewRecipe
