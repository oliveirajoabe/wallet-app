import axios from 'axios';

/**
 *  email: 'testejoabe@email.com',
 *  password: 'batata0800',
 */
export const login = ({ email, password }: FetchLogin): Promise<LoginData> =>
  axios.post('http://192.168.100.117:5000/login', { email, password });
