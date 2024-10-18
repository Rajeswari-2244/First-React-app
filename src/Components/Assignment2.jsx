import React from "react";
// import './StatusMessage.css';  // Import the CSS file

const StatusMessage = ({ status }) => {
  // Dynamically assign a class based on the status prop
  const getClassName = () => {
    switch (status) {
      case "success":
        return "status-success";
      case "error":
        return "status-error";
      case "warning":
        return "status-warning";
      default:
        return "";
    }
  };

  return (
    <div className={getClassName()}>
      <p>Status: {status}</p>
    </div>
  );
};

export default StatusMessage;
