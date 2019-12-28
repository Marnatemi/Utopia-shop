import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption name='Lorem ipsum' type='type' />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render correct title', () => {
    const testTitle = 'title';
    const component = shallow(<OrderOption name={testTitle} type='number' />);

    const expectedTitle = component.find('.title').text();

    expect(expectedTitle).toEqual(testTitle);

  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    
    beforeEach(() => {
      mockSetOrderOption = jest.fn(); 
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption}
          {...mockProps}
          {...mockPropsForType[type]}
    
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });

    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);
        
          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);
        
          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        }); 
        break;
      }
      
      /* tests for icons */
      case 'icons': {
        it('contains divs with correct className', () => {
          const div = renderedSubcomponent.find('.icon');
          expect(div).toBeTruthy();
          
        });

        it('should change if clicked', () => {
          const lastIcon = renderedSubcomponent.find('.icon').at(2);
          lastIcon.simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
        
        });
        break;
      }
      
      /* tests for checkboxes */
      case 'checkboxes': {
        it('contains inputs with correct type', () => {
          const input = renderedSubcomponent.find('input');
          expect(input.at(1).prop('type')).toEqual('checkbox');

        });
        it('should run setOrderOption function on change', () => {
          const testInput = renderedSubcomponent.find('input').at(1);
  
          testInput.simulate('change', {currentTarget : {checked:true} });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: [mockProps.currentValue, testValue] });
          
        });
        break;
      }

      /* tests for number */
      case 'number': {
        it('contains correct div and input with correct type', () => {
          const div = renderedSubcomponent.find('.number');
          expect(div.length).toBe(1);

          const input = div.find('input');
          expect(input.prop('type')).toEqual('number');

        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
        }); 

        break;
      }

      /* tests for text */
      case 'text': {
        it('contain input witch correct type', () => {
          const input = renderedSubcomponent.find('input');
          expect(input.prop('type')).toEqual('text');
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        }); 
        break;
      }
      
      /* tests for date */
      case 'date': {
        it('contain date div', () => {
          expect(renderedSubcomponent.find('div').length).toBe(1);
        });
        it('should set date on change', () => {
          renderedSubcomponent.find('div input').simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
      }
    }
  });
}