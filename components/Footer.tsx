export default function Footer() {
  return (
  <footer className=" text-white  not-first bg-[#002b49] ">
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div>
            <div className="font-serif text-2xl mb-4">V10X </div>
            <p className="text-gray-300 max-w-sm">
              Delivering insights and research to help leaders make informed decisions. Sign up for updates or explore our latest thinking.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm text-gray-300 mb-3 uppercase tracking-wide">Explore</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">Industries</li>
                <li className="hover:text-white cursor-pointer">Capabilities</li>
                <li className="hover:text-white cursor-pointer">Our Insights</li>
                <li className="hover:text-white cursor-pointer">Locations</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm text-gray-300 mb-3 uppercase tracking-wide">Resources</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>

          <div className=" p-6 rounded">
            <h4 className="text-lg font-semibold mb-4">Subscribe to the latest V10X Insights</h4>
            <p className="text-gray-300 mb-4">Get the topics you care about delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <button className="px-4 py-3 bg-blue-500 rounded text-white">→</button>
            </div>

            {/* <div className="mt-4 border-t border-gray-600 pt-4">
              <div className="text-xs text-gray-400 mb-2">Or continue with</div>
              <div className="flex gap-2">
                <button className="flex-1 bg-white text-gray-900 py-2 rounded flex items-center justify-center">Apple</button>
                <button className="flex-1 bg-white text-gray-900 py-2 rounded flex items-center justify-center">Google</button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-sm text-gray-400 flex items-center justify-between">
          <div>© {new Date().getFullYear()} V10X </div>
          <div className="flex gap-4">
            <div className="cursor-pointer hover:text-white">Privacy</div>
            <div className="cursor-pointer hover:text-white">Terms</div>
            <div className="cursor-pointer hover:text-white">Sitemap</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
