# 🌿 Bloom — React Blog App

Bloom is a modern, responsive blog application built with React. It demonstrates core React concepts through post creation, dynamic routing, protected dashboard access, state management, and a clean Tailwind CSS interface.

## ✨ Features

- **Home Page:** Modern landing page with featured posts.
- **Post Listing:** Browse posts with live search and filtering.
- **Post Details:** Dynamic routes using post slugs, with a friendly message for missing posts.
- **Create Posts:** Controlled form inputs, validation, unique slug generation, and instant navigation.
- **State Management:** React Context API and `useReducer` for managing posts and authentication.
- **Protected Routes:** Redirect unauthenticated users to the login page and return them to their intended destination after login.
- **Persistent Posts:** Custom `useLocalStorage` Hook saves posts in the browser across refreshes.
- **Lazy Loading:** Dashboard loaded using `React.lazy` and `Suspense`.
- **Responsive UI:** Styled with Tailwind CSS.
- **Custom 404 Page:** Friendly fallback for unknown routes.

## 🛠️ Tech Stack

- React 18
- JavaScript (ES6+)
- Vite
- React Router v6
- Context API
- `useReducer`, `useState`, `useEffect`, and `useMemo`
- Custom React Hooks
- Tailwind CSS
- HTML5 and CSS

## 📂 Project Structure

```text
src/
├── components/
│   └── ProtectedRoute.jsx
├── context/
│   ├── AuthContext.jsx
│   └── PostsContext.jsx
├── hooks/
│   └── useLocalStorage.js
├── layouts/
│   ├── MainLayout.jsx
│   └── DashboardLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── PostList.jsx
│   ├── PostDetail.jsx
│   ├── NewPost.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   └── NotFound.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- Git installed

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd YOUR_PROJECT_FOLDER
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

### Production Build

To verify the production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🔐 Authentication Note

This project currently uses demo authentication. Any non-empty email and password can be used to sign in.

Authentication state is maintained in React memory and resets when the page is refreshed. This implementation is intended for demonstrating React state management and protected routing, not production security.

## 💾 Data Persistence

Posts are stored in browser `localStorage`, allowing newly created posts to remain available after refreshing the page in the same browser.

This is client-side persistence, not a shared database. Clearing browser storage or using a different browser may remove or hide saved posts.

## 📚 React Concepts Demonstrated

- Component composition and reusable layouts
- Props and children
- Controlled forms and event handling
- Immutable state updates
- Context API and `useReducer`
- Custom Hooks
- `useEffect` and `useMemo`
- Dynamic routing with `useParams`
- Protected routes with `Navigate` and `useLocation`
- Navigation with `useNavigate`
- Code splitting with `React.lazy` and `Suspense`
- Browser storage with `localStorage`

## 🎯 Project Goal

Bloom was built as a hands-on React portfolio project to practice and demonstrate practical React development skills through a complete multi-page application.

## 📄 License

This project is available for learning and portfolio demonstration. Add a license file if you intend to distribute it under specific license terms.
