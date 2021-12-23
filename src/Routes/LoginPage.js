import { React, useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../utils/firebase/indexxx";
import { useForm } from "react-hook-form";
import { authContext } from "../Authenticaton/AuthProvider";
import VisibilityIcon from '@material-ui/icons//Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {

  const [showHide, setShowHide] = useState(true)
  const {
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const [spinner, setspinner] = useState(true)

  //!object for Email and pass
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // * userData data from input fields
  const getData = (e) => {
    let naame = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [naame]: value });
  };
  const { email, password } = userData;
  const history = useHistory();

  const loginin = (e) => {
    setspinner(false)
    clearErrors('LOG_IN_ERROR') 
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
        setspinner(true)
      })
      .catch((err) => {
        setError("LOG_IN_ERROR", {
          message: err.message,
        });
      });
  };
  const {user} = useContext(authContext)
  // console.log(user)
  useEffect(() => {
    if (user) {
      // console.log(authUser);
      history.push("/");
    }
  }, [user, history]);
  return (
    <form onSubmit={loginin}>
      <div className="login-page-main-container">
        <div className="login-page-container">
          <div className="login-heading">
            <h1>Log in to MyStore</h1>
          </div>
          <p style={{ color: "red", fontSize: "0.9rem", textAlign:'center' }}>
            {errors.LOG_IN_ERROR && errors.LOG_IN_ERROR.message}
          </p>
          <div className="login-inputs-fields">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              value={userData.email}
              onChange={getData}
            />
            
            { 
              showHide ?
              <>
               <input
              type="password"
              name="password"
              id="pass"
              placeholder="Password"
              autoComplete="off"
              value={userData.password}
              onChange={getData}
            />
            <VisibilityIcon onClick={()=>setShowHide(false)} style={{position:'relative', bottom:'2.4vw', left:'22vw'}} />
            </> :
              <>
               <input
              type="text"
              name="password"
              id="pass"
              placeholder="Password"
              autoComplete="off"
              value={userData.password}
              onChange={getData}
            />
            <VisibilityOffIcon onClick={()=>setShowHide(true)} style={{position:'relative', bottom:'2.4vw', left:'22vw'}} />
            </> 
            }
            <button className="comman-btn login-btn" style={{ border: "none" }}>
              Continue With Email
            </button>
          </div>
          <div className="break-line">
            <hr /> <span>or</span> <hr />
          </div>
          <div className="login-with-google">
            <a className="comman-btn login-btn " href="">
              Continue With Google
            </a>
          </div>
          <a className="signup-link" href="/signup">
            create account
          {spinner?<p></p>:<p> <CircularProgress sx={{position:'relative', left:'2vw'}} /></p>}
          </a>
        </div>
      </div>
    </form>
  );
};

export default Login;
