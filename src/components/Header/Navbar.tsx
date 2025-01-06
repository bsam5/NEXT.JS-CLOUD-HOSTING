"use client";

import { GrTechnology } from "react-icons/gr";
import styles from "./header.module.css";
import Link from "next/link";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const matchesMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  const closeMenu = () => {
    setToggleMenu(false);
  };
  return (
    <nav className={styles.navbar}>
      <div>
        <Link className={styles.logo} href="/">
          CLOUD <GrTechnology></GrTechnology> HOSTING
        </Link>
        <div className={styles.menu} onClick={matchesMenu}>
          {toggleMenu ? <AiOutlineClose /> : <RiMenu2Fill />}
        </div>
      </div>

      <ul
        className={styles.navLinks}
        style={{
          clipPath:
            (toggleMenu && "polygon(0 1%, 100% 0, 100% 100%, 0 100%)") || "",
        }}
      >
        <Link onClick={closeMenu} className={styles.navItem} href="/">
          Home
        </Link>
        <Link onClick={closeMenu} className={styles.navItem} href="/articles">
          Articles
        </Link>
        <Link onClick={closeMenu} className={styles.navItem} href="/about">
          About
        </Link>
        <Link onClick={closeMenu} className={styles.navItem} href="/admin">
          Admin Dashboard
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
