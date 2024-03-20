import axios from 'axios';

class RestApi {
  static hello() {
    return axios.get('/api/hello');
  }
}

export default RestApi;
