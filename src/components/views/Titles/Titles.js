import React from 'react';
import PropTypes from 'prop-types';

import TitleSummary from '../../features/TitleSummary/TitleSummary';
import Section from '../../layout/Section/Section';
import PageTitle from '../../common/PageTitle/PageTitle';

import {Grid, Row, Col} from 'react-flexbox-grid';
import TitleListOptions from '../../features/TitleListOptions/TitleListOptionsContainer';

const Titles = ({titles}) => (
  <Section>
    <Grid>
      <Row>
        <Col xs={12}>
          <PageTitle text='All titles' />
          <TitleListOptions />
          <Row>
            {titles.length ? titles.map(title => (
              <TitleSummary key={title.id} {...title} />
            )) : (
              <p>Sorry, no results found. Try adjusting the filters.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Grid>
  </Section>
);

Titles.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.object),
};

export default Titles;
