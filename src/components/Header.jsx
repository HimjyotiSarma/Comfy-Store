import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-neutral py-2 text-neutral-content ">
      <div className="align-element flex justify-center sm:justify-end">
        {/* USER */}
        {/* LINKS */}
        <div className="flex items-center justify-center gap-x-6">
          <Link to="/login" className="link-hover link text-xs sm:text-sm">
            Sign In / Guest Login
          </Link>
          <Link to="/register" className="link-hover link text-xs sm:text-sm">
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
}
