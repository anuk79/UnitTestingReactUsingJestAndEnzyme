
// vendors
import React from "react";
import { shallow } from 'enzyme';
import { shallowToJson } from "enzyme-to-json";
import { debounce } from 'throttle-debounce';

// components
import UserView from './user';

jest.mock('throttle-debounce', () => {
    return {    
        debounce: jest.fn()
    }
});

describe("UserView component", () => {
    it("should render correctly", () => {
        const wrapper = shallow(<UserView 
                userDetails={{ firstName: 'test firstName', lastName: 'test lastName'}}
            />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();

        expect(debounce).toBeCalled();
        expect(wrapper.find('h3').length).toBe(1);
        expect(wrapper.find('div').length).toBe(2);
        expect(wrapper.find('span').length).toBe(2);
        expect(wrapper.find('label').length).toBe(2);
        expect(wrapper.find('h3').text()).toEqual('User Details:');
        expect(wrapper.find('span').at(0).text()).toEqual('test firstName');
        expect(wrapper.find('span').at(1).text()).toEqual('test lastName');
    });
});