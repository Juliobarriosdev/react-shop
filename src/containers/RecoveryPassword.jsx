import React from 'react';
import '../styles/RecoveryPassword.scss';

function RecoveryPassword(props) {
  return (
    <div>
          <div className="login">
        <div className="form-container">
            <img src="./Platzi_YardSale_Logos-20211206T164004Z-001/Platzi_YardSale_Logos/logo_yard_sale.svg" alt="logo" className="logo" />
            <h1 className="title">Email has been sent!</h1>
            <p className="subtitle">Please check your inbox for instruccions on how to reset the password</p>
            <div className="email-image">
                <img src="./Platzi_YardSale_Icons-20211206T164008Z-001/Platzi_YardSale_Icons/email.svg" alt="email" />
            </div>
            <button className="primary-button login-button">login</button>
                <p className="resend">
                    <span>Dodn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            
        </div>
    </div>
    </div>
  );
}

export default RecoveryPassword;