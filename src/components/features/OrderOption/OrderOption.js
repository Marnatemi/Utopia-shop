import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOption = props => {

  const {id} = props;

  return (
    <div className = {styles.component}>
      <h3 className = {styles.title}>{id}</h3>
    </div>);

};

OrderOption.propTypes = {
  id: PropTypes.string,
};

export default OrderOption;