"use client";

import { Menu, Search, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import SignInModal from './SignInModal';
import NavDropdown from './NavDropdown';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [laptopMenuActive, setLaptopMenuActive] = useState<string | null>('industries');

  const router = useRouter();

  const dropdownItems = {
    industries: [
      'Financial Services',
      'Consumer & Retail',
      'Energy & Materials',
      'Healthcare',
      'Public & Social Sector',
      'Technology, Media & Telecommunications',
      'Travel, Logistics & Transport',
    ],
    capabilities: [
      'Strategy & Corporate Finance',
      'Operations',
      'Organization & Change',
      'Risk & Resilience',
      'Digital & Analytics',
      'Marketing & Sales',
    ],
    insights: ['Explainers', 'Articles', 'Reports', 'Case Studies', 'Podcasts', 'Videos'],
    careers: ['Join Our Team', 'University Programs', 'Consulting', 'Operations', 'Digital'],
    about: ['About V10X', 'Leadership', 'Office Locations', 'Sustainability', 'News & Events'],
  };

  // Lock background scroll while mobile menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = prev || '';
    return () => {
      document.body.style.overflow = prev || '';
    };
  }, [mobileMenuOpen]);

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  return (
    <>
      <header className="bg-[#002b49] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 lg:gap-8">
              <button
                onClick={() => setMobileMenuOpen((s) => !s)}
                className="p-2 hover:bg-gray-700/50 rounded transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <div className="flex items-baseline gap-1 font-serif">
                <div className="text-xl lg:text-2xl font-normal">
                  <Link href="/">v10x</Link>
                </div>
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
              <div className="cursor-pointer hover:text-gray-300 transition-colors">Locations</div>
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
              <button onClick={() => setSignInOpen(true)} className="hover:text-gray-300 transition-colors">
                Sign In
              </button>
              <span className="text-gray-500 hidden lg:inline">|</span>
              <span className="cursor-pointer hover:text-gray-300 transition-colors hidden lg:inline">Subscribe</span>
              <button className="p-2 hover:bg-gray-700/50 rounded transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Menu overlay: stacked menu for small screens, two-column panel for large screens */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
            <div className="relative h-full w-full">
              {/* Large-screen two-column panel */}
              <div className="hidden lg:flex h-full">
                <aside className="w-72 bg-[#002b49] text-white flex-shrink-0">
                  <div className="p-6 pt-4 border-b border-[#123] flex items-center justify-between">
                    <div className="font-serif text-xl">v10x</div>
                    <button onClick={() => setMobileMenuOpen(false)} className="p-1 hover:bg-white/10 rounded">
                      <X size={20} />
                    </button>
                  </div>
                  <nav className="p-6 space-y-4">
                    {[
                      { key: 'industries', label: 'Industries' },
                      { key: 'capabilities', label: 'Capabilities' },
                      { key: 'insights', label: 'Our Insights' },
                      { key: 'locations', label: 'Locations' },
                      { key: 'careers', label: 'Careers' },
                      { key: 'about', label: 'About Us' },
                      { key: 'blog', label: 'Blog' },
                      // { key: 'subscribe', label: 'Email Subscriptions' },
                      { key: 'signin', label: 'Sign In' },
                    ].map((it) => {
                      const active = laptopMenuActive === it.key;
                      return (
                        <button
                          key={it.key}
                          onClick={() => {
                            if (it.key === 'blog') {
                              setMobileMenuOpen(false);
                              router.push('/blog');
                              return;
                            } else if (it.key === 'signin') {
                              setSignInOpen(true);
                            } else {
                              setLaptopMenuActive(it.key);
                            }
                          }}
                          className={`w-full text-left flex items-center justify-between py-2 ${
                            active ? 'text-cyan-400' : 'text-white'
                          }`}
                        >
                          <span>{it.label}</span>
                          {/* <ChevronDown size={18} /> */}
                        </button>
                      );
                    })}
                  </nav>
                </aside>

                <div className="flex-1 bg-[#f4f4f4] p-12 overflow-auto">
                  <div className="max-w-[1100px] mx-auto">
                    <h2 className="text-4xl font-serif mb-6 text-[#0f1720]">
                      {laptopMenuActive
                        ? laptopMenuActive.charAt(0).toUpperCase() + laptopMenuActive.slice(1)
                        : 'Menu'}
                    </h2>
                    <div className="border-t border-gray-300 mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#0f1720]">
                      {(laptopMenuActive === 'industries'
                        ? dropdownItems.industries
                        : laptopMenuActive === 'capabilities'
                        ? dropdownItems.capabilities
                        : laptopMenuActive === 'insights'
                        ? dropdownItems.insights
                        : laptopMenuActive === 'careers'
                        ? dropdownItems.careers
                        : laptopMenuActive === 'about'
                        ? dropdownItems.about
                        : ['Locations']
                      ).map((item) => (
                        <div key={item} className="py-2">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Small-screen stacked menu (keeps previous look) */}
              <div className="lg:hidden relative h-full w-full bg-[#002b49] overflow-auto">
                <div className="px-6 py-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="font-serif text-xl">v10x</div>
                    <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                      <X size={22} />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="font-semibold text-xs uppercase tracking-wider text-gray-400">Industries</div>
                    {dropdownItems.industries.map((item) => (
                      <Link
                        key={item}
                        href={`/${slugify(item)}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="block py-2 text-sm text-white hover:text-gray-300"
                      >
                        {item}
                      </Link>
                    ))}

                    <div className="font-semibold text-xs uppercase tracking-wider text-gray-400 mt-4">Capabilities</div>
                    {dropdownItems.capabilities.map((item) => (
                      <Link
                        key={item}
                        href={`/${slugify(item)}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="block py-2 text-sm text-white hover:text-gray-300"
                      >
                        {item}
                      </Link>
                    ))}

                    <div className="font-semibold text-xs uppercase tracking-wider text-gray-400 mt-4">Our Insights</div>
                    {dropdownItems.insights.map((item) => (
                      <Link
                        key={item}
                        href={`/${slugify(item)}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="block py-2 text-sm text-white hover:text-gray-300"
                      >
                        {item}
                      </Link>
                    ))}

                    <Link
                      href="/locations"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="block py-3 text-sm text-white hover:text-gray-300 mt-4"
                    >
                      Locations
                    </Link>

                    <div className="font-semibold text-xs uppercase tracking-wider text-gray-400 mt-4">Careers</div>
                    {dropdownItems.careers.map((item) => (
                      <Link
                        key={item}
                        href={`/${slugify(item)}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="block py-2 text-sm text-white hover:text-gray-300"
                      >
                        {item}
                      </Link>
                    ))}

                    <div className="font-semibold text-xs uppercase tracking-wider text-gray-400 mt-4">About Us</div>
                    {dropdownItems.about.map((item) => (
                      <Link
                        key={item}
                        href={`/${slugify(item)}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="block py-2 text-sm text-white hover:text-gray-300"
                      >
                        {item}
                      </Link>
                    ))}

                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        router.push('/blog');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="block py-3 text-sm text-white hover:text-gray-300 mt-4 border-t border-gray-700 pt-4 text-left w-full"
                    >
                      Blog
                    </button>

                    <Link
                      href="/subscribe"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="block py-3 text-sm text-white hover:text-gray-300 mt-2"
                    >
                      Subscribe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <SignInModal isOpen={signInOpen} onClose={() => setSignInOpen(false)} />
    </>
  );
}
