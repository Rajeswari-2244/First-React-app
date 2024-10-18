import React, { useState } from 'react';

const ColorToggleButton = () => {
  // Step 1: Define a state variable to store the current color
  const [isBlue, setIsBlue] = useState(true);

  // Step 2: Function to handle button click and toggle color
  const toggleColor = () => {
    setIsBlue(!isBlue); // Toggle between true and false
  };

  // Step 3: Dynamic styling based on the current state
  const buttonStyle = {
    backgroundColor: isBlue ? 'blue' : 'green',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={toggleColor}>
      Click Me
    </button>
  );
};

export default ColorToggleButton;



// 1. Dynamic Styling Based on State
// Create a button that changes its background color when clicked.

// Steps:
// - Create a button component.
// - Use state to manage the button's background color.
// - Change the background color dynamically when the button is clicked (you can toggle between two colors).
// ---------------------------

// 2.Conditional Styling Based on Props
// Create a component that receives a status prop and applies different styles based on the value of the prop.

// Steps:
// - Create a component that accepts a status prop (e.g., "success", "error", "warning").
// - Use inline styles or CSS classes to apply different colors (e.g., green for "success", red for "error") based on the value of the status prop.
// - Render different styles depending on the prop passed.

// 3. Todo
