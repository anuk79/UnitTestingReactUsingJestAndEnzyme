
// vendors
import React from "react";
import { shallow } from 'enzyme';
import { shallowToJson } from "enzyme-to-json";

// components
import ComponentTwo from './component-2';

describe("Component Two", () => {
    it("should render correctly", () => {
        const wrapper = shallow(<ComponentTwo />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('input').exists()).toBeTruthy();
        expect(wrapper.find('.error-message').exists()).toBeFalsy();
    });

    it("should render correctly when error in props", () => {
        const wrapper = shallow(<ComponentTwo 
            username='test user name' 
            isError={true} 
            errorMessage='test error message' 
        />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('input').exists()).toBeTruthy();
        expect(wrapper.find('.error-message').exists()).toBeTruthy();
    });

    it('should call handleChange of props when input value changes', () => {
        const handleChangeMock = jest.fn();
        const wrapper = shallow(<ComponentTwo handleChange={handleChangeMock}/>);
        wrapper.find('input').simulate('change')
        expect(handleChangeMock).toBeCalled();
    });
});