import React from 'react';

import ReturnButton from '../../Components/returnButton/ReturnButton';

import './ErrorPage.scss';

import RocketImg from '../../assets/images/ImgTeamRocket.svg';

function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-404-container">
        <p className='error-404'>404</p>
        <img className="team-rocket-image" src={RocketImg} alt="Team Rocket" />
      </div>
      <div className="error-msg">
        <p className="error-msg-para">
          <span className="span-error">The rocket team</span> has won this time
        </p>
      </div>
      <span className="error-page-button-container">
        <ReturnButton />
      </span>
    </div>
  );
}

export default ErrorPage;
