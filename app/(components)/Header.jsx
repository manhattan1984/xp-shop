import React from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex justify-between p-2 fixed w-full">
      <p className={"text-xl uppercase font-gajraj"}>Xperience</p>
      <FiMenu className="text-xl" />
    </div>
  );
};

export default Header;
