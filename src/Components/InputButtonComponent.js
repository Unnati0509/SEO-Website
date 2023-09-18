import React from 'react';
import './InputButtonComponent.css';

const InputButtonComponent = ({setUrl,url,loading}) => {
  return (
    <div className="centered-container">
      <input type="text" placeholder="Enter URL" 
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        disabled={loading} 
      />
      <button type = "submit" disabled={loading}>
      {loading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
};

export default InputButtonComponent;