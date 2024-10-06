// Entry point for the React application that renders the App component.

import React from 'react'; // Import React to enable JSX syntax and use React features throughout the application.
import ReactDOM from 'react-dom'; // Import ReactDOM for DOM-specific methods, used here to render the application to the HTML DOM.
import './index.css'; // Import global stylesheet to apply general styles across the entire application.
import App from './App'; // Import the App component, which is the root component of your React application.
import { CssBaseline } from '@mui/material'; // Import CssBaseline from Material-UI to normalize default browser styles for a consistent look across browsers.

ReactDOM.render(
    // Wrap the application in React.StrictMode for highlighting potential problems in an application.
    // Apply Material-UI’s CssBaseline at the top level to ensure it affects the whole app.
    // Render the App component as the root component.
    <React.StrictMode> 
        <CssBaseline /> 
        <App /> 
    </React.StrictMode>,
    document.getElementById('root') // This tells ReactDOM to render the app into the DOM element with the id 'root'.
);
