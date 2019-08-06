import mockAxios from '../__mocks__/axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {getAdvice,getSpecificAdvice} from '../Action'
import reducer from '../reducers'

describe('test',()=>{
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore()
const initialState={data:'Look both ways before crossing the street'};
const expectedActions = [
{type:'RESPONSE_ADVICE_SUCCESS'} 
]
const expectReducer={
data:'Smile and the world smiles with you. Frown and you\'re on your own'
}

it('Reducer Test',async () => {

mockAxios.post.mockImplementationOnce(() =>
  Promise.resolve({ data: "mockData" }),
);
mockAxios.get.mockImplementationOnce(() =>
  Promise.resolve({ data: "haha" }),
);

expect(reducer({data:""}, { 
    type: 'RESPONSE_ADVICE_SUCCESS',
    payload:{data:{slip:{advice:'Look both ways before crossing the street'}}}
  })).toEqual({...initialState});
});

mockAxios.post.mockImplementationOnce(() =>
Promise.resolve({ data: "mockData" }),
);
mockAxios.get.mockImplementationOnce(() =>
Promise.resolve({ data: "22" }),
);

it('Redux Action test', async () => {

  await store.dispatch(getAdvice())

  expect(store.getActions()).toEqual( [{"payload": {"data": "22"}, "type": "RESPONSE_ADVICE_SUCCESS"}])

  let test2=await store.dispatch(getSpecificAdvice(2))

  expect(store.getActions()[1]).toEqual( {"payload": {"data": "haha"}, "type": "RESPONSE_ADVICE_SUCCESS"})
  expect(mockAxios.get).toHaveBeenCalledTimes(2)
  expect(mockAxios.get).toHaveBeenCalledWith(
    'https://api.adviceslip.com/advice/2')
  });
});