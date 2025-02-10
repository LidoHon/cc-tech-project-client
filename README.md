# CC Tech Internship Entrance Test

This project is an internship entrance test for CC Tech, built using modern technologies and frameworks. It demonstrates essential features like user authentication, profile management, role-based access control, and an admin dashboard. The application is designed to give a real-world example of a web app with clean architecture and modern frontend technologies.

## Features

- **User Authentication:**
  - Sign up and log in using custom methods or third-party services.
  - Password reset functionality.
- **User Profile Management:**
  - Users can update their profile information.
  - Admin can view, update, and delete user profiles.
- **Role-Based Access Control (RBAC):**
  - Role-based access is handled using Nuxt's middleware.
  - Admin users have access to the admin dashboard, where they can manage users.
- **Admin Dashboard:**
  - Admin users can view a list of all users.
  - Admin can update or delete user profiles.
- **Dark and Light mode Toggle**
  -users can toggle between dark mode and light mode based on their personal preference

- **Frontend Technologies:**
  - **Nuxt.js:** Framework used to build the application with server-side rendering (SSR).
  - **Tailwind CSS & DaisyUI:** For responsive and utility-first design styling.
  - **Pinia:** For state management in the application.
  - **Nuxt Apollo & GraphQL-tag:** To interact with the backend API using GraphQL.
  - **VeeValidate & Yup:** For form validation to ensure data integrity and user-friendly error handling.
  - **GSAP:** For smooth text animations and transitions in the UI.

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/LidoHon/cc-tech-project-client.git
   ```

2. **Navigate into the project folder:**

   ```bash
   cd cc-tech-project-client
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root of the project and add the following variables:

   ```bash
   API_URL=your-graphql-api-url
   VITE_GO_SERVER_ENDPOINT=your-server-side-url
   ```

   Replace `your-graphql-api-url` and `your-server-side-url` with the URL for your GraphQL API endpoint.

5. **Run the development server:**

   ```bash
   npm run dev
   ```

   This will start the development server and you can view the project in your browser at `http://localhost:3000`.

## Features Walkthrough

- **Home Page:**

  - Displays animated text welcoming users.
  - Includes some links to get to know me.

- **Profile Page:**

  - Users can view and update their profile information.
  - Profile editing is available for both regular users and admin users.

- **Admin Dashboard:**

  - Admins can view a list of users and manage them.
  - Admin can update and delete user profiles.
  - Access is restricted to admin users via Nuxt middleware.

- **Authentication:**
  - User can sign up with a custom method or OAuth (Google, GitHub).
  - Login and logout functionality is available.
  - Password reset functionality.

## Technologies Used

- **Nuxt.js:** Framework for building SSR Vue.js applications.
- **Tailwind CSS & DaisyUI:** Utility-first CSS framework and component library.
- **Pinia:** State management for Vue.js applications.
- **Nuxt Apollo:** Apollo Client integration for interacting with GraphQL APIs.
- **GraphQL-tag:** Tagged template literal helper for GraphQL queries.
- **VeeValidate & Yup:** Form validation library and schema validation.
- **GSAP:** Animation library for creating smooth animations on the frontend.

## Contributing

We welcome contributions to improve the project. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add your feature'`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a pull request with a description of the changes.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Dark Mode

![Dark Mode](/public/images/dark.png)

## Light Mode

![Light Mode](/public/images/light.png)
