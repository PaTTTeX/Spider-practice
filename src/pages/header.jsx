import Logo from "../assets/images/spider-logo.png";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="header h-19 bg-amber-950/70 flex items-center justify-between px-4">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-14 h-14" />
      </Link>

      <ul className="text-3xl h-full flex">
        <li className="h-full">
          <Link
            className="flex items-center hover:bg-gray-300 gap-8 px-4 h-full m-auto"
            to="/"
          >
            Home
          </Link>
        </li>

        <li className="h-full">
          <Link
            className="flex items-center hover:bg-gray-300 gap-8 px-4 h-full m-auto"
            to="/usestate"
          >
            useState
          </Link>
        </li>
      </ul>
    </nav>
  );
}
