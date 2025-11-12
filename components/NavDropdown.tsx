"use client";

import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface NavDropdownProps {
  label: string;
  items: string[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function NavDropdown({
  label,
  items,
  isOpen,
  onOpen,
  onClose,
}: NavDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  return (
    <div
      ref={dropdownRef}
      className="relative group"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button className="flex items-center gap-1 hover:text-gray-300 transition-colors py-2">
        <span>{label}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 w-56 bg-[#003d5c] shadow-lg rounded-sm py-2 border border-gray-600">
          {items.map((item) => (
            <div
              key={item}
              className="px-4 py-3 hover:bg-[#004d70] cursor-pointer text-sm transition-colors text-white"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
