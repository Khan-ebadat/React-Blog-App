
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../context/PostsContext";

const covers = [
  "bg-forest-100 text-forest-700",
  "bg-orange-100 text-orange-800",
  "bg-teal-100 text-teal-800",
];

function PostList() {
  const { posts } = usePosts();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return posts;

    return posts.filter((post) =>
      [
        post.title,
        post.excerpt,
        post.category,
        post.author,
      ].some((value) =>
        value.toLowerCase().includes(query)
      )
    );
  }, [posts, searchTerm]);

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-extrabold tracking-[0.16em] text-forest-600">
            THE BLOOM JOURNAL
          </p>

          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight sm:text-6xl">
            Ideas worth{" "}
            <span className="text-forest-600">exploring.</span>
          </h1>

          <p className="mt-4 max-w-xl leading-7 text-muted">
            Stories, insights, and practical lessons from
            people who love building things.
          </p>
        </div>

        <Link
          to="/new-post"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-forest-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-forest-700"
        >
          <span>＋</span> Write an article
        </Link>
      </div>

      <div className="mt-10 flex max-w-2xl items-center gap-3 rounded-2xl border border-line bg-white px-4 py-4 transition focus-within:border-forest-600 focus-within:ring-4 focus-within:ring-forest-100">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="size-5 shrink-0 text-muted"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m16 16 4 4" />
        </svg>

        <input
          type="search"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
          placeholder="Search articles, topics, authors..."
          aria-label="Search blog posts"
          className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-stone-400"
        />

        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="shrink-0 text-sm font-bold text-forest-700 hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      <div className="mb-6 mt-12 flex items-center justify-between gap-4">
        <h2 className="font-heading text-xl font-extrabold tracking-tight">
          Latest stories
        </h2>

        <span className="text-sm text-muted">
          {filteredPosts.length}{" "}
          {filteredPosts.length === 1 ? "article" : "articles"}
        </span>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-line bg-white transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link
                to={`/posts/${post.slug}`}
                aria-label={`Read ${post.title}`}
                className={`relative flex min-h-44 items-end justify-between overflow-hidden p-6 ${
                  covers[index % covers.length]
                }`}
              >
                <span className="z-10 font-heading text-2xl font-extrabold tracking-tight">
                  {post.category}
                </span>

                <span className="absolute -bottom-10 right-2 text-9xl opacity-15">
                  {post.category === "Backend" ? "{}" : "✳"}
                </span>
              </Link>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-forest-50 px-3 py-1.5 text-xs font-bold text-forest-700">
                    {post.category}
                  </span>

                  <span className="text-xs text-muted">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-extrabold leading-snug tracking-tight">
                  <Link
                    to={`/posts/${post.slug}`}
                    className="transition group-hover:text-forest-700"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-muted">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-forest-100 font-bold text-forest-700">
                      {post.author.charAt(0)}
                    </span>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold">
                        {post.author}
                      </p>

                      <p className="mt-1 text-xs text-muted">
                        {new Date(
                          `${post.date}T12:00:00`
                        ).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/posts/${post.slug}`}
                    aria-label={`Read ${post.title}`}
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-line transition hover:bg-forest-600 hover:text-white"
                  >
                    ↗
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
          <span className="text-4xl text-forest-600">⌕</span>

          <h3 className="mt-5 font-heading text-xl font-extrabold">
            No articles found
          </h3>

          <p className="mt-2 text-sm text-muted">
            Try a different keyword or clear your search.
          </p>

          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="mt-6 rounded-full bg-forest-600 px-5 py-3 text-sm font-bold text-white hover:bg-forest-700"
          >
            Clear search
          </button>
        </div>
      )}
    </section>
  );
}

export default PostList;
