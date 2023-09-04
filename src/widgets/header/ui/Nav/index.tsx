import classNames from "classnames";
import { Navbar, Nav as OldNav } from "react-bootstrap";
import { Link } from "react-router-dom";

const navItems = [
  { title: "Add Friend", route: "/friends/new" },
  { title: "Edit Profile", route: "/" },
  { title: "About", route: "/" },
  { title: "Logout", route: "/" },
];

export const Nav = () => {
  return (
    <Navbar className="bg-secondary mb-5 p-3">
      <Link to="/">
        <Navbar.Brand className="text-white">Friend App</Navbar.Brand>
      </Link>

      <OldNav className="text-white mx-3">
        {navItems.map((item, idx) => (
          <OldNav.Item key={item.title} className={classNames(idx !== navItems.length - 1 && "pe-4")}>
            <Link className="text-white" to={item.route}>{item.title}</Link>
          </OldNav.Item>
        ))}
      </OldNav>
    </Navbar>
  );
};
