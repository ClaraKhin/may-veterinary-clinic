import React from "react";

import Image from "next/image";
import Logo from "../../../public/resources/Logo(2).png";
import UserImage from "../../../public/resources/user image.png";

export const Navbar = () => {
  const logo = Logo;
  const userImage = UserImage;
  return (
    <nav className="d-flex">
      <Image src={logo} alt="navLogo" priority={true} />
      <div className="navbar-end ">
        <div className="d-flex align-items-center">
          <a className="pe-4">
            <i className="bi bi-bell-fill"></i>
          </a>
          <Image src={userImage} alt="userImage" />
        </div>
        <ul className="userInfo ps-2 pt-3 pb-0">
          <li className="name">Lisa</li>
          <li>Operator</li>
        </ul>
      </div>
    </nav>
  );
};
