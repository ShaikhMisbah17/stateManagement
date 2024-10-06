// A form to add new tasks using Redux for state management.

import React, { useState } from 'react'; // Import React and the useState hook from the 'react' package.
import { useDispatch } from 'react-redux'; // Import the useDispatch hook from 'react-redux' to dispatch actions.
import { addTask } from '../features/tasks/taskSlice'; // Import the addTask action creator from the tasks slice.
import { TextField, Button } from '@mui/material'; // Import TextField and Button components from Material-UI.

export default function TaskForm() { // Define and export the TaskForm component.
    const [title, setTitle] = useState(''); // Use the useState hook to manage the title state of the task input.
    const dispatch = useDispatch(); // Initialize the dispatch function using the useDispatch hook.

    const handleSubmit = (e) => { // Define the handleSubmit function that will be called when the form is submitted.
        e.preventDefault(); // Prevent the default form submit behavior, which is to reload the page.
        if (title.trim()) { // Check if the title is not just whitespace.
            dispatch(addTask({ title })); // Dispatch the addTask action to add a new task to the state, passing the title as payload.
            setTitle(''); // Reset the title input to an empty string after the task is added.
        }
    };

    return ( // Render the form component.
    // The form has an onSubmit event listener attached to the handleSubmit function.
        <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', padding: 20 }}> 
            <TextField // Material-UI TextField component for inputting the task title.
                label="New Task" // Label for the input field.
                variant="outlined" // The visual variant of the text field (outlined in this case).
                value={title} // The value of the text field is bound to the title state.
                onChange={e => setTitle(e.target.value)} // Update the title state when the text field's value changes.
                fullWidth // TextField takes the full width of its container.
                style={{ marginRight: 10 }} // Style applied to the TextField, adding margin to the right.
            />
            <Button // Material-UI Button component to submit the form.
                type="submit" // Specifies that this button is the submit button for the form.
                color="primary" // Specifies the color theme of the button.
                variant="contained" // Specifies that the button should have a filled background.
            >
                Add Task 
            </Button>
        </form> // End of the form.
    );
}
