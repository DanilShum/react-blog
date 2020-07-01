import React from 'react'
import './HeaderBlog.css'

function HeaderBlog(){
    
    return (
      <header className="header-blog">
          <nav className="header-blog__nav">
            <ul className="header-blog__listing">
                <li><a href="/">Home</a> </li>
                <li><a href="/Users">Users</a></li>
            </ul>
          </nav>
      </header>
    )
}

export default HeaderBlog