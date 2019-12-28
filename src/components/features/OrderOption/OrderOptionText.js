
import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({currentValue, id, setOptionValue}) => {

  return <input className = {styles.component} value= {currentValue} type= "text" placeholder={id} onChange={event => setOptionValue(event.currentTarget.value)} />;

};

OrderOptionText.propTypes = {
  id: PropTypes.string,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string.isRequired,
};

export default OrderOptionText;