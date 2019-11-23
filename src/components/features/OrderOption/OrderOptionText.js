
import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = props => {

  return <input className = {styles.component} type= "text" placeholder={props.id}></input>;

};

OrderOptionText.propTypes = {
  id: PropTypes.string,
};

export default OrderOptionText;