import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../layout/Section/Section';
import PageTitle from '../../common/PageTitle/PageTitle';
import SeriesSummary from '../../features/SeriesSummary/SeriesSummary';

import styles from './Authors.scss';
import { Grid, Row } from 'react-flexbox-grid';

const Authors = ({ authors, allSeries }) => (

  <Section>
    <Grid>
      <PageTitle text='All authors' />
      {Object.keys(authors).map(authorName => (
        <div key={`author-${authorName}`}>
          <h2 className={styles.name}>{authorName}</h2>
          {authors[authorName].allSeries.map(id => (
            <div key={allSeries[id].id}>
              <Row>
                <SeriesSummary {...allSeries[id]} />
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
