import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import Button from '../../common/Button/Button';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import settings from '../../../data/settings';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';


const sendOrder = (titleId, titleName, seriesName, options, titleCost) => {
  const totalCost = formatPrice(calculateTotal(titleCost, options));

  const payload = {
    titleId,
    titleName,
    seriesName,
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  if(options.name && options.contact !== ''){
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  }
};

const OrderForm = props => {

  const {titleCost, options, setOrderOption, titleName, titleId, seriesName} = props;
  console.log('OrderForm',props);

  return <Row>
    {pricing.map(option => (
      <Col md={4} key= {option.id}>
        <OrderOption currentValue={options[option.id]} setOrderOption={setOrderOption} {...option}/>
      </Col>))}
    <Col xs={12}>
      <OrderSummary titleCost={titleCost} orderOptions={options}/>
    </Col>
    <Button onClick={() => sendOrder(titleId, titleName, seriesName, options, titleCost)}>Order now!</Button>
  </Row>;

};

OrderForm.propTypes = {
  titleCost: PropTypes.string,
  titleName: PropTypes.string,
  seriesName: PropTypes.string,
  titleId: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};
export default OrderForm;
