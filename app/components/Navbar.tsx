import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Navbar(){
  return (
    <nav className="flex justify-between items-center p-4">
      <div>
        <a href="/" className="text-xl font-bold">
          Hike Around
        </a>
      </div>
      <div className="flex gap-8">
        <a href="/" className="hover:underline hover:scale-110 transition">
          HIKES
        </a>
        <a href="/" className="hover:underline hover:scale-110 transition">
          ABOUT
        </a>
        <a href="/" className="hover:underline hover:scale-110 transition">
          BLOG
        </a>
      </div>
      <div className="flex gap-4">
        <a href="/" className="hover:scale-110 transition">
          <FaInstagram size={20} />
        </a>
        <a href="/" className="hover:scale-110 transition">
          <FaTiktok size={20} />
        </a>
      </div>
    </nav>
  );
}