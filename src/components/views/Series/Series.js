import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../../layout/Hero/Hero';
import Section from '../../layout/Section/Section';
import PageTitle from '../../common/PageTitle/PageTitle';
import SideImage from '../../common/SideImage/SideImage';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import TitleSummary from '../../features/TitleSummary/TitleSummary';

import {Grid, Row, Col} from 'react-flexbox-grid';

const Series = ({name, author, language, genre, volumes, titles, seriesImage}) => (
  <Section variant='has-hero'>
    <Hero variant='small' titleText={`${name}`} imageSrc={`https://loremflickr.com/1000/600/${seriesImage},landscape/all`} />
    <Grid>
      <PageTitle text={`About ${name}`} />
    </Grid>
    <DetailsBox>
      <DetailsImage variant='right'>
        <SideImage source={`https://loremflickr.com/800/600/${seriesImage},landscape/all`} />
      </DetailsImage>
      <Grid>
        <Row>
          <Col md={12} lg={4}>
            <List variant='light'>
              <ListItem title={`<strong>Author:</strong> ${author}`} icon='user' />
              <ListItem title={`<strong>Genre:</strong> ${genre}`} icon='theater-masks' />
              <ListItem title={`<strong>Volumes:</strong> ${volumes}`} icon='book' />
              <ListItem title={`<strong>Language:</strong> ${language}`} icon='language' />
            </List>
          </Col>
        </Row>
      </Grid>
    </DetailsBox>
    <Grid>
      <Row>
        <Col xs={12}>
          <PageTitle text={`Volumes of ${name}`} />
        </Col>
        {titles.map(title => (
          <TitleSummary key={title.id} {...title} />
        ))}
      </Row>
    </Grid>
  </Section>
);

Series.propTypes = {
  name: PropTypes.string,
  seriesImage: PropTypes.string,
  genre: PropTypes.string,
  language: PropTypes.string,
  author: PropTypes.string,
  volumes: PropTypes.number,
  titles: PropTypes.array,
};

export default Series;
