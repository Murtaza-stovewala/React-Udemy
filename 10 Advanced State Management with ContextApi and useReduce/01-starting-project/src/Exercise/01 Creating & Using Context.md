# Creating & Using Context

Your task is to add a *"theming"* feature to a demo app you're given by a colleague. This *"theming"* feature should be implemented with help of React's Context API.

Your main goal is to ensure that the *"Toggle Theme"* button in the `Header` component triggers a (to-be-added) `toggleTheme()` function exposed through context.

The context value should be dynamic and managed inside the `ThemeContextProvider.js` file. The current theme mode should be managed as a value that's either `'light'` or `'dark'` and exposed via a `theme` property on the overall context object.

The context object should also expose the above-mentioned `toggleTheme()` method that changes the `theme` property's value (`'light'` &lt;-&gt; `'dark'`).

The `Header` component needs access to the context to call the `toggleTheme()` method, the `Page` component will need access to apply a the CSS class `'light'` (for `theme === 'light'`) or the class `'dark'` (`theme === 'dark'`) to the `<div id="app">`.

In the end, the app should look like this if the theme was not changed or switched multiple times (i.e., `'light'` mode):
![](https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-09-26_08-56-30-df094be104b7b3bf6669f94ebd7cf6e1.jpg)
And it should look like this, if theme was toggled to `'dark'`:
![](https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-09-26_08-56-31-89968d8cf8d8725e2d10d39027c8d69e.jpg)
**Important:** In this Udemy exercise workspace, any React Hooks (and other React functions!) must be accessed directly on the imported `React` object (`import React from 'react'`) - for example: `React.useState()`.