
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const navClass = ({ isActive }) =>
  `rounded-full px-3 py-2 text-sm font-medium transition-colors ${isActive
    ? "bg-forest-50 text-forest-700"
    : "text-stone-600 hover:bg-stone-100 hover:text-ink"
  }`;

function MainLayout() {
  const {  isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/", { replace: true });
  }
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-18 max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <NavLink
            to="/"
            className="flex items-center gap-2.5 font-heading text-xl font-extrabold tracking-tight"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-forest-600 text-sm text-white">
              B.
            </span>
            Bloom
          </NavLink>

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap items-center gap-1"
          >
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>

            <NavLink to="/posts" end className={navClass}>
              Articles
            </NavLink>

            <NavLink to="/new-post" className={navClass}>
              Write
            </NavLink>

            <NavLink to="/dashboard" className={navClass}>
              Dashboard
            </NavLink>
          </nav>


          {isAuthenticated ? (
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-full bg-forest-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-forest-700"
            >
              Sign out
            </button>
          ) : (
            <NavLink
              to="/login"
              className="inline-flex items-center gap-2 rounded-full bg-forest-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-forest-700"
            >
              Sign in <span aria-hidden="true">↗</span>
            </NavLink>
          )}

        </div>
      </header>

      <main className="w-full flex-1">
        <Outlet />
      </main>

      <footer className="mt-16 border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-7 sm:px-8">
          <span className="font-heading text-lg font-extrabold">
            Bloom.
          </span>

          <p className="text-sm text-muted">
            Ideas grow when they're shared.
          </p>

          <span className="text-xs text-muted">
            © 2026 Bloom Blog
          </span>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
