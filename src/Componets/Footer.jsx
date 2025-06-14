import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter,  } from 'react-icons/fa'
import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-6 mt-8">
    <div className="container mx-auto px-4 text-center md:text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>Email: support@rommetfinder.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Smart Street, Tech City</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/terms" className="hover:text-blue-200">
                Terms and Conditions
              </Link>
            </li>
            
            <li>
              <Link to="/myProfile" className="hover:text-blue-200">
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-blue-200">
                My Rommet Finder
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 border-t border-blue-500 pt-4 text-sm text-center md:text-left">
        <p> © 2025 RommetFinder. All   reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer