import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
    <div className="max-w-4xl mx-auto px-4">
      <p>&copy; 2025 Abhijit. Designed & developed with ❤️</p>
      <div className="mt-3 flex justify-center space-x-6">
        <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
        <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
        <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer