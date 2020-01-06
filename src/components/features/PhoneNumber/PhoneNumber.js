import React from 'react';
import styles from './PhoneNumber.scss';
import PropTypes from 'prop-types';

const consultantNumber = {
  Amanda: 'Amanda, 678.243.8455',
  Tobias: 'Tobias, 278.443.6443',
  Helena: 'Helena, 167.280.3970',
};

class PhoneNumber extends React.Component {
  constructor(){
    super();
  
    setInterval( () => {this.forceUpdate();}, 1000);
  }

  render () {
    let {number} = this.props;

    const currentTime = new Date();
    const currentHour = currentTime.getUTCHours();
    //console.log(currentHour);

    if( currentHour >= 8 && currentHour < 12){
      number = consultantNumber.Amanda;
    } else if ( currentHour >= 12 && currentHour < 16){
      number = consultantNumber.Tobias;
    } else if ( currentHour >= 16 && currentHour < 22){
      number = consultantNumber.Helena;
    }

    return (
      <p className={styles.consultantNumber}>{number}</p>
    );
  }
}


PhoneNumber.propTypes = {
  number: PropTypes.string,
};

export default PhoneNumber;