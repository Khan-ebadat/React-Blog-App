
import { Link } from "react-router-dom";
import { usePosts } from "../context/PostsContext";

function Dashboard() {
  const { posts } = usePosts();

  return (
    <section>
      <p className="text-xs font-extrabold tracking-widest text-forest-600">
        YOUR WORKSPACE
      </p>

      <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-tight">
        Welcome back.
      </h1>

      <p className="mt-3 leading-7 text-muted">
        Here's an overview of your Bloom blog.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-line bg-paper p-6">
          <p className="text-sm font-medium text-muted">
            Total articles
          </p>

          <p className="mt-3 font-heading text-4xl font-extrabold">
            {posts.length}
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-forest-50 p-6">
          <p className="text-sm font-medium text-forest-700">
            Your next step
          </p>

          <p className="mt-3 font-heading text-lg font-extrabold">
            Share an idea
          </p>

          <Link
            to="/new-post"
            className="mt-3 inline-block text-sm font-bold text-forest-700 hover:underline"
          >
            Write an article →
          </Link>
        </div>
      </div>

      <div className="mt-9">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-heading text-lg font-extrabold">
            Recent articles
          </h2>

          <Link
            to="/posts"
            className="text-sm font-semibold text-forest-700 hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="mt-4 divide-y divide-line rounded-2xl border border-line">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              to={`/posts/${post.slug}`}
              className="flex items-center justify-between gap-4 p-4 transition hover:bg-stone-50"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-bold">
                  {post.title}
                </p>

                <p className="mt-1 text-xs text-muted">
                  {post.category} · {post.readTime}
                </p>
              </div>

              <span className="shrink-0 text-forest-700">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
