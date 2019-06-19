import React from 'react';
import Enzyme, { shallow }  from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import ModalConfirmation from './ModalConfirmation';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/*Factory function to create a shallowWrapper for App component
* @function setup
* @param {object} props - Component props specific to this setup
* @params {object} state - Initial state for setup
* @return {ShallowWrapper}
* */

const setup = (props={}, state=null)=>{
    const wrapper = shallow(<App {...props}/>);
    if (state) wrapper.setState(state);
    return wrapper;
};

/*
* Return ShallowWrapper containing node(s) with the given data-test value.
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
* @param {string} val - Value of data-test attribute for search.
* @returns {ShallowWrapper}
* */

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[className="${val}"]`);
};

test('Renders test', ()=>{
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
});

test('Test modal', ()=>{
    const wrapper = setup();
    const initialModalState = wrapper.state('isOpen');
    expect(initialModalState).toBe(false);
});



