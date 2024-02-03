import React from "react";
import './ErrorState.css';
import { AppContext } from "../../App";

export const ErrorState: React.FC = () =>{
  const context = React.useContext(AppContext);
  return(
    <div className="error-state-container">
      <div className="error-header">
        <h4 className="error-title">Something went wrong!</h4>
      </div>
        <p className="error-message">
          There was an error while fetching data: {context?.errorMessage}.
        </p>
      <div className="error-button-container">
        <button onClick={context?.onRetry} className="retry-button">
          Try Again
        </button>
      </div>
    </div>
  )
};
