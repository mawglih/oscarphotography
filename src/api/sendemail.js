import axios from 'axios';

const URL = 'http://34.239.202.6:6565/send-email';
// const URL = 'http://localhost:6565/send-email';

export default {
  sendemail: data => {
    return axios.post(URL, data)
      .then(response => response.data);
  }
} 
