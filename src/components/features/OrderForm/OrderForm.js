import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = props => {

  const {tripCost, options} = props;

  return <Row>
    {pricing.map(option => (<Col md={4} key= {option.id}><OrderOption {...option}/></Col>))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} orderOptions={options}/>
    </Col>
  </Row>;

};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};
export default OrderForm;