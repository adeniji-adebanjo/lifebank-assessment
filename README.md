# ItemList Component Documentation

## Description

The `ItemList` component is a functional React component that fetches data from the Star Wars API (SWAPI) and displays a list of vehicles. It includes pagination for navigating through pages of data, and it provides loading indicators and error messages to enhance the user experience.

## Features

- Fetches data from a specified API endpoint.
- Displays a list of items.
- Implements pagination for large datasets.
- Handles loading and error states.
- Uses Tailwind CSS for styling.

## Props

The `ItemList` component does not accept any props.

## State

- `items` (Array): An array of items fetched from the API.
- `loading` (Boolean): Indicates whether the data is being fetched.
- `error` (Object | null): Stores any error encountered during the fetch operation.
- `page` (Number): Tracks the current page number for pagination.

## Hooks Used

- `useState`: Manages the state variables `items`, `loading`, `error`, and `page`.
- `useEffect`: Fetches data when the component mounts and when the `page` state changes.

## API Endpoint

The component fetches data from the following API endpoint:

- [https://swapi.dev/api/vehicles/](https://swapi.dev/api/vehicles/)

## Styling with Tailwind CSS

The component uses Tailwind CSS classes for styling. Ensure you have Tailwind CSS set up in your project. Here are the key classes used:

- `p-4`: Padding for the container.
- `text-blue-500`: Text color for loading state.
- `text-red-500`: Text color for error state.
- `space-y-2`: Vertical spacing between list items.
- `bg-white`: Background color for list items.
- `shadow`: Box shadow for list items.
- `rounded-lg`: Rounded corners for list items.
- `mt-4`: Margin top for pagination buttons.
- `flex justify-between`: Flexbox for pagination buttons layout.
- `bg-blue-500 text-white px-4 py-2 rounded`: Styles for pagination buttons.

## Error Handling

The component handles errors by displaying an error message if the fetch request fails. This message is displayed in red to differentiate it from other states.

## Pagination

The component includes simple pagination with "Previous" and "Next" buttons. The current page number is tracked in the state, and the `useEffect` hook refetches the data whenever the page number changes.

## Loading State

While data is being fetched, a loading indicator ("Loading...") is displayed. This indicator is styled with Tailwind CSS to provide a visual cue to the user.
