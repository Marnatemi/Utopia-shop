import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  description: '.promoDescription',
};

const mockProps = {
  title: 'HappyHour!',
  promoDescription: 'It&quot s your time! Take advantage of Happy Hour! All offers 20% off!',
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js');
  utilsModule.formatTime = jest.fn(seconds => seconds);
});

describe ('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should contains title and description', () => {
    const component = shallow(<HappyHourAd />);

    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.description)).toEqual(true);
  });

  it('should render correct title', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    const componentTitle = component.find(select.title);
    const expectedTitle = mockProps.title;

    expect(componentTitle.text()).toBe(expectedTitle);
  });
});

