
// vendors
import React from "react";
import { shallow, mount } from 'enzyme';
import { shallowToJson } from "enzyme-to-json";

// components
import ComponentOne from './component-1';

describe("Component One", () => {
    it("should render correctly", () => {
        const wrapper = shallow(<ComponentOne />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('h1').exists()).toBeTruthy();
        expect(wrapper.find('h1').length).toBe(1);
        expect(wrapper.find('label').exists()).toBeTruthy();
        expect(wrapper.find('.username').exists()).toBeTruthy();
        expect(wrapper.find('ComponentTwo').exists()).toBeTruthy();
        expect(wrapper.find('ComponentTwo').prop('errorMessage')).toEqual('invalid user');
        expect(wrapper.find('ComponentTwo').props().errorMessage).toEqual('invalid user');
        expect(wrapper.find('ComponentTwo').props().errorMessage).toBe('invalid user');
    });
    
    it("should render correctly with children", () => {
        const wrapper = mount(<ComponentOne />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('h1').exists()).toBeTruthy();
        expect(wrapper.find('h1').length).toBe(1);
        expect(wrapper.find('label').exists()).toBeTruthy();
        expect(wrapper.find('.username').exists()).toBeTruthy();
        expect(wrapper.find('ComponentTwo').exists()).toBeTruthy();
    });

    it('should call handleChange', () => {
        const wrapper = shallow(<ComponentOne />);
        const originalAlert = window.alert;
        const alertMock = jest.fn();
        window.alert = alertMock;

        wrapper.find('ComponentTwo').prop('handleChange')({ target: { value: 'testValue' } });
        expect(alertMock).toBeCalledTimes(1);
        expect(alertMock).toBeCalledWith('The value changed to testValue');

        window.alert = originalAlert;
    });
});