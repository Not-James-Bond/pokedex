import React from 'react';

import { useNavigate } from 'react-router-dom';

import RocketImg from '../../assets/images/team-rocket.svg';

import '../../App.css';
import './errorPage-styles.scss';

function ErrorPage() {
  const navigate = useNavigate();
  const changeNavigate = () => navigate(-1);
  return (
    <div className="error-page-container">
      <div className="error-404-container">
        <p className="error-404">404</p>
        <img className="team-rocket-image" src={RocketImg} alt="Team Rocket" />
      </div>
      <p className="error-msg-paragraph">
        <span className="span-error">The rocket team</span> has won this time
      </p>
      <div className="error-page-return-button" onClick={changeNavigate}>
        <button className="return-button">Return</button>
      </div>
    </div>
  );
}

export default ErrorPage;
