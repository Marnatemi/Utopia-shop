import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../layout/Section/Section';
import PageTitle from '../../common/PageTitle/PageTitle';
import SeriesSummary from '../../features/SeriesSummary/SeriesSummary';

import styles from './Authors.scss';
import {Grid, Row} from 'react-flexbox-grid';

const Authors = ({authors, publishers, allSeries}) => (

  <Section>
    <Grid>
      <PageTitle text='All authors' />
      {console.log('Authors.js', authors, allSeries, publishers)}
      {Object.keys(authors).map(authorName => (
        <div key={`author-${authorName}`}>
          <h2 className={styles.name}>{authorName}</h2>
          {authors[authorName].publishers.map(publisherName => (
            <div key={`publisher-${publisherName}`}>
              <h3 className={styles.subtitle}>{publisherName}</h3>
              <Row>
                {publishers[publisherName].allSeries.map(name => (
                  <SeriesSummary key={allSeries[name].name} {...allSeries[name]} />
                ))}
              </Row>
            </div>
          ))}
        </div>
      ))}
    </Grid>
  </Section>

);

Authors.propTypes = {
  authors: PropTypes.object,
  publishers: PropTypes.object,
  allSeries: PropTypes.objectOf(PropTypes.object),
};

export default Authors;
