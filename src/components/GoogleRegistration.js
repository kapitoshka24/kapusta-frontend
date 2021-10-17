import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/operations';
import GoogleLogin from 'react-google-login';
import googleSymbol from '../images/google-symbol.svg';
import loginStyles from '../styles/Login.module.scss';

export default function GoogleRegistration() {
  const dispatch = useDispatch();
  let user = {};
  const responseGoogle = res => {
    if (res.profileObj) {
      user = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        googleId: res.profileObj.googleId,
        picture: res.profileObj.imageUrl,
      };
      dispatch(authOperations.registerWithGoogle(user));
    }
  };
  const responseError = error => {
    console.log(error.message);
  };

  return (
    <div>
      <GoogleLogin
        clientId="634735810645-al9bj1ogo2dc2nbahur71e0t35kin088.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseError}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <button
            onClick={renderProps.onClick}
            className={loginStyles.googleBtn}
          >
            <img
              src={googleSymbol}
              alt="Google Symbol"
              className={loginStyles.googleSymbol}
            />
            Google
          </button>
        )}
        buttonText="Login"
      />
    </div>
  );
}
