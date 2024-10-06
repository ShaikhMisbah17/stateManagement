// Displays a list of tasks, using Redux state to access the tasks.

import React from 'react'; // Import React library for building user interfaces.
import { useSelector } from 'react-redux'; // Import useSelector hook from React-Redux for accessing Redux state.
import Task from './Task'; // Import the Task component to render individual tasks.
import { List } from '@mui/material'; // Import List component from Material-UI for displaying a list.

export default function TaskList() {
    const tasks = useSelector((state) => state.tasks); // Use useSelector to access the 'tasks' slice from the Redux store.

    return (
        <List style={{ maxWidth: 360, margin: '0 auto' }}> {/* List component with styling to center and set max width */}
            {tasks.map(task => ( // Map over the tasks array from Redux state to create a list of Task components.
                <Task key={task.id} task={task} /> // Render each Task component with unique key and task data.
            ))}
        </List>
    );
}
