import instance from '../axiosConfig';
import Cookies from 'js-cookie';

export const handleOIDCLogin = () => {
  instance.get('/oidc/authenticate/')
      .then((response) => {
        Cookies.set('sessionid', response.data['sessionid'],
            {
              expires: new Date(new Date().getTime() + 2000),
              sameSite: 'lax',
            });
        window.location.assign(response.data['url']);
      })
      .catch(() => {
        alert('Error logging in please try again');
      });
};

export const handleOIDCLogout = () => {
  // tell backend to log out the user
  instance.post('/oidc/logout/').then();
  // flush our storage regardless of successful backend logout
  window.localStorage.removeItem('access_token');
  window.location.assign('/');
};


