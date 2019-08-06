export default function Reducer (state = "", action) {
    switch (action.type) {
        case 'RESPONSE_ADVICE_SUCCESS':
            console.log(action.payload.data.slip.advice);
            return action.payload.data.slip.advice;
        default:
            return state;
    }
}