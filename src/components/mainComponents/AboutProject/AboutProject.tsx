import './AboutProject.css';

import React from 'react';
import SectionTitleRow from '../../others/SectionTitleRow/SectionTitleRow';

export default function AboutProject() {
  return (
    <section className='section about-project' id='about-project'>
      <SectionTitleRow content='О проекте' />
      <div className='about-project__info'>
        <div className='about-project__info-element'>
          <h3 className='about-project__info-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__info-text'>
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__info-element'>
          <h3 className='about-project__info-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__info-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__graph'>
        <div className='about-project__graph-ch1 about-project__graph-text'>1 неделя</div>
        <div className='about-project__graph-ch2 about-project__graph-text'>4 недели</div>
        <div className='about-project__graph-sign about-project__graph-text'>Back-end</div>
        <div className='about-project__graph-sign about-project__graph-text'>Front-end</div>
      </div>
    </section>
  );
}
