
import React from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';

// ACTIONS
import { loginWithGoogle } from '../actions/authActions';


class LoginPage extends React.Component {

  render() {

    const CLIENT_ID = "126880119231-0svetjvi1c86abenojbmp5b25ciuco69.apps.googleusercontent.com";

    return (
      <div>
        <button onClick={ this.handleClick }>test</button>
        <br/>
        <GoogleLogin
          clientId= { CLIENT_ID }
          buttonText="Login with Google"
          onSuccess={ this.onGoogleResponse }
          onFailure={ this.onGoogleResponse }
        />
      </div>
    )

  } 

  handleClick = ( event ) => {
    this.props.loginWithGoogle();
  }
   
  onGoogleResponse(response) {
    debugger;

    if ( response.error ){
      console.log(response);
    }else{
      this.props.loginWithGoogle(response);
    }

  }
  
}

export default connect( null, {loginWithGoogle} )(LoginPage);

