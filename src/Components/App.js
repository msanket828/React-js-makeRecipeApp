import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Provider from '../context/Provider'
import ViewRecipe from '../Components/VeiwRecipe/ViewRecipe'
import CreateRecipe from './CreateRecipe/CreateRecipe'
import Toolbar from './Toolbar/Toolbar'
import Error from './Error/Error'
import Welcome from './Welcome/Welcome'


const App = (props) => {
  return (
    <Provider>
      <div className="app">
        <Toolbar />
        <Switch >
          <Route exact path="/" component={Welcome} />          
          <Route exact path="/createrecipe" component={CreateRecipe} /> 
          <Route exact path="/viewrecipe" component={ViewRecipe} />          
          <Route component={Error} />
        </Switch>
      </div>
    </Provider>
  )
}
export default App



