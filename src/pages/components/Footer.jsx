import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Link
        href={"https://github.com/ClaraKhin/may-veterinary-clinic"}
        className="source"
        target="_blank"
      >
        I'm The Source Code😁
      </Link>
    </footer>
  );
};
export default Footer;
