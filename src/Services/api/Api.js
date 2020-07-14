import axios from  'axios';

const Api = axios.create({ baseURL: 'https://api-women-ti.herokuapp.com/api' })

export default Api;