import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="w-1/5 h-full overflow-hidden border-r">
      <nav>
        <div className="logo h-14 flex items-center justify-center">
          <h1 className="text-3xl font-bold">BLOG NEWS</h1>
        </div>

        <ul className="py-14 px-8 space-y-12">
          <div className="space-y-6">
            <li className="border px-2 py-2">
              <Link to={"/"} className="flex items-center gap-4 text-lg">
                <MdKeyboardDoubleArrowRight />
                Homepage
              </Link>
            </li>
            <li className="border px-2 py-2">
              <Link to={"/about"} className="flex items-center gap-4 text-lg">
                <MdKeyboardDoubleArrowRight />
                About
              </Link>
            </li>
            <li className="border px-2 py-2">
              <Link to={"/news"} className="flex items-center gap-4 text-lg">
                <MdKeyboardDoubleArrowRight />
                News
              </Link>
            </li>
            <li className="border px-2 py-2">
              <Link to={"/contact"} className="flex items-center gap-4 text-lg">
                <MdKeyboardDoubleArrowRight />
                Contact
              </Link>
            </li>
          </div>

          <hr />

          <div className="space-y-6">
            <li className="border px-2 py-2">
              <Link to={"/login"} className="flex items-center gap-4 text-lg">
                Login
              </Link>
            </li>
            <li className="border px-2 py-2">
              <Link to={"/signup"} className="flex items-center gap-4 text-lg">
                Signup
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
