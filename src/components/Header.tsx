import React from 'react';
import { Guitar } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
    <header className="bg-black/30 text-white sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Guitar className="w-8 h-8 text-pink-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              K-Rock Universe
            </h1>
          </div>
          
          <nav>
            <ul className="flex space-x-1">
              {['day6', 'ftisland', 'cnblue'].map((band) => (
                <li key={band}>
                  <button
                    onClick={() => setActiveTab(band)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      activeTab === band
                        ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {band.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;