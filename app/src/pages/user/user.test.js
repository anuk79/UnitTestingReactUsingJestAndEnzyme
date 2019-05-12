
// vendors
import React from "react";
import { shallow } from 'enzyme';
import { shallowToJson } from "enzyme-to-json";

// components
import { User } from './user';

describe("User component", () => {
    it("should render correctly when data is fetching", () => {
        const mockFetchUserDetails = jest.fn();
        const wrapper = shallow(<User fetching={true} fetchUserDetails={mockFetchUserDetails}
            />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('LoadingSpinner').length).toBe(1);
    });

    it("should render correctly when some error", () => {
        const mockFetchUserDetails = jest.fn();
        const wrapper = shallow(<User errorFlag={true} fetchUserDetails={mockFetchUserDetails}
            />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('.user-error').length).toBe(1);
    });

    it("should render correctly when no error and data fetching is done", () => {
        const mockFetchUserDetails = jest.fn();
        const wrapper = shallow(<User userDetails={{}} fetchUserDetails={mockFetchUserDetails}
            />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('UserView').length).toBe(1);
        expect(wrapper.find('UserView').prop('userDetails')).toEqual({});
        expect(mockFetchUserDetails).toBeCalled();
    });
});