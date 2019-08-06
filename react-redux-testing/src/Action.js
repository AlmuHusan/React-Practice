import axios from 'axios';

export const getAdvice = () => async(dispatch) => {
    let data=await axios.get('https://api.adviceslip.com/advice');
    dispatch ({
        type: 'RESPONSE_ADVICE_SUCCESS',
        payload: data
    });
}

export const getSpecificAdvice = (id) => async (dispatch) => {
    let data= await axios.get(`https://api.adviceslip.com/advice/${id}`);
    console.log(data)
    dispatch ({
        type: 'RESPONSE_ADVICE_SUCCESS',
        payload: data
    });
}
