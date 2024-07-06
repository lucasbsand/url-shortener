import { useState } from "react";
import MenuButton from "./MenuButton";
import Navbar from "./Navbar";
import Logo from "./Logo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative mx-6 flex items-center justify-between py-8 md:m-0 md:mx-auto md:max-w-7xl md:gap-8 md:px-6">
      <Logo />
      <Navbar isOpen={isOpen} />
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

export default Header;
