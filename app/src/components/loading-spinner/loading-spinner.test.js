
// vendors
import React from "react";
import { shallow } from 'enzyme';
import { shallowToJson } from "enzyme-to-json";

// components
import LoadingSpinner from './loading-spinner';

describe("LoadingSpinner component", () => {
    it("should render correctly", () => {
        const wrapper = shallow(<LoadingSpinner customClassName="test-class"/>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('div').text()).toBe('...loading');
        expect(wrapper.find('div').prop('className')).toBe('test-class');
    });
});