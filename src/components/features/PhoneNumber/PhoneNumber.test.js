import React from 'react';
import {shallow} from 'enzyme';
import PhoneNumber from './PhoneNumber';

const select = {
  number: '.consultantNumber',
};

const mockProps = {
  number:'The office opens at 8:00 UTC',
};

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkNumberAtTime = (time, expectedNumber) => {
  it('should show correct number at ${time}`', () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
    console.log(new Date());
  
    const component = shallow(<PhoneNumber {...mockProps} />);
    const renderedNumber = component.find(select.number).text();
    expect(renderedNumber).toEqual(expectedNumber);
  
    global.Date = trueDate;
  });
};

const checkNumberAfterTime = (time, delaySeconds, expectedNumber) => {
  it('should show correct number ${delaySeconds} seconds alter ${time}`', () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
  
    const component = shallow(<PhoneNumber {...mockProps} />);
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);
    const renderedNumber = component.find(select.number).text();
    expect(renderedNumber).toEqual(expectedNumber);
  
    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe ('Component PhoneNumber', () => {
  it('should render without crashing', () => {
    const component = shallow(<PhoneNumber />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should contains consultant number', () => {
    const component = shallow(<PhoneNumber />);
    expect(component.exists(select.number)).toEqual(true);
  });

});

describe('Component PhoneNumber during Amanda`s shift', () => {
  checkNumberAtTime('08:00:00', 'Amanda, 678.243.8455');
  checkNumberAtTime('09:38:00', 'Amanda, 678.243.8455');
  checkNumberAtTime('11:59:59', 'Amanda, 678.243.8455');
});
describe('Component PhoneNumber during Tobias`s shift', () => {
  checkNumberAtTime('12:00:00', 'Tobias, 278.443.6443');
  checkNumberAtTime('13:29:00', 'Tobias, 278.443.6443');
  checkNumberAtTime('15:59:59', 'Tobias, 278.443.6443');
});
describe('Component PhoneNumber during Helena`s shift', () => {
  checkNumberAtTime('16:00:00', 'Helena, 167.280.3970');
  checkNumberAtTime('17:10:00', 'Helena, 167.280.3970');
  checkNumberAtTime('21:59:59', 'Helena, 167.280.3970');
});
describe('Component PhoneNumber when closed', () => {
  checkNumberAtTime('22:00:00', 'The office opens at 8:00 UTC');
  checkNumberAtTime('03:46:00', 'The office opens at 8:00 UTC');
  checkNumberAtTime('07:59:59', 'The office opens at 8:00 UTC');
});
describe('Component PhoneNumber whith delay and correct phone number', () => {
  checkNumberAfterTime('21:59:58', 2, 'The office opens at 8:00 UTC');
  checkNumberAfterTime('15:59:58', 2, 'Helena, 167.280.3970');
  checkNumberAfterTime('11:59:58', 2, 'Tobias, 278.443.6443');
  checkNumberAfterTime('07:59:58', 2, 'Amanda, 678.243.8455');
});