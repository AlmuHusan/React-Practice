import React from 'react';
import { configure } from 'enzyme';
import { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App}  from '../App';
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import mockAxios from '../__mocks__/axios';

configure({ adapter: new Adapter() });

mockAxios.get.mockImplementationOnce(() =>
Promise.resolve({data:{slip:{advice:'Look both ways before crossing the street'}}}),
)

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)


it('label exist', async() => {

  const getAdviceMock = jest.fn(() => "ji");
  const component =  shallow(<App data="hi" getSpecificAdvice={getAdviceMock}/> );
  const label=component.find('#label');
  expect(getAdviceMock.mock.calls.length).toBe(1);
  expect(label.text()).toEqual('hi');


});