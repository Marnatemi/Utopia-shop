import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './SeriesSummary.scss';
import SideImage from '../../common/SideImage/SideImage';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import { Row, Col } from 'react-flexbox-grid';

const SeriesSummary = ({ name, cover, titles, author, publisher, language, genre }) => (

  <Col xs={12}>
    { console.log('SS', author)}
    <Link to={`/country/${name}`} className={styles.component}>
      <DetailsBox variant='small light'>
        <DetailsImage variant='left'>
          <SideImage source={cover} />
        </DetailsImage>
        <Row>
          <Col md={12} lg={8} xl={9} lgOffset={4} xlOffset={3}>
            <Row>
              <Col md={6}>
                <h3 className={styles.name}>{name}</h3>
                <h4 className={styles.region}>{author}/ {publisher}</h4>
                <List variant='light'>
                  <ListItem title={`<strong>Available volumes:</strong> ${titles.length}`} icon='arrow-circle-right' />
                </List>
              </Col>
              <Col md={5} xl={6}>
                <div className={styles.details}>
                  <List variant='light'>
                    <ListItem title={`<strong>Genre:</strong> ${genre}`} icon='city' />
                    <ListItem title={`<strong>Language:</strong> ${language}`} icon='globe' />
                  </List>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </DetailsBox>
    </Link>
  </Col>

);

SeriesSummary.propTypes = {
  name: PropTypes.string,
  cover: PropTypes.string,
  titles: PropTypes.array,
  author: PropTypes.string,
  publisher: PropTypes.string,
  language: PropTypes.string,
  genre: PropTypes.string,
};

export default SeriesSummary;
