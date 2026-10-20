
import { Link } from "react-router-dom";

function NewPost() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <Link
        to="/posts"
        className="text-sm font-medium text-muted hover:text-forest-700"
      >
        ← Back to articles
      </Link>

      <div className="mt-8">
        <p className="text-xs font-extrabold tracking-widest text-forest-600">
          YOUR NEXT STORY
        </p>

        <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight">
          Create something meaningful.
        </h1>

        <p className="mt-4 leading-7 text-muted">
          Turn your thoughts into a story worth sharing.
        </p>
      </div>

      <div className="mt-8 rounded-3xl border border-line bg-white p-6 sm:p-9">
        <p className="text-sm leading-7 text-muted">
          The controlled title and body fields, submit-only
          validation, slug generation, and reducer integration
          will be implemented in Step 4.
        </p>

        <Link
          to="/posts"
          className="mt-6 inline-flex rounded-full bg-forest-600 px-5 py-3 text-sm font-bold text-white hover:bg-forest-700"
        >
          Browse articles
        </Link>
      </div>
    </section>
  );
}

export default NewPost;
