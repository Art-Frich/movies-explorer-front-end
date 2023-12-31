import './Techs.css';

import React from 'react';
import SectionTitleRow from '../../others/SectionTitleRow/SectionTitleRow';

export default function Techs() {
  return (
    <section className='section techs'>
      <SectionTitleRow content='Технологии' />
      <h3 className='techs__subtitle'>7 технологий</h3>
      <p className='techs__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className='techs__list list-reset'>
        <li className='techs__list-element'>
          <span className='techs__list-element-text'>HTML</span>
        </li>
        <li className='techs__list-element'>
          <span className='techs__list-element-text'>CSS</span>
        </li>
        <li className='techs__list-element'>
          <span className='techs__list-element-text'>JS</span>
        </li>
        <li className='techs__list-element'>
          <span className='techs__list-element-text'>React</span>
        </li>
        <li className='techs__list-element'>
          <span className='techs__list-element-text'>Git</span>
        </li>
        <li className='techs__list-element'>
          <span className='techs__list-element-text'>Express.js</span>
        </li>
        <li className='techs__list-element'>
          <span className='techs__list-element-text'>mongoDB</span>
        </li>
      </ul>
    </section>
  );
}
