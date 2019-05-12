
// vendors
import React from "react";
import { shallow } from 'enzyme';
import { shallowToJson } from "enzyme-to-json";

// components
import Counter from './counter';

describe("Counter component", () => {
    it("should render correctly", () => {
        const wrapper = shallow(<Counter />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('p').text()).toBe('You clicked 0 times');
        expect(wrapper.find('button').length).toBe(1);
    });

    it("should change the count when button is clicked", () => {
        const wrapper = shallow(<Counter />);
        wrapper.find('button').simulate('click');
        expect(wrapper.find('p').text()).toBe('You clicked 1 times');
    });
});