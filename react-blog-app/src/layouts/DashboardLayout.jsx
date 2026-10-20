
import { NavLink, Outlet } from "react-router-dom";

const dashboardLinkClass = ({ isActive }) =>
  `block rounded-xl px-4 py-3 text-sm font-semibold transition ${
    isActive
      ? "bg-forest-100 text-forest-700"
      : "text-stone-600 hover:bg-stone-100 hover:text-ink"
  }`;

function DashboardLayout() {
  return (
    <div className="mx-auto my-8 grid min-h-[420px] max-w-7xl overflow-hidden rounded-3xl border border-line bg-white md:mx-8 md:grid-cols-[230px_minmax(0,1fr)] xl:mx-auto">
      <aside className="border-b border-line bg-stone-50 p-5 md:border-b-0 md:border-r md:p-6">
        <p className="px-3 text-xs font-extrabold tracking-widest text-muted">
          WORKSPACE
        </p>

        <h2 className="mb-6 mt-3 px-3 font-heading text-xl font-extrabold tracking-tight">
          Dashboard
        </h2>

        <nav
          aria-label="Dashboard navigation"
          className="flex flex-wrap gap-2 md:flex-col"
        >
          <NavLink
            to="/dashboard"
            end
            className={dashboardLinkClass}
          >
            Overview
          </NavLink>

          <NavLink
            to="/posts"
            className={dashboardLinkClass}
          >
            View Posts
          </NavLink>

          <NavLink
            to="/new-post"
            className={dashboardLinkClass}
          >
            Make a Post
          </NavLink>

          <NavLink
            to="/"
            className={dashboardLinkClass}
          >
            Back to home
          </NavLink>
        </nav>
      </aside>

      <main className="min-w-0 p-6 sm:p-9">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
