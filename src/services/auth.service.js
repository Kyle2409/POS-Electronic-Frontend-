import axios from 'axios';
const API_URL = 'https://electronic-department-backend.herokuapp.com/users';
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        user_fullname: user.user_fullname,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios.post(API_URL + 'signup', {
      user_fullname: user.user_fullname,
      email: user.email,
      phone_number: user.phone_number,
      password: user.password
    });
  }
}
export default new AuthService();