
import { Link } from "react-router-dom";
import { usePosts } from "../context/PostsContext";

function Home() {
  const { posts } = usePosts();

  const featuredPosts = posts.slice(0, 3);

  const coverColors = [
    "bg-forest-100 text-forest-700",
    "bg-orange-100 text-orange-800",
    "bg-teal-100 text-teal-800",
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <section className="grid items-center gap-12 py-14 md:grid-cols-2 md:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-forest-100 bg-white px-3 py-2 text-xs font-bold tracking-widest text-forest-700">
            <span className="size-2 rounded-full bg-forest-600" />
            A SPACE FOR CURIOUS MINDS
          </span>

          <h1 className="mt-7 font-heading text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Good ideas deserve{" "}
            <span className="text-forest-600">
              a place to grow.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-muted sm:text-lg">
            Discover thoughtful stories about technology,
            creativity, and the things we're learning along
            the way.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/posts"
              className="inline-flex items-center gap-3 rounded-full bg-forest-600 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-forest-700"
            >
              Explore articles <span>↗</span>
            </Link>

            <Link
              to="/new-post"
              className="rounded-full border border-line bg-white px-6 py-3.5 text-sm font-bold transition hover:bg-forest-50"
            >
              Share your ideas
            </Link>
          </div>

          <p className="mt-8 text-sm text-muted">
            ✳ Made for people who love to learn and build.
          </p>
        </div>

        <div className="relative grid min-h-80 place-items-center overflow-hidden rounded-[2rem] bg-forest-100 p-8 sm:min-h-[420px]">
          <div className="relative grid aspect-square w-4/5 max-w-72 place-items-center rounded-full border border-forest-600/20 bg-[#d9e3cf]">
            <span className="absolute -right-3 -top-8 text-7xl text-forest-600/70">
              ✳
            </span>

            <span className="rotate-[-7deg] font-heading text-4xl font-extrabold leading-tight tracking-tight text-forest-700 sm:text-5xl">
              THINK.
              <br />
              WRITE.
              <br />
              GROW.
            </span>
          </div>

          <div className="absolute bottom-5 right-4 flex max-w-64 items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-xl sm:bottom-8 sm:right-6">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-forest-50 text-2xl text-forest-700">
              ✎
            </span>

            <div>
              <p className="text-sm font-bold">Your next idea</p>
              <p className="mt-1 text-xs leading-5 text-muted">
                Starts with a first sentence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-14 sm:py-16">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold tracking-[0.15em] text-forest-600">
              FRESH FROM THE JOURNAL
            </p>

            <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              Stories to get you thinking.
            </h2>
          </div>

          <Link
            to="/posts"
            className="text-sm font-bold text-forest-700 hover:underline"
          >
            View all articles →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <Link
              to={`/posts/${post.slug}`}
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-line bg-white transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`relative flex min-h-36 items-end justify-between overflow-hidden p-5 ${
                  coverColors[index % coverColors.length]
                }`}
              >
                <span className="z-10 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold">
                  {post.category}
                </span>

                <span className="absolute -bottom-9 right-2 text-8xl opacity-20">
                  ✳
                </span>
              </div>

              <div className="p-5">
                <span className="text-xs text-muted">
                  {post.readTime}
                </span>

                <h3 className="mt-3 font-heading text-lg font-bold tracking-tight group-hover:text-forest-700">
                  {post.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">
                  {post.excerpt}
                </p>

                <span className="mt-5 inline-block text-sm font-bold text-forest-700">
                  Read story ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-4 flex flex-col items-start justify-between gap-6 rounded-3xl bg-forest-100 p-7 sm:p-10 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-extrabold tracking-widest text-forest-700">
            YOUR TURN
          </p>

          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
            Have something worth sharing?
          </h2>

          <p className="mt-3 max-w-xl leading-7 text-stone-600">
            Every great article starts with an idea. Put yours
            into words.
          </p>
        </div>

        <Link
          to="/new-post"
          className="shrink-0 rounded-full bg-forest-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-forest-700"
        >
          Start writing ↗
        </Link>
      </section>
    </div>
  );
}

export default Home;
