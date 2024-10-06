// This file sets up the Redux store using the Redux Toolkit.

import { configureStore } from '@reduxjs/toolkit'; // Import the configureStore function from Redux Toolkit, used to configure the Redux store.

import taskReducer from '../features/tasks/taskSlice'; // Import the taskReducer from the taskSlice file located in the features/tasks directory.

export const store = configureStore({ // Create and export a Redux store by calling configureStore.
    reducer: { // Define the reducer object where you map state slices to their respective reducers.
        tasks: taskReducer, // Assign the taskReducer to manage the 'tasks' slice of the state.
    },
});
