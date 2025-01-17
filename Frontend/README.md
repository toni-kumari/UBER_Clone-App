# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Pages

### Home Page

The Home page provides a starting point for users. It includes a background image, the Uber logo, and a button to continue to the login page.

### User Login Page

The User Login page allows users to log in with their email and password. It includes fields for email and password, a login button, and a link to the signup page for new users.

## Important Files

### `src/pages/Home.jsx`

This file contains the Home component which displays the home page with a background image, Uber logo, and a button to navigate to the login page.

### `src/pages/UserLogin.jsx`

This file contains the UserLogin component which provides a form for users to log in with their email and password. It also includes a link to the signup page for new users.

### `src/App.jsx`

This file sets up the routing for the application, defining routes for the Home, UserLogin, UserSignup, CaptainLogin, and CaptainSignup pages.
