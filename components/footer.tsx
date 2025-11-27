// components/Footer.tsx
import Link from "next/link";
import { Logo } from "./header/logo";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo style="text-white" style2="text-gray-200" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Our free molarity calculator helps you calculate the molarity of
              any solution with accurate results.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Calculator Tools
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center"
                >
                  Molarity Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/dilution-calculator"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center"
                >
                  Dilution Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/grams-to-moles"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center"
                >
                  Grams to Moles
                </Link>
              </li>
              <li>
                <Link
                  href="/molar-mass-calculator"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center"
                >
                  Molar Mass Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/moles-to-grams"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center"
                >
                  Moles to Grams
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Resources & Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Connect With Us
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">
                Follow us for chemistry tips and updates.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 Molarity Calculator Suite. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
