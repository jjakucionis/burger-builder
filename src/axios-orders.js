import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-5eddd.firebaseio.com/'
});

export default instance;