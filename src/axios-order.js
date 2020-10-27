import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-633ea.firebaseio.com/'
});

export default instance;