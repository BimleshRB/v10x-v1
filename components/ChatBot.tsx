"use client";

import { MessageCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-[#002b49] text-white p-4 flex items-center gap-2">
            <Sparkles size={20} />
            <div>
              <div className="font-semibold">Ask V10X</div>
              <div className="text-xs text-gray-300">AI CHATBOT (BETA)</div>
            </div>
          </div>
          <div className="p-4 h-64 bg-gray-50 flex items-center justify-center text-gray-500">
            <p className="text-sm text-center">
              How can I help you today?
            </p>
          </div>
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="Ask a question..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-110"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}
