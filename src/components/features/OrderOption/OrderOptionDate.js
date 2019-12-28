
import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component{

  render() {
    const {currentValue, setOptionValue} = this.props;
    return (
      <DatePicker
        selected={currentValue}
        onChange={event => setOptionValue(event)}
        dateFormat='dd/MM/yyy'
      />
    );
  }
}

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};





export default OrderOptionDate;