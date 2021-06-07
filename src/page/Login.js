import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/reducers/authSlice";
import { assetsImages } from "../constants/images";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  auth,
  createUserProfileDocument,
  googleProvider,
  facebookProvider,
} from "../utils/firebase";
import firebase from "firebase";
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const uData = useSelector((state) => state.auth.data);
  console.log(uData);
  const history = useHistory();
  const [authSelectFlag, setAuthSelectFlag] = useState(false);
  const [forgotPasswordFlag, setForgotPasswordFlag] = useState(false);
  const [phoneRegisterFlag, setPhoneRegisterFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorFlg, setErrorFlg] = useState("");
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    phone: "",
  });
  const captchaRef = React.useRef(null);

  useEffect(() => {
    //setUser({displayName:'', ...uData})
    //window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')
  }, [uData]);

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = user;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUser({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const { displayName, email, password, phone } = user;
    //console.log('++++', email, password)
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reg.test(String(email).toLowerCase())) {
      setErrorFlg("email");
      setErrorMessage("Invalid Email");
    } else if (password.length < 6) {
      setErrorFlg("password");
      setErrorMessage("Password must be 8 charachter long");
    }else {
      setErrorFlg("undefined");
      setErrorMessage("");
      try {
        if (authSelectFlag) {
          const { user } = await auth.signInWithEmailAndPassword(
            email,
            password
          );
          dispatch(login({ email, uid: user.uid, token: user.refreshToken }));
          console.log("+++", user);
          alert("Login succesfully");
        } else {
          const { user: registeredUser } =
            await auth.createUserWithEmailAndPassword(email, password);
          // const data = await createUserProfileDocument(registeredUser, {
          //   displayName,
          // });
          registeredUser.sendEmailVerification();
          dispatch(login({ email, uid: user.uid, token: user.refreshToken }));
          console.log(user.uid);
          alert("Check your email and verify account");
        }
        // history.push("/");
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    }
  };


  const handleRegisterWithPhone =async(event)=> {
    event.preventDefault();
    if (user.phone.length < 10) {
      setErrorFlg("phone");
      setErrorMessage("Phone must be 10 charachter long");
    }
    else{
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(captchaRef.current, {
        'size': 'invisible'})
      const appVerifier = window.recaptchaVerifier;
      const phoneNumber = '+' + user.phone;
      auth
        .signInWithPhoneNumber(String(phoneNumber), appVerifier)
        .then(confirmResult =>
          {
          //alert("send successfully");
          const code = window.prompt('Please enter the verification ' +
          'code that was sent to your mobile device.');
          confirmResult
            .confirm(code)
            .then((result) => {
              const user = result.user;
              console.log(user)
              dispatch(login({ phoneNumber, uid: user.uid, token: user.refreshToken }));
            })
            .catch((error) => {
              alert('otp error:',error)
            });}
        )
        .catch(error =>
          alert(`Sign In With Phone Number Error: ${error.message}`)
        );
    }
  }

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };

  const forgotPassword = () => {
    auth
      .sendPasswordResetEmail(user.email)
      .then((result) => {
        console.log(result);
        alert("check your email for changing password");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signInWithSocialAccount = (provider) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;
        dispatch(
          login({ email: user.email, uid: user.uid, token: user.refreshToken })
        );
        //console.log('++++++',user.email, user.uid, token);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.error(credential, errorMessage, email);
      });
  };

  return (
    <div className="login-page-main">
      <div className='recaptcha-container' ref={captchaRef}></div>
      <div className="left-cols-main">
        <div className="logos-row">
          <img src={assetsImages.logo} />
          Inflow
        </div>
        <div className="new-row-for-descriptions">
          <div className="login-headings">
            New Music <br /> Economy
          </div>
          <p className="descriptions-main">
            Connecting fans and artists in new ways.
            <br /> Invest in artists. Collect their NFTs. and vote on their
          </p>
          <button
            className="login-btn"
            onClick={() => {
              setAuthSelectFlag(!authSelectFlag);
              setForgotPasswordFlag(false);
            }}
          >
            {authSelectFlag ? "Sign Up" : "Login"}
          </button>
          <button
            className="login-btn"
            onClick={() => setForgotPasswordFlag(!forgotPasswordFlag)}
          >
            Forgot Password
          </button>
        </div>
      </div>
      <div className="right-cols-main">
        <div className="creat-name-main">
          {" "}
          {forgotPasswordFlag
            ? "Forgot Passowrd"
            : authSelectFlag
            ? "Login Account"
            : "Create Account"}
        </div>
        {forgotPasswordFlag ? null : (
          <div className="social-icons">
            <a href="#" onClick={() => setPhoneRegisterFlag(false)}>
              {" "}
              <img src={assetsImages.envelope} style={{ color: "red" }} />
            </a>
            <a href="#" onClick={() => setPhoneRegisterFlag(true)}>
              {" "}
              <img src={assetsImages.telephone} style={{ color: "red" }} />
            </a>
            <a
              href="#"
              onClick={() => signInWithSocialAccount(facebookProvider)}
            >
              {" "}
              <img src={assetsImages.facebook} />
            </a>
            <a href="#" onClick={() => signInWithSocialAccount(googleProvider)}>
              {" "}
              <img src={assetsImages.google} />
            </a>
            <a href="#">
              {" "}
              <img src={assetsImages.twitter} style={{ color: "red" }} />
            </a>
            <a href="#">
              {" "}
              <img src={assetsImages.linkedin} />
            </a>
          </div>
        )}
        <div className="or-use">
          {forgotPasswordFlag
            ? "use email for forgot password"
            : phoneRegisterFlag
            ? "use phone number for registration"
            : authSelectFlag
            ? "or use email for login"
            : "or use email for registration"}
        </div>
        {phoneRegisterFlag ? (
          <form onSubmit={handleRegisterWithPhone}>
            <div className="comman-row-input email-row">
              <PhoneInput
                country={"us"}
                value={user.phone}
                onChange={(value) => {
                  setUser({ ["phone"]: value });
                }}
              />
            </div>
            {errorFlg == "phone" ? (
                  <div
                    style={{
                      color: "red",
                      marginTop: `-13px`,
                      marginBottom: "15px",
                      fontSize: "14px",
                    }}
                  >
                    {errorMessage}
                  </div>
                ) : null}
            <button type="submit" className="sign-up-btn">
              Register
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            {/* <form> */}
            {forgotPasswordFlag
              ? null
              : !authSelectFlag && (
                  <>
                    <div className="comman-row-input persons-row">
                      <input
                        placeholder="Name"
                        type="text"
                        name="displayName"
                        value={user.displayName}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}
            <div className="comman-row-input email-row">
              <input
                placeholder="Email"
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            {errorFlg == "email" ? (
              <div
                style={{
                  color: "red",
                  marginTop: `-13px`,
                  marginBottom: "15px",
                  fontSize: "14px",
                }}
              >
                {errorMessage}
              </div>
            ) : null}
            {forgotPasswordFlag ? null : (
              <>
                <div className="comman-row-input password-row">
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>
                {errorFlg == "password" ? (
                  <div
                    style={{
                      color: "red",
                      marginTop: `-13px`,
                      marginBottom: "15px",
                      fontSize: "14px",
                    }}
                  >
                    {errorMessage}
                  </div>
                ) : null}
              </>
            )}
            {forgotPasswordFlag ? null : (
              <button type="submit" className="sign-up-btn">
                {authSelectFlag ? "Login" : "Sign Up"}
              </button>
            )}
            {forgotPasswordFlag ? (
              <button
                type="button"
                className="sign-up-btn"
                onClick={forgotPassword}
              >
                Forgot password
              </button>
            ) : null}
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
