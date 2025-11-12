"use client";

import { Menu, Search, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SignInModal from './SignInModal';
import NavDropdown from './NavDropdown';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [laptopMenuActive, setLaptopMenuActive] = useState<string | null>("industries");

  const dropdownItems = {
    industries: [
      'Financial Services',
      'Consumer & Retail',
      'Energy & Materials',
      'Healthcare',
      'Public & Social Sector',
      'Technology, Media & Telecommunications',
      'Travel, Logistics & Transport'
    ],
    capabilities: [
      'Strategy & Corporate Finance',
      'Operations',
      'Organization & Change',
      'Risk & Resilience',
      'Digital & Analytics',
      'Marketing & Sales'
    ],
    insights: [
      'Explainers',
      'Articles',
      'Reports',
      'Case Studies',
      'Podcasts',
      'Videos'
    ],
    careers: [
      'Join Our Team',
      'University Programs',
      'Consulting',
      'Operations',
      'Digital'
    ],
    about: [
      'About V10X',
      'Leadership',
      'Office Locations',
      'Sustainability',
      'News & Events'
    ]
  };

  return (
    <>
      <header className="bg-[#002b49] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 lg:gap-8">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 hover:bg-gray-700/50 rounded transition-colors "
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <div className="flex items-baseline gap-1 font-serif">
                <div className="text-xl lg:text-2xl font-normal"> <Link href="/">V10X</Link></div>
                {/* <div className="text-xs lg:text-sm font-light">&</div>
                <div className="text-xs lg:text-sm font-light">Company</div> */}
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8 text-sm flex-1 ml-12">
              <NavDropdown
                label="Industries"
                items={dropdownItems.industries}
                isOpen={activeDropdown === 'industries'}
                onOpen={() => setActiveDropdown('industries')}
                onClose={() => setActiveDropdown(null)}
              />
              <NavDropdown
                label="Capabilities"
                items={dropdownItems.capabilities}
                isOpen={activeDropdown === 'capabilities'}
                onOpen={() => setActiveDropdown('capabilities')}
                onClose={() => setActiveDropdown(null)}
              />
              <NavDropdown
                label="Our Insights"
                items={dropdownItems.insights}
                isOpen={activeDropdown === 'insights'}
                onOpen={() => setActiveDropdown('insights')}
                onClose={() => setActiveDropdown(null)}
              />
              <div className="cursor-pointer hover:text-gray-300 transition-colors">
                Locations
              </div>
              <NavDropdown
                label="Careers"
                items={dropdownItems.careers}
                isOpen={activeDropdown === 'careers'}
                onOpen={() => setActiveDropdown('careers')}
                onClose={() => setActiveDropdown(null)}
              />
              <NavDropdown
                label="About Us"
                items={dropdownItems.about}
                isOpen={activeDropdown === 'about'}
                onOpen={() => setActiveDropdown('about')}
                onClose={() => setActiveDropdown(null)}
              />
              <div className="cursor-pointer hover:text-gray-300 transition-colors">
               <Link href="/blog">Blog</Link>
              </div>
            </nav>

            <div className="flex items-center gap-4 lg:gap-6 text-sm">
              <button
                onClick={() => setSignInOpen(true)}
                className="hover:text-gray-300 transition-colors"
              >
                Sign In
              </button>
              <span className="text-gray-500 hidden lg:inline">|</span>
              <span className="cursor-pointer hover:text-gray-300 transition-colors hidden lg:inline">
                Subscribe
              </span>
              <button className="p-2 hover:bg-gray-700/50 rounded transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <>
            {/* mobile menu for small screens */}
            <div className="border-t border-gray-700 bbg-[#002b49] lg:hidden">
              <div className="px-4 py-4 space-y-2">
                <div className="font-semibold text-xs uppercase tracking-wider text-gray-400 py-2">
                  Industries
                </div>
                {dropdownItems.industries.map((item) => (
                  <div key={item} className="py-2 pl-4 text-sm hover:text-gray-300 cursor-pointer">
                    {item}
                  </div>
                ))}

                <div className="font-semibold text-xs uppercase tracking-wider text-gray-400 py-2 mt-4">
                  Capabilities
                </div>
                {dropdownItems.capabilities.map((item) => (
                  <div key={item} className="py-2 pl-4 text-sm hover:text-gray-300 cursor-pointer">
                    {item}
                  </div>
                ))}

                <div className="font-semibold text-xs uppercase tracking-wider text-gray-400 py-2 mt-4">
                  Our Insights
                </div>
                {dropdownItems.insights.map((item) => (
                  <div key={item} className="py-2 pl-4 text-sm hover:text-gray-300 cursor-pointer">
                    {item}
                  </div>
                ))}

                <div className="py-3 text-sm hover:text-gray-300 cursor-pointer">Locations</div>

                <div className="font-semibold text-xs uppercase tracking-wider text-gray-400 py-2 mt-4">
                  Careers
                </div>
                {dropdownItems.careers.map((item) => (
                  <div key={item} className="py-2 pl-4 text-sm hover:text-gray-300 cursor-pointer">
                    {item}
                  </div>
                ))}

                <div className="font-semibold text-xs uppercase tracking-wider text-gray-400 py-2 mt-4">
                  About Us
                </div>
                {dropdownItems.about.map((item) => (
                  <div key={item} className="py-2 pl-4 text-sm hover:text-gray-300 cursor-pointer">
                    {item}
                  </div>
                ))}

                <div className="py-3 text-sm hover:text-gray-300 cursor-pointer"> <Link href="/blog">Blog</Link> </div>
                <div className="py-3 text-sm hover:text-gray-300 cursor-pointer border-t border-gray-700 mt-4">
                  Subscribe
                </div>
              </div>
            </div>

            {/* laptop/desktop menu overlay */}
            <div className="hidden lg:block fixed inset-0 z-50 top-16"> 
              <div className="flex h-[calc(100vh-4rem)]"> 
                {/* left menu */}
                <aside className="w-72 bg-[#002b49] text-white flex-shrink-0">
                  <div className="p-6  pt-0 border-b border-[#2191b4] flex items-center justify-between">
                    {/* <div className="font-serif text-xl">V10X</div> */}
                    {/* <button onClick={() => setMobileMenuOpen(false)} className="p-1 hover:bg-white/10 rounded">
                      <X size={20} />
                    </button> */}
                  </div>
                  <nav className="p-6 space-y-4">
                    <button onClick={() => setLaptopMenuActive('industries')} className={`w-full text-left ${laptopMenuActive === 'industries' ? 'text-cyan-400' : 'text-white'} flex items-center justify-between`}> <span>Industries</span> </button>
                    <button onClick={() => setLaptopMenuActive('capabilities')} className={`w-full text-left ${laptopMenuActive === 'capabilities' ? 'text-cyan-400' : 'text-white'} flex items-center justify-between`}> <span>Capabilities</span> </button>
                    <button onClick={() => setLaptopMenuActive('insights')} className={`w-full text-left ${laptopMenuActive === 'insights' ? 'text-cyan-400' : 'text-white'} flex items-center justify-between`}> <span>Our Insights</span> </button>
                    <button onClick={() => setLaptopMenuActive('locations')} className={`w-full text-left ${laptopMenuActive === 'locations' ? 'text-cyan-400' : 'text-white'} flex items-center justify-between`}> <span>Locations</span>  </button>
                    <button onClick={() => setLaptopMenuActive('careers')} className={`w-full text-left ${laptopMenuActive === 'careers' ? 'text-cyan-400' : 'text-white'} flex items-center justify-between`}> <span>Careers</span>  </button>
                    <button onClick={() => setLaptopMenuActive('about')} className={`w-full text-left ${laptopMenuActive === 'about' ? 'text-cyan-400' : 'text-white'} flex items-center justify-between`}> <span>About Us</span> </button>
                    <Link href="/blog" className="block text-white mt-4">Blog</Link>
                  </nav>
                </aside>

                {/* right content */}
                <div className="flex-1 bg-[#f4f4f4] p-12 overflow-auto">
                  <div className="max-w-[1100px] mx-auto">
                    <h2 className="text-4xl font-serif mb-6 text-[#0f1720]">{laptopMenuActive ? laptopMenuActive.charAt(0).toUpperCase() + laptopMenuActive.slice(1) : 'Menu'}</h2>
                    <div className="border-t border-gray-300 mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#0f1720]">
                      {(laptopMenuActive === 'industries' ? dropdownItems.industries : laptopMenuActive === 'capabilities' ? dropdownItems.capabilities : laptopMenuActive === 'insights' ? dropdownItems.insights : laptopMenuActive === 'careers' ? dropdownItems.careers : laptopMenuActive === 'about' ? dropdownItems.about : ['Locations']).map((item) => (
                        <div key={item} className="py-2">{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      <SignInModal isOpen={signInOpen} onClose={() => setSignInOpen(false)} />
    </>
  );
}
