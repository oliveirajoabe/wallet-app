import axios from 'axios';

/**
 *  USUARIO TESTE:
 *  -email: 'testejoabe@email.com',
 *  -password: 'batata0800',
 */

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const login = ({ email, password }: FetchLogin): Promise<LoginData> =>
  axios.post(`${apiUrl}/login`, { email, password });

export const logout = ({ userId, accessToken }: FetchLogout) =>
  axios.patch(
    `${apiUrl}/logout/${userId}`,
    {},
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
