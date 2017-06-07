import React from 'react'

import { Link } from 'react-router-dom'
import { pathnamePrefix } from '../config/index'

const Header = () => (
  <header className="row header">
    <div className="hidden-xs col-sm-3 blogs-logo">
      <div className="blogs-logo-img">
        <img src="http://stage48.net/wiki/images/6/6a/SKELogo.png" alt="the SKE48 logo" />
      </div>
    </div>
    <div className="col-sm-9 blogs-header">
      <h1 className="blogs-title">
        <Link to={`${pathnamePrefix}`}>SKE48 Kenkyuusei Blogs</Link>
      </h1>
      <p className="lead blogs-description">
        All blogs collected form <a href="http://www.ske48.co.jp/">the official website</a>
      </p>
    </div>
  </header>
)

export default Header
