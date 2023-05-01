import './header.css';
import React from 'react';
let links = ['BLOG', 'ABOUT', 'LINKS', 'PROJECTS'];
let linksList = links.map(function (link) {
  return <a className="menu_link" href="/">{link}</a>;
})
function Header() {
  return (
    <div>
      <header className="header">
        <div className="top_padding_nordic">
          <h1>
            <picture>
              <source media="(max-width:854px)" srcset="photos/mobile_rose.png" />
              <source media="(min-width:854px)" width="395" height="38" srcset="photos/desktop_rose.png" />
              <img className="rose" width="217" height="24" src="photos/mobile_rose.png" alt="NORDIC ROSE" />
            </picture>
          </h1>
        </div>
        <div className="desktop_menu">
          {linksList}
        </div>
        <div className="top_padding_burger">
          <img width="25" height="16" src="photos/burger.png" alt="burger" />
        </div>
      </header>
    </div>
  );
}

export default Header;
