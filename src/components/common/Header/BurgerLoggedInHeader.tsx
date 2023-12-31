import './BurgerLoggedInHeader.css';

import { NavLink } from 'react-router-dom';
import React from 'react';

export default function BurgerLoggedInHeader({ isOpen }: { isOpen: boolean }) {
  return (
    <aside className={`aside-bar ${isOpen ? 'aside-bar_visible' : ''}`}>
      <nav className='navigation-auth-burger'>
        <ul className='navigation-auth-burger__list list-reset'>
          <li className='navigation-auth-burger__list-element'>
            <NavLink className='navigation-auth-burger__link link-hover active-underline' to='/'>Главная</NavLink>
          </li>
          <li className='navigation-auth-burger__list-element'>
            <NavLink className='navigation-auth-burger__link link-hover active-underline' to='/movies'>Фильмы</NavLink>
          </li>
          <li className='navigation-auth-burger__list-element'>
            <NavLink className='navigation-auth-burger__link link-hover active-underline' to='/saved-movies'>Сохраненные фильмы</NavLink>
          </li>
        </ul>
        <NavLink className='navigation-auth-burger__link navigation-auth-burger__account-btn ' to='/profile'>
          <span className='navigation-auth-burger__account-btn-text link-hover active-underline'>Аккаунт</span>
          <span className='navigation-auth-burger__account-btn-icon btn-hover active-btn-effect' />
        </NavLink>
      </nav>
    </aside>
  );
}
