import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

import { SAMPLE_DATA } from '../../shared/data/googleLoginResponseSample'
// import setAuthorizationToken from '../utils/setAuthorizationToken';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  /*
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
  */
}

export function loginWithGoogle(data) {
    console.log( "googleLogin");
    
    var data =  {
      name: 'Gabriel'
    }

    axios.post('/api/auth/login', data).then(res => {  
    });
   
  /*
  return dispatch => {
    return axios.post('/api/auth/login', SAMPLE_DATA).then(res => {
      
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
        
    });
  }
  */

}