import axios from 'axios';

export default axios.get({
    baseURL: 'https://fortnite-api.theapinetwork.com/upcoming/get',
    headers:{
       Authorization: '9d5b6ba6e3b17cd790ba96327f3e8dcb'
    }
});