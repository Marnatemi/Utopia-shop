import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const OrderSummary = props => (
  console.log(props),

  <h2 className={styles.component}>Total: <strong> $ {calculateTotal(formatPrice(props.titleCost), props.orderOptions)}</strong></h2>

);

export default OrderSummary;
