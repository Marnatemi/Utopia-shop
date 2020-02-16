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
        {Object.keys(allSeries).map(name => (
          <SeriesSummary key={name} {...allSeries[name]} />
        ))}
      </Row>
    </Grid>
  </Section>
);

AllSeries.propTypes = {
  allSeries: PropTypes.objectOf(PropTypes.object),
};

export default AllSeries;
