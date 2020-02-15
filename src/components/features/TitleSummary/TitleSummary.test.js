import React from 'react';
import {shallow} from 'enzyme';
import TitleSummary from './TitleSummary';

describe('Component Title summary', () => {
  const testGenres = ['genre1', 'genre2'];
  it('should render without crashing', () => {
    const component = shallow(<TitleSummary name='Lorem ipsum' genres={testGenres}/>);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should render link to correct adress', () => {
    const expectedId = 'abc';

    const component = shallow(<TitleSummary id={expectedId} genres={testGenres}/>);
    const renderedLink = component.find('.link').prop('to');
    const expectedLink = `/title/${expectedId}`;
    expect(renderedLink).toEqual(expectedLink);
  });

  it('should render correct image', () => {
    const expectedAlt = 'img';
    const expectedSrc = 'image.jpg';
    const component = shallow(<TitleSummary name={expectedAlt} image={expectedSrc} genres={testGenres}/>);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('renders correct props - name, cost, days', () => {
    const props= {
      name: 'name',
      cost: '100$',
      days: 5,
    };

    const component = shallow(<TitleSummary name='name' cost={props.cost} days={props.days} genres={testGenres}/>);

    const renderedName = component.find('.title').text();
    const renderedDays = component.find('.details span').at(0).text();
    const renderedCost = component.find('.details span').at(1).text();
    expect(renderedName).toEqual(props.name);
    expect(renderedCost).toEqual('from '+props.cost);
    expect(renderedDays).toEqual(props.days+' days');
  });

  it('should throw error without props: id, image, name, cost, days', () => {
    expect(() => shallow(<TitleSummary />)).toThrow();
  });

  it('shouldrender correct genres arrow', () => {
    const expectedGenres = [
      'beach',
      'ski',
      'pool',
    ];

    const component = shallow(<TitleSummary genres={expectedGenres}  />);

    expect(component.find('.genre').at(0).text()).toEqual(expectedGenres[0]);
    expect(component.find('.genre').at(1).text()).toEqual(expectedGenres[1]);
    expect(component.find('.genre').at(2).text()).toEqual(expectedGenres[2]);
  });

  it('should not render div.genres without genres', () => {
    const expectedGenres = [
      'beach',
      'ski',
      'pool',
    ];

    const component = shallow(<TitleSummary genres={expectedGenres} />);
    expect(component).toBeTruthy();

  });

});
