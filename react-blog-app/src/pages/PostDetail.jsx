
import { Link, useParams } from "react-router-dom";
import { usePosts } from "../context/PostsContext";

function PostDetail() {
  const { slug } = useParams();
  const { posts } = usePosts();

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="mx-auto max-w-2xl px-5 py-24 text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-forest-100 text-3xl text-forest-700">
          ✳
        </span>

        <p className="mt-7 text-xs font-extrabold tracking-widest text-forest-700">
          404 · ARTICLE NOT FOUND
        </p>

        <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
          This story hasn't bloomed yet.
        </h1>

        <p className="mx-auto mt-4 max-w-md leading-7 text-muted">
          The article may have been moved, or the link might
          be incorrect.
        </p>

        <Link
          to="/posts"
          className="mt-7 inline-flex rounded-full bg-forest-600 px-6 py-3 text-sm font-bold text-white hover:bg-forest-700"
        >
          Explore all articles
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
      <Link
        to="/posts"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-forest-700"
      >
        ← Back to articles
      </Link>

      <header className="pb-8 pt-10">
        <span className="inline-block rounded-full bg-forest-50 px-3 py-1.5 text-xs font-bold text-forest-700">
          {post.category}
        </span>

        <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          {post.title}
        </h1>

        <p className="mt-5 text-lg leading-8 text-muted">
          {post.excerpt}
        </p>

        <div className="mt-7 flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-full bg-forest-100 font-bold text-forest-700">
            {post.author.charAt(0)}
          </span>

          <div>
            <p className="text-sm font-bold">{post.author}</p>

            <p className="mt-1 text-xs text-muted">
              {new Date(
                `${post.date}T12:00:00`
              ).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              {" · "}
              {post.readTime}
            </p>
          </div>
        </div>
      </header>

      <div className="relative flex min-h-52 items-end overflow-hidden rounded-3xl bg-forest-100 p-7 text-forest-700 sm:min-h-72 sm:p-10">
        <span className="z-10 font-heading text-3xl font-extrabold sm:text-4xl">
          {post.category}
        </span>

        <span className="absolute -bottom-20 right-4 text-[14rem] leading-none opacity-15">
          ✳
        </span>
      </div>

      <div className="mx-auto max-w-2xl py-9 text-base leading-8 text-stone-700 sm:text-lg sm:leading-9">
        {post.body.split("\n\n").map((paragraph, index) => (
          <p
            key={`${post.slug}-paragraph-${index}`}
            className="mb-6 whitespace-pre-line"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-6">
        <span className="text-sm font-semibold">
          Enjoyed this story?
        </span>

        <Link
          to="/posts"
          className="text-sm font-bold text-forest-700 hover:underline"
        >
          Read another article →
        </Link>
      </div>
    </article>
  );
}

export default PostDetail;
