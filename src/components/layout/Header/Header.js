import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Icon from '../../common/Icon/Icon';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PhoneNumber from '../../features/PhoneNumber/PhoneNumber';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Grid>
          <Row between="md" middle="xs">
            <Col md={3} lg={2}>
              <Link to='/'>
                <div className={styles.logo}>
                  <Icon name='book-reader' />
                  <span className={styles.name}>Utopia Shop</span>
                </div>
              </Link>
            </Col>
            <Col md={6}>
              <nav>
                <NavLink to='/titles' activeClassName='active'>Titles</NavLink>
                <NavLink to='/allSeries' activeClassName='active'>Series</NavLink>
                <NavLink to='/authors' activeClassName='active'>Authors</NavLink>
                <NavLink to='/info' activeClassName='active'>Contact</NavLink>
              </nav>
            </Col>
            <Col md={3} lg={2}>
              <div className={styles.contact}>
                <Icon name='phone' /><PhoneNumber number='The office opens at 8:00 UTC' />
              </div>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}

export default Header;
