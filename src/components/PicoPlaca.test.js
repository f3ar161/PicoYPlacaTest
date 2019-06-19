import React from 'react';
import Enzyme, { shallow }  from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import PicoPlaca from './PicoPlaca';

Enzyme.configure({ adapter: new EnzymeAdapter() });



test('Renders test', ()=>{
    const wrapper= shallow(<PicoPlaca/>);
    expect(wrapper).toBeTruthy();
} );
