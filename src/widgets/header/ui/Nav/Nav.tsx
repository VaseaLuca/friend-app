import classNames from "classnames";
import { Navbar, Nav as OldNav } from "react-bootstrap"
import { Link } from "react-router-dom"

const navItems= ["Add Friend", "Edit Profile", "About", "Logout"]

export const Nav = () => {
  return (
    <Navbar  className="bg-secondary mb-5 p-3">
      <Link to="/">
        <Navbar.Brand className="text-white">Friend App</Navbar.Brand>
      </Link>

      <OldNav className="text-white mx-3">
        {navItems.map((item, idx) => (
          <OldNav.Item key={item} className={classNames(idx !== navItems.length - 1 && "pe-4")}>
            {item}
          </OldNav.Item>
        ))}
      </OldNav>
    </Navbar>
  );
}