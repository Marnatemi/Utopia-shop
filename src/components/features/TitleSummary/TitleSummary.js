import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './TitleSummary.scss';
import {Col} from 'react-flexbox-grid';

const TitleSummary = ({id, image, name, cost, volumes, tags}) => (
  <Col xs={12} sm={6} lg={4} className={styles.column}>
    <Link to={`/title/${id}`} className={styles.link}>
      <article className={styles.component}>
        <img src={image} alt={name} />
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.details}>
          <span>{volumes}</span>
          <span>from {cost}</span>
        </div>
        <div className={styles.tags}>
          {tags.map(tag => (
            <span className={styles.tag} key={tag.toString()}>{tag}</span>
          ))}
        </div>
      </article>
    </Link>
  </Col>
);

TitleSummary.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  name: PropTypes.string,
  intro: PropTypes.string,
  cost: PropTypes.string,
  volumes: PropTypes.number,
  tags: PropTypes.array.isRequired,
};

export default TitleSummary;
