import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({currentValue, price, limits, setOptionValue}) => {

  return <div className={styles.number}>
    <input type='number' className={styles.inputSmall} value={currentValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)}/>
    {' '+ formatPrice(price)}
  </div>;
};

OrderOptionNumber.propTypes = {
  price: PropTypes.string,
  limits: PropTypes.object,
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
};


export default OrderOptionNumber;