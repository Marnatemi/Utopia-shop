import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './TitleSummary.scss';
import {Col} from 'react-flexbox-grid';

const TitleSummary = ({id, image, name, cost, volume, allSeries, genres}) => (
  <Col xs={12} sm={6} lg={4} className={styles.column}>
    {console.log('TS',id, image, name, cost, volume, genres)}
    <Link to={`/title/${id}`} className={styles.link}>
      <article className={styles.component}>
        <img src={image} alt={name} />
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.details}>
          <span>volume {volume}/ {allSeries}</span>
          <span>from {cost}</span>
        </div>
        <div className={styles.genres}>
          {genres.map(genre => (
            <span className={styles.genre} key={genre.toString()}>{genre}</span>
          ))}
        </div>
      </article>
    </Link>
  </Col>
);

TitleSummary.propTypes = {
  id: PropTypes.PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  intro: PropTypes.string,
  cost: PropTypes.string,
  volume: PropTypes.number,
  allSeries: PropTypes.number,
  genres: PropTypes.array,
};

export default TitleSummary;
