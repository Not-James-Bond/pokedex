import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
function ReturnButton() {
  const navigate = useNavigate();
  return (
    <div className="ErrorPage-return-button" onClick={() => navigate(-1)}>
      <button className="return-button">Return</button>
    </div>
  );
}

export default ReturnButton;
