
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostsContext";

function createSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { posts, dispatch } = usePosts();
  const navigate = useNavigate();

  const errors = {
    title: !title.trim() ? "Please enter a title." : "",
    body: !body.trim() ? "Please enter the post content." : "",
  };

function handleSubmit(event) {
  event.preventDefault();

  setSubmitted(true);

  if (!title.trim() || !body.trim()) {
    return;
  }

  const baseSlug = createSlug(title) || "new-post";

  let slug = baseSlug;
  let counter = 2;

  while (posts.some((post) => post.slug === slug)) {
    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }

  const newPost = {
    slug,
    title: title.trim(),
    excerpt: body.trim().slice(0, 150),
    body: body.trim(),
    author: "You",
    category: "General",
    date: new Date().toISOString().slice(0, 10),
    readTime: "1 min read",
  };

  dispatch({ type: "ADD_POST", payload: newPost });

  navigate(`/posts/${slug}`);
}
  const inputClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3 outline-none transition placeholder:text-stone-400 focus:border-forest-600 focus:ring-2 focus:ring-forest-100";

  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <Link
        to="/posts"
        className="text-sm font-semibold text-forest-700 hover:underline"
      >
        ← Back to posts
      </Link>

      <div className="mt-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-forest-700">
          Share your ideas
        </p>

        <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
          Create a new post
        </h1>

        <p className="mt-4 leading-7 text-muted">
          Write something useful, share what you have learned, and publish it
          to your blog.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-10 space-y-7 rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-9"
      >
        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-semibold"
          >
            Post title
          </label>

          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g. Learning React useReducer"
            className={inputClass}
            aria-invalid={submitted && Boolean(errors.title)}
            aria-describedby={
              submitted && errors.title ? "title-error" : undefined
            }
          />

          {submitted && errors.title && (
            <p id="title-error" role="alert" className="mt-2 text-sm text-red-600">
              {errors.title}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="body"
            className="mb-2 block text-sm font-semibold"
          >
            Post content
          </label>

          <textarea
            id="body"
            rows={10}
            value={body}
            onChange={(event) => setBody(event.target.value)}
            placeholder="Start writing your ideas here..."
            className={`${inputClass} resize-y leading-7`}
            aria-invalid={submitted && Boolean(errors.body)}
            aria-describedby={
              submitted && errors.body ? "body-error" : undefined
            }
          />

          {submitted && errors.body && (
            <p id="body-error" role="alert" className="mt-2 text-sm text-red-600">
              {errors.body}
            </p>
          )}

          <p className="mt-2 text-xs text-muted">
            {body.length} characters
          </p>
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-line pt-6 sm:flex-row sm:justify-end">
          <Link
            to="/posts"
            className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold transition hover:bg-stone-50"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-forest-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-700"
          >
            Publish post →
          </button>
        </div>
      </form>
    </section>
  );
}

export default NewPost;
