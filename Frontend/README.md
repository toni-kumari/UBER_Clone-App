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

### User Signup Page

The User Signup page allows new users to create an account. It includes fields for first name, last name, email, and password, a signup button, and a link to the login page for existing users.

### Captain Login Page

The Captain Login page allows captains to log in with their email and password. It includes fields for email and password, a login button, and a link to the signup page for new captains.

### Captain Signup Page

The Captain Signup page allows new captains to create an account. It includes fields for first name, last name, email, and password, a signup button, and a link to the login page for existing captains.

## Important Files

### `src/pages/Home.jsx`

This file contains the Home component which displays the home page with a background image, Uber logo, and a button to navigate to the login page.

### `src/pages/UserLogin.jsx`

This file contains the UserLogin component which provides a form for users to log in with their email and password. It also includes a link to the signup page for new users.

### `src/pages/UserSignup.jsx`

This file contains the UserSignup component which provides a form for new users to create an account with their first name, last name, email, and password. It also includes a link to the login page for existing users.

### `src/pages/CaptainLogin.jsx`

This file contains the CaptainLogin component which provides a form for captains to log in with their email and password. It also includes a link to the signup page for new captains.

### `src/pages/CaptainSignup.jsx`

This file contains the CaptainSignup component which provides a form for new captains to create an account with their first name, last name, email, and password. It also includes a link to the login page for existing captains.

### `src/App.jsx`

This file sets up the routing for the application, defining routes for the Home, UserLogin, UserSignup, CaptainLogin, and CaptainSignup pages.

### `src/context/userContext.jsx`

This file contains the UserContext component which provides context for user data throughout the application. It uses `createContext` and `useState` to manage and provide user data.
