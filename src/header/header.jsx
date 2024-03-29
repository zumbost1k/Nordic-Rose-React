import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
const links = ['BLOG', 'ABOUT', 'LINKS', 'PROJECTS'];
const LinksList = ({ link }) => {
  return (
    <Link className='menu_link' to='/home'>
      {link}
    </Link>
  );
};
const Header = () => {
  const { isAuth } = useAuth();
  if (isAuth) {
    return (
      <div>
        <header className='header'>
          <div className='top_padding_nordic'>
            <Link to='home'>
              <picture>
                <source
                  media='(max-width:854px)'
                  srcSet='/photos/mobile_rose.png'
                />
                <source
                  media='(min-width:854px)'
                  width='395'
                  height='38'
                  srcSet='/photos/desktop_rose.png'
                />
                <img
                  className='rose'
                  width='217'
                  height='24'
                  src='/photos/mobile_rose.png'
                  alt='NORDIC ROSE'
                />
              </picture>
            </Link>
          </div>
          <div className='desktop_menu'>
            {links.map((link) => {
              return <LinksList link={link} />;
            })}
          </div>
          <div className='top_padding_burger'>
            <img width='25' height='16' src='/photos/burger.png' alt='burger' />
            <div className='hover_menu'>
              {links.map((link) => {
                return <LinksList link={link} />;
              })}
            </div>
          </div>
        </header>
      </div>
    );
  }
};

export default Header;
