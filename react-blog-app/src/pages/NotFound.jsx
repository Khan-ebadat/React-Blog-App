
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-2xl flex-col items-center justify-center px-5 py-16 text-center">
      <span className="rounded-2xl bg-forest-100 px-5 py-3 font-heading text-2xl font-extrabold text-forest-700">
        404
      </span>

      <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
        Looks like you're off the page.
      </h1>

      <p className="mt-4 max-w-md leading-7 text-muted">
        The page you're looking for doesn't exist, or the
        link may have changed.
      </p>

      <Link
        to="/"
        className="mt-7 rounded-full bg-forest-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-forest-700"
      >
        Return home
      </Link>
    </section>
  );
}

export default NotFound;
