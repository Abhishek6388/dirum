import React, { useState } from "react";
import loginPic from "../imgs/loginPic.jpg";
import { useNavigate } from "react-router";

function Signin() {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(1);
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
                  {formStep == 1 ? (
                    <div class="stepOne">
                      <div className="formGroup">
                        <label className="formLabel">Profile Pic</label>
                        <input type="file" className="formControl" />
                      </div>
                      <div className="formGroup">
                        <label className="formLabel">First Name</label>
                        <input type="password" className="formControl" />
                      </div>
                      <div className="formGroup">
                        <label className="formLabel">Last Name</label>
                        <input type="password" className="formControl" />
                      </div>
                      <div className="formGroup">
                        <label className="formLabel">Email</label>
                        <input type="password" className="formControl" />
                      </div>
                      <div className="formGroup">
                        <label className="formLabel">Mobile Number</label>
                        <input type="password" className="formControl" />
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormStep(2)}
                        className="btn btnPrimary"
                      >
                        Get Otp
                      </button>
                    </div>
                  ) : formStep == 2 ? (
                    <div class="stepTwo">
                      <div className="formGroup">
                        <label className="formLabel">City</label>
                        <input type="text" className="formControl" />
                      </div>
                      <div className="formGroup">
                        <label className="formLabel">Address</label>
                        <input type="password" className="formControl" />
                      </div>
                      <div className="formGroup">
                        <label className="formLabel">Pincode</label>
                        <input type="number" className="formControl" />
                      </div>
                      <div className="formGroup">
                        <label className="formLabel">State</label>
                        <input type="password" className="formControl" />
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormStep(3)}
                        className="btn btnPrimary"
                      >
                        Submit
                      </button>
                    </div>
                  ) : formStep == 3 ? (
                    <div class="stepTwo">
                      <div className="formGroup" style={{display:"flex",marginBottom: 20}}>
                        <input type="checkbox" className="formControl" style={{width: 28,height: 28,marginRight: 10}} />
                        <label>
                          terms and condition accept with check box.
                        </label>
                      </div>
                      <button
                        type="button"
                        onClick={() => {}}
                        className="btn btnPrimary"
                      >
                        Continue
                      </button>
                    </div>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin;
