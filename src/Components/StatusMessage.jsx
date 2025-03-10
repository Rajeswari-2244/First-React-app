import React from "react";

const StatusMessage = ({ status }) => {
  // Define inline styles for each status
  const styles = {
    success: {
      color: "green",
      border: "1px solid green",
      padding: "10px",
    },
    error: {
      color: "red",
      border: "1px solid red",
      padding: "10px",
    },
    warning: {
      color: "orange",
      border: "1px solid orange",
      padding: "10px",
    },
  };

  // Choose the style based on the status prop
  const getStyle = () => {
    switch (status) {
      case "success":
        return styles.success;
      case "error":
        return styles.error;
      case "warning":
        return styles.warning;
      default:
        return {};
    }
  };

  return (
    <div style={getStyle()}>
      <p>Status: {status}</p>
    </div>
  );
};

export default ;
