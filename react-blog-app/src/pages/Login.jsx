
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from?.pathname || "/dashboard";

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter both your email and password.");
      return;
    }

    setError("");
    login(email.trim());
    navigate(redirectTo, { replace: true });
  }

  if (isAuthenticated) {
    return (
      <section className="mx-auto max-w-xl px-5 py-20 text-center">
        <h1 className="font-heading text-3xl font-extrabold">
          You're already signed in
        </h1>
        <Link
          to="/dashboard"
          className="mt-6 inline-flex rounded-full bg-forest-600 px-5 py-3 font-semibold text-white hover:bg-forest-700"
        >
          Go to dashboard
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto grid min-h-[65vh] max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 sm:px-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-forest-700">
          Welcome back
        </p>
        <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
          Sign in and keep your ideas growing.
        </h1>
        <p className="mt-5 max-w-lg leading-7 text-muted">
          Access your dashboard and continue creating and managing your
          articles.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-9"
      >
        <h2 className="font-heading text-2xl font-extrabold">Sign in</h2>
        <p className="mt-2 text-sm text-muted">
          Enter your details to continue.
        </p>

        <div className="mt-7">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none transition focus:border-forest-600 focus:ring-2 focus:ring-forest-100"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-semibold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none transition focus:border-forest-600 focus:ring-2 focus:ring-forest-100"
          />
        </div>

        {error && (
          <p role="alert" className="mt-4 text-sm font-medium text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="mt-7 w-full rounded-full bg-forest-600 px-5 py-3 font-semibold text-white transition hover:bg-forest-700"
        >
          Sign in
        </button>

        <p className="mt-5 text-xs leading-5 text-muted">
          Demo only: any non-empty email and password will work. This form
          does not verify credentials with a server.
        </p>
      </form>
    </section>
  );
}

export default Login;
