import React from 'react'
import './HeaderBlog.css'
import { NavLink  } from 'react-router-dom';


function HeaderBlog(){
    
    return (
      <header className="header-blog">
          <nav className="header-blog__nav">
            <ul className="header-blog__listing">
                <li><NavLink className="header-blog__btn" exact={true} activeClassName="is-active" to="/">Home</NavLink > </li>
                <li><NavLink className="header-blog__btn" activeClassName="is-active" to="/Users">Users</NavLink ></li>
            </ul>
          </nav>
      </header>
    )
}

export default HeaderBlog