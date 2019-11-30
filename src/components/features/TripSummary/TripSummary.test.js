import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component Trip summary', () => {
  const testTags = ['tag1', 'tag2'];
  it('should render without crashing', () => {
    const component = shallow(<TripSummary name='Lorem ipsum' tags={testTags}/>);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should render link to correct adress', () => {
    const expectedId = 'abc';

    const component = shallow(<TripSummary id={expectedId} tags={testTags}/>);
    const renderedLink = component.find('.link').prop('to');
    const expectedLink = `/trip/${expectedId}`;
    expect(renderedLink).toEqual(expectedLink);
    

  });

  it('should render correct image', () => {
    const expectedAlt = 'img';
    const expectedSrc = 'image.jpg';
    const component = shallow(<TripSummary name={expectedAlt} image={expectedSrc} tags={testTags}/>);
  
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('renders correct props - name, cost, days', () => {
    const props= {
      name: 'name',
      cost: '100$',
      days: 5,
    };

    const component = shallow(<TripSummary name='name' cost={props.cost} days={props.days} tags={testTags}/>);
    
    const renderedName = component.find('.title').text();
    const renderedDays = component.find('.details span').at(0).text();
    const renderedCost = component.find('.details span').at(1).text();
    expect(renderedName).toEqual(props.name);
    expect(renderedCost).toEqual('from '+props.cost);
    expect(renderedDays).toEqual(props.days+' days');
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

    const component = shallow(<TripSummary tags={expectedTags}  />);

    expect(component.find('.tag').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render div.tags without tags', () => {
    const expectedTags = [
      'beach',
      'ski',
      'pool',
    ];

    const component = shallow(<TripSummary tags={expectedTags} />);
    expect(component).toBeTruthy();

  });

});