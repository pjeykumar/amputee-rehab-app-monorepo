import Link from "next/link";
export default ({ currentuser }) => {
  const links = [
    !currentuser && { label: "Sign Up", href: "/auth/signup" },
    !currentuser && { label: "Sign In", href: "/auth/signin" },
    currentuser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => (
      <li key={href}>
        <Link href={href}>
          <a className="nav-link">{label}</a>
        </Link>
      </li>
    ));
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Amputee Rehab App!</a>
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};
