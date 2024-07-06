import clsx from "clsx";

function Navbar({ isOpen }: { isOpen: boolean }) {
  return (
    <nav
      className={clsx(
        "mt absolute left-0 top-24 z-50 max-h-96 w-full overflow-hidden rounded-xl bg-dark-violet p-8 transition-all duration-500 md:static md:max-h-96 md:bg-transparent md:p-0",
        !isOpen && "max-h-[0px] py-0",
      )}
    >
      <div className="md-w-full flex flex-col items-center text-center md:flex-row md:justify-between">
        <ul className="mb-8 flex w-full flex-col gap-8 border-b border-grayish-violet pb-8 md:mb-0 md:w-fit md:flex-row md:border-0 md:pb-0">
          <li>
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Resources
            </a>
          </li>
        </ul>
        <ul className="flex w-full flex-col gap-8 md:w-fit md:flex-row">
          <li className="md:flex md:items-center">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li className="flex h-12 md:w-32">
            <a
              className="nav-link flex w-full flex-1 items-center justify-center rounded-full bg-cyan text-white hover:text-white hover:brightness-110"
              href="#"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
