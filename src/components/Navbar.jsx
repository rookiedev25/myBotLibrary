/**
 * Navbar Component
 * Displays logo on left and CTA buttons on right
 */
export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-siemens">🤖</div>
            <span className="text-xl font-semibold text-gray-900">
              Bot Library
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Documentation
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Support
            </button>
            <button className="px-6 py-2 text-sm font-medium text-white bg-siemens rounded-lg hover:bg-teal-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
