import React from 'react'
import classes from './Toolbar.module.css'
import { NavLink, Link } from 'react-router-dom'

const Toolbar = () => {
  return (
    <div className={classes.main_div}>
      <div className={classes.wrapper}>
        <Link to='/' title="Recipe" className={classes.logo}>Recipe</Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/createrecipe"
              exact
              activeClassName="my-active"
              activeStyle={{                
                  background: 'rgba(255,255,255,0.5)',
                  borderBottom: '4px solid burlywood'
              }}
              >Create Recipe</NavLink>
            </li>
            <li>
              <NavLink to="/viewrecipe"
              activeClassName="my-active"
              activeStyle={{                
                  background: 'rgba(255,255,255,0.5)',
                  borderBottom: '4px solid burlywood'
              }}
              >Total Recipies</NavLink>              
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Toolbar