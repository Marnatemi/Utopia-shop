import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../layout/Section/Section';
import SeriesSummary from '../../features/SeriesSummary/SeriesSummary';
import PageTitle from '../../common/PageTitle/PageTitle';
import {Grid, Row} from 'react-flexbox-grid';

const Series = ({series}) => (
  <Section>
    <Grid>
      <PageTitle text='All series' />
      <Row between="md">
        {Object.keys(series).map(name => (
          <SeriesSummary key={name} {...series[name]} />
        ))}
      </Row>
    </Grid>
  </Section>
);

Series.propTypes = {
  series: PropTypes.objectOf(PropTypes.object),
};

export default Series;
