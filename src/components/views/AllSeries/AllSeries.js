import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../layout/Section/Section';
import SeriesSummary from '../../features/SeriesSummary/SeriesSummary';
import PageTitle from '../../common/PageTitle/PageTitle';
import {Grid, Row} from 'react-flexbox-grid';

const AllSeries = ({allSeries}) => (
  <Section>
    <Grid>
      <PageTitle text='All series' />
      <Row between="md">
        {Object.keys(allSeries).map(id => (
          <SeriesSummary key={id} {...allSeries[id]} />
        ))}
      </Row>
    </Grid>
  </Section>
);

AllSeries.propTypes = {
  allSeries: PropTypes.objectOf(PropTypes.object),
};

export default AllSeries;
