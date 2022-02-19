import React from 'react';
import RocketImg from '../../assets/images/ImgTeamRocket.svg';
import error404 from '../../assets/images/404.png'; //Remove Later
import '../../styles/ErrorPage.scss';
import ReturnButton from '../returnButton/ReturnButton';
function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-404-container">
        <img className="error-404-image" src={error404} alt="Error 404" />
        <img className="team-rocket-image" src={RocketImg} alt="Team Rocket" />
      </div>
      <div className="error-msg">
        <p className="error-msg-para">
          <span className="span-error">The rocket team</span> has won this time
        </p>
      </div>
      <span className="errorPage-button-container">
        <ReturnButton />
      </span>
    </div>
  );
}

export default ErrorPage;
