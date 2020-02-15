import React from 'react';
import PropTypes from 'prop-types';
import HTMLParser from 'react-html-parser';

import NotFound from '../NotFound/NotFound';
import Section from '../../layout/Section/Section';
import PageTitle from '../../common/PageTitle/PageTitle';
import SideImage from '../../common/SideImage/SideImage';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import OrderForm from '../../features/OrderForm/OrderFormContainer';
import styles from './Title.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';

const Title = ({error, id, name, image, cost, allSeries, description, series, intro}) => {

  if(error) return <NotFound />;
  else return (
    <Section>
      <Grid>
        <PageTitle text={name} />
      </Grid>
      <DetailsBox>
        <DetailsImage>
          <SideImage source={image} />
        </DetailsImage>
        <Grid>
          <Row>
            <Col md={12} lg={4}>
              <div className={styles.intro}>
                {HTMLParser(intro)}
              </div>
              <List variant='light'>
                <ListItem title={`<strong>Series:</strong> ${allSeries} volumes`} icon='calendar-alt' />
                <ListItem title={`<strong>Price:</strong> from ${cost}`} icon='money-bill-wave' />
              </List>
            </Col>
          </Row>
        </Grid>
      </DetailsBox>
      <Grid>
        <Row>
          <Col xs={12}>
            <PageTitle text='Title options' />
            <OrderForm titleCost={cost} titleName={name} titleId={id} seriesName={series.name}/>
          </Col>
        </Row>
      </Grid>
      <Grid>
        <Row>
          <Col xs={12}>
            <PageTitle text='Title details' />
            {HTMLParser(description)}
          </Col>
        </Row>
      </Grid>
      <Grid>
        <PageTitle text={`About ${series.name}`} />
      </Grid>
      <DetailsBox>
        <DetailsImage>
          <SideImage source={series.flag} />
        </DetailsImage>
        <Grid>
          <Row>
            <Col md={12} lg={4}>
              <List variant='light'>
                <ListItem title={`<strong>Author:</strong> ${series.author}`} icon='city' />
                <ListItem title={`<strong>Publisher:</strong> ${series.publisher} `} icon='users' />
                <ListItem title={`<strong>Language:</strong> ${series.language}`} icon='money-bill-wave' />
              </List>
            </Col>
          </Row>
        </Grid>
      </DetailsBox>
    </Section>
  );
};

Title.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  cost: PropTypes.string,
  allSeries: PropTypes.number,
  description: PropTypes.string,
  series: PropTypes.object,
};

export default Title;
