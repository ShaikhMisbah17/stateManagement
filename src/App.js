// Main application component that includes other components and the Redux provider.

import React from 'react'; // Import the React library to use JSX and React features.
import { Provider } from 'react-redux'; // Import the Provider component from react-redux to make the Redux store available to the rest of the app.
import { store } from './app/store'; // Import the Redux store that holds the complete state tree of your application.
import TaskForm from './components/TaskForm'; // Import TaskForm component which is used to add new tasks.
import TaskList from './components/TaskList'; // Import TaskList component which displays a list of tasks.
import { CssBaseline, Container, Typography } from '@mui/material'; // Import CSSBaseline, Container, and Typography from Material-UI for consistent styling and layout.

function App() {
    return (
        <Provider store={store}> {/* The Provider component wraps the entire application to make the Redux store available to all nested components. */}
            <CssBaseline /> {/* CssBaseline component from Material-UI to kickstart an elegant, consistent, and simple baseline to build upon. */}
            <Container maxWidth="sm"> {/* Container component to center the content and limit its width to 'sm' (small). */}
                <Typography variant="h2" align="center" gutterBottom> {/* Typography component for styling text as a heading 2. */}
                    Task Manager {/* Title of the application displayed at the top center of the page. */}
                </Typography>
                <TaskForm /> {/* Include the TaskForm component that allows users to input and submit new tasks. */}
                <TaskList /> {/* Include the TaskList component that displays the list of tasks added. */}
            </Container>
        </Provider>
    );
}

export default App; // Export App component as the default export of this module.
