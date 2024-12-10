import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold">DreamHome App</p>
        <p>123 Real Estate Avenue, Suite 456</p>
        <p>City, State, ZIP Code</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@dreamhouseapp.com</p>
        <div className="mt-4 flex justify-center items-center gap-4">
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-orange-400 hover:text-white"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
              alt="Instagram"
              className="w-6 h-6"
            />
            <span>Instagram</span>
          </a>

          {/* Twitter */}
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-400 hover:text-white"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
              alt="Twitter"
              className="w-6 h-6"
            />
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

