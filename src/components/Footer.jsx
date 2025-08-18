import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#282e3a] text-gray-300 relative mt-">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 via-purple-600/5 to-transparent"></div>

      <div className=" w-11/12 mx-auto py-12 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">NextGenReviews</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            A modern and interactive game review platform where users can add,
            edit, and delete game reviews. Stay ahead with the next generation
            of gaming insights.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/reviews" className="hover:text-blue-400 transition">
                Reviews
              </a>
            </li>
            <li>
              <a href="/add-game" className="hover:text-blue-400 transition">
                Add Game
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/about" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-400 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-400 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-blue-400 transition">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-sky-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-gray-800 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-400/50 mt-10 py-6 text-center text-sm text-gray-300 relative z-10">
        © {new Date().getFullYear()} NextGenReviews — All Rights Reserved.
      </div>
    </footer>
  );
}
