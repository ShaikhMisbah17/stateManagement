// Displays an individual task item, using Redux for deleting a task.

import React from 'react'; // Import React library for building user interfaces.
import { useDispatch } from 'react-redux'; // Import useDispatch hook from React-Redux to dispatch actions.
import { deleteTask } from '../features/tasks/taskSlice'; // Import deleteTask action creator from the task slice.
import { ListItem, ListItemText, IconButton } from '@mui/material'; // Import Material-UI components for UI rendering.
import DeleteIcon from '@mui/icons-material/Delete'; // Import DeleteIcon for the delete button.

export default function Task({ task }) { // Define and export Task component that receives a task object as a prop.
    const dispatch = useDispatch(); // Initialize dispatch function to send actions to the Redux store.

    return (
        <ListItem> {/* ListItem component from Material-UI to display each task as a list item. */}
            <ListItemText primary={task.title} /> {/* ListItemText displays the title of the task. */}
            <IconButton 
                onClick={() => dispatch(deleteTask(task.id))} // IconButton that dispatches the deleteTask action when clicked.
                edge="end" 
                aria-label="delete" // Accessibility label for the delete button.
            >
                <DeleteIcon /> 
            </IconButton>
        </ListItem>
    );
}
