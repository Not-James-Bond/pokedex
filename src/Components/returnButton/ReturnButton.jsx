import React from 'react';

import { useNavigate } from 'react-router-dom';

import '../../App.css';

function ReturnButton() {
  const navigate = useNavigate();
  return (
    <div className="error-page-return-button" onClick={() => navigate(-1)}>
      <button className="return-button">Return</button>
    </div>
  );
}

export default ReturnButton;
