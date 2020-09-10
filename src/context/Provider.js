import React, { Component, createContext } from 'react'

export const myContext = createContext();
class Provider extends Component {

  state = {
    recipeDetail: [
      {
        name: 'omlet',
        ingredients: 'egg, salt, oil, chilly powder',
        steps: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
      },
      {
        name: 'Pasta',
        ingredients: 'pasta, milk, butter, shugar, oil, salt',
        steps: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
    ],
    recipeName: '',
    recipeIngredients: '',
    recipeSteps: '',
    isModalOpen: false,
    selectedIndex: '',
    updatedRecipename:'',
    updatedRecipeIngredients: '',
    updatedRecipeSeps: ''
  }


  handleRecipeName = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  submitRecipe = (e) => {
    e.preventDefault();
    if (this.state.recipeName !== "" && this.state.recipeSteps !== "" && this.state.recipeIngredients !== "") {
      const { recipeName, recipeSteps, recipeIngredients } = this.state;
     
      const obj = { name: recipeName, ingredients: recipeIngredients, steps: recipeSteps }
      this.setState({
        recipeDetail: [...this.state.recipeDetail, obj],
        recipeName: '',
        recipeIngredients: '',
        recipeSteps: '',
      })
      alert("your recipe is submited");
    }   
  }

  handleDelete = (Rindex) => {
    const nArray = this.state.recipeDetail.filter((newItem, index) => {
      return index !== Rindex
    })
    this.setState({
      recipeDetail: nArray
    })
  }

  //handleEdit for modal
  handleEdit = (Rindex) => {
    const editRecipe = this.state.recipeDetail.filter((recipe, index) => {
      return index === Rindex
    })

    this.setState({
      selectedIndex: Rindex,
      isModalOpen: true,
      updatedRecipeName: editRecipe[0].name,
      updatedRecipeIngredients: editRecipe[0].ingredients,
      updatedRecipeSteps: editRecipe[0].steps
    })
  }

  //handleUpdateSubmit
  handleUpdateSubmit = (e) => {
    e.preventDefault();
    const { recipeDetail, selectedIndex, updatedRecipeName, updatedRecipeSteps, updatedRecipeIngredients } = this.state;
    const obj = { name: updatedRecipeName, ingredients: updatedRecipeIngredients, steps: updatedRecipeSteps }
    recipeDetail.splice(selectedIndex, 1, obj)

    this.setState({
      recipeDetail: recipeDetail,
      isModalOpen: false
    })
  }

  //handleCloseModal
  handleCloseModal = (e) => {
    this.setState({
      isModalOpen: false
    })
  }

  //reset recipe form
  handleResetForm = () => {    
   this.setState({
     recipeName: '',
     recipeIngredients: '',
     recipeSteps: ''
   })
  }
  

  render() {
    return (
      <myContext.Provider value={{
        ...this.state,
        submitRecipe: this.submitRecipe,
        handleRecipeName: this.handleRecipeName,
        handleDelete: this.handleDelete,
        handleEdit: this.handleEdit,
        handleCloseModal: this.handleCloseModal,
        handleUpdateSubmit: this.handleUpdateSubmit,
        handleResetForm: this.handleResetForm,   
      }}
      >
        {this.props.children}
      </myContext.Provider>
    )
  }
}


export default Provider;