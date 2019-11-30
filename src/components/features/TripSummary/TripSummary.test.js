import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component Trip summary', () => {
  it('should render link to correct adress', () => {
    const expectedId = 'abc';

    const component = shallow(<TripSummary id={expectedId} />);
    const renderedLink = component.find('.link').prop('to');
    const expectedLink = `/trip/${expectedId}`;
    expect(renderedLink).toEqual(expectedLink);
    

  });

  it('should render correct image', () => {
    const expectedAlt = 'img';
    const expectedSrc = 'image.jpg';
    const component = shallow(<TripSummary name={expectedAlt} image={expectedSrc} />);
  
    expect(component.find('.img').prop('src')).toEqual(expectedSrc);
    expect(component.find('.img').prop('alt')).toEqual(expectedAlt);
  });

  it('renders correct props - name, cost, days', () => {
    const props= {
      name: 'name',
      cost: '100$',
      days: 5,
    };

    const component = shallow(<TripSummary name={props.name} cost={props.cost} days={props.days} />);
    
    expect(component.find('.link').prop('name')).toEqual(props.name);
    expect(component.find('.link').prop('cost')).toEqual(props.cost);
    expect(component.find('.link').prop('days')).toEqual(props.days);
  });

  it('should throw error without props: id, image, name, cost, days', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('shouldrender correct tags arrow', () => {
    const expectedTags = [
      'beach',
      'ski',
      'pool',
    ];

    const component = shallow(<TripSummary propTags={expectedTags} />);
    expect(component.find('.tag').at(0).prop('tag').toEqual(expectedTags[0]));
    expect(component.find('.tag').at(1).prop('tag').toEqual(expectedTags[1]));
    expect(component.find('.tag').at(2).prop('tag').toEqual(expectedTags[2]));
  });

  it('should not render div.tags without tags', () => {
    const expectedTags = [
      'beach',
      'ski',
      'pool',
    ];

    const component = shallow(<TripSummary propTags={expectedTags} />);
    expect(component).toBeTruthy();

  });

});