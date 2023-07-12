import React, { useState } from "react";
import loginPic from "../imgs/loginPic.jpg";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState(1);
  return (
    <section className="sectionPadding">
      <div className="container">
        <div className="loginCard">
          <div className="row">
            <div className="col-md-6">
              <div className="loginPic">
                <img src={loginPic} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="loginInput">
                <h4>Admin login</h4>
                <p>
                  Enter the realm of authority, where decisions unfold - where
                  control takes hold.
                </p>

                <form action="">
                  <div className="formGroup row">
                    <div className="option" style={{ marginRight: 20 }}>
                      <div
                        className="radioBtn"
                        style={{ backgroundColor: loginType == 1 ? "#000": "#ccc" }}
                        onClick={() => setLoginType(1)}
                      ></div>
                      <label htmlFor="">OTP</label>
                    </div>
                    <div className="option">
                      <div
                        className="radioBtn"
                        style={{ backgroundColor:  loginType == 2 ? "#000": "#ccc" }}
                        onClick={() => setLoginType(2)}
                      ></div>
                      <label htmlFor="">Password</label>
                    </div>
                  </div>
                  <div className="formGroup">
                    <label className="formLabel">Username</label>
                    <input type="text" className="formControl" />
                  </div>
                  {
                    loginType == 2 &&
                  <div className="formGroup">
                    <label className="formLabel">Password</label>
                    <input type="password" className="formControl" />
                  </div>
                  
                }
                  <button
                    className="btn btnPrimary"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/signin")}
                    className="btn btnPrimary"
                    style={{marginLeft: 20}}
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
