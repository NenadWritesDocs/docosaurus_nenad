import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Purpose of this site',
    Svg: require('@site/static/img/undraw_writing.svg').default,
    description: (
      <>
        This site is a pet project designed to host my CV, and showcase my technical writing portfolio.
      </>
    ),
  },
  {
    title: 'My hobbies and projects',
    Svg: require('@site/static/img/undraw_landscape_photo.svg').default,
    description: (
      <>
        My thoughts and observations about work, hobbies, and stuff like that.
      </>
    ),
  },
  {
    title: '(Not) Yet another technical writing blog',
    Svg: require('@site/static/img/undraw_blog.svg').default,
    description: (
      <>
        A blog which hopefully won't die after the first post.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
