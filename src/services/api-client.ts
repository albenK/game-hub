import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6a958846af014d9db62921c3b1378db9'
    }
});
