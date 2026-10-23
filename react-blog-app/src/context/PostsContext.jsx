import { createContext, useContext, useEffect, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


const PostsContext = createContext(null);

const initialPosts = [
  {
    slug: "getting-started-with-react",
    title: "Getting Started with React",
    excerpt:
      "Learn how components, props, and state work together to build interactive user interfaces.",
    body: `React makes it easier to build user interfaces by breaking them into reusable components.

Start by understanding JSX, props, and state. Once these concepts make sense, practice building small components and combining them into a complete application.

The best way to learn React is to build projects and gradually add more functionality.`,
    author: "Alex Morgan",
    category: "React",
    date: "2026-10-12",
    readTime: "4 min read",
  },
  {
    slug: "understanding-react-hooks",
    title: "Understanding React Hooks",
    excerpt:
      "Explore useState, useEffect, and custom Hooks through practical examples.",
    body: `Hooks let function components use React features such as state and effects.

useState manages component state. useEffect synchronizes a component with external systems. Custom Hooks let you reuse stateful logic across components.

Learn each Hook through a small example before combining them in a larger project.`,
    author: "Jamie Chen",
    category: "React",
    date: "2026-10-14",
    readTime: "6 min read",
  },
  {
    slug: "building-better-apis",
    title: "Building Better APIs",
    excerpt:
      "Discover practical ways to structure API endpoints and keep your backend maintainable.",
    body: `A good API should be predictable, consistent, and easy to understand.

Use meaningful resource names, appropriate HTTP methods, clear status codes, and consistent error responses. Validate incoming data and keep business logic organized.

Document your endpoints and test both successful requests and error cases.`,
    author: "Taylor Reed",
    category: "Backend",
    date: "2026-10-16",
    readTime: "5 min read",
  },
];


function postsReducer(state, action) {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...state];

    default:
      return state;
  }
}

export function PostsProvider({ children }) {
  const [savedPosts, setSavedPosts] = useLocalStorage(
    "bloom-posts",
    initialPosts
  );

  const [posts, dispatch] = useReducer(postsReducer, savedPosts);

  useEffect(() => {
    setSavedPosts(posts);
  }, [posts, setSavedPosts]);

  return (
    <PostsContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);

  if (context === null) {
    throw new Error(
      "usePosts must be used inside PostsProvider"
    );
  }

  return context;
}
